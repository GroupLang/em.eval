// src/pages/test_chat.tsx
import { GetServerSideProps } from 'next';
import { useRouter } from 'next/router';
import { FC, useEffect, useState, useRef, FormEvent } from 'react';
import { useSession, getSession } from 'next-auth/react';
import { gql } from 'graphql-tag';
import {   Message, useMutation, useSubscription} from '@/graphql';
import ChatItemCollection from '@/components/ChatItems';
import { Bot } from '@/graphql/ogm';

type ChatConversation = {
  id: string;
  messages: Message[];
};

export type ChatProps = {
  conversation: ChatConversation;
  bot: typeof Bot;
};

export const getServerSideProps:GetServerSideProps = async (context)  => {
  const botUsername = context.params?.bot;
  const session = await getSession(context);
  if (!session) {
    return {
      redirect: {
        destination: '/api/auth/signin',
        permanent: false,
      },
    };
  }

  const bot = await Bot.getBy('username', botUsername);

  if (!bot) {
    return {
      notFound: true,
    };
  }

  return {
    props: {
      bot,
    },
  };
};

const SEND_MESSAGE = gql`
  mutation SendMessage($input: MessageInput!) {
    sendMessage(input: $input) {
      ...MessageFragment
    }
  }
`;

const MESSAGE_ADDED = gql`
  subscription MessageAdded($conversationId: ID!) {
    messageAdded(conversationId: $conversationId) {
      ...MessageFragment
      conversation {
        id
        messages {
          ...MessageFragment
        }
      }
    }
  }
`;

const Chat:FC<ChatProps> = ({ bot, conversation }) => {
  const router = useRouter();
  const { data: sessionData, status } = useSession();

  const { data, loading, error } = useSubscription(MESSAGE_ADDED, {
    variables: { conversationId: conversation.id },
  });

  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    if (data?.messageAdded) {
      setMessages((prevMessages) => [
        ...prevMessages,
        {
          text: data.messageAdded.text,
          from: data.messageAdded.from,
        },
      ]);
    }
  }, [data]);

  const [sendMessage] = useMutation(SEND_MESSAGE);

  const handleSendMessage = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const element = (event.currentTarget.elements.namedItem('message')! as HTMLInputElement)
    const text = element.value;
    sendMessage({
      variables: {
        input: {
          conversationId: conversation.id,
          from: bot,
          text,
        },
      },
    }).catch((error) => {
      console.error("Error sending message:", error);
    });;
    element.value = "";
  };

  useEffect(() => {
    if ((status !== 'authenticated') || !data) {
      setRedirect('/api/auth/signin');
    }
  }, [data, status]);

  
  const [messages, setMessages] = useState<{text:string, from: string}[]>([]);
  const [ redirect, setRedirect ] = useState<string>('');


  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  if (redirect) {
    router.push(redirect);
    return <div>Redirecting...</div>;
  }

  return (
    <form onSubmit={handleSendMessage}>
      <ChatItemCollection messages={messages}  />
      <div ref={messagesEndRef} />
    </form>
  );
}

export default Chat;