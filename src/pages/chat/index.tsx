// src/pages/test_chat.tsx
import { GetServerSideProps } from 'next';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import { ChatItem } from 'react-chat-elements';
import { useSession } from 'next-auth/react';
import { Bot} from '@/graphql/ogm';

// Fetch the bot based on the [bots](file:///Users/claudiobrandolino/Projects/em-eval/README.md#5%2C53-5%2C53) query parameter
export const getServerSideProps:GetServerSideProps = async (context)=> {
  const botName = context.query.bots;
  const bot = await Bot.getBy("username", botName);
  return { props: { bot } };
}

export default function TestChat({ bot }: { bot: { username: string }}) {
  const { update, data, status } = useSession();
  const router = useRouter();
  const [messages, setMessages] = useState<{text:string, from: string}[]>([]);
  const [ redirect, setRedirect ] = useState<string>('');
  useEffect(() => {
    if ((status !== 'authenticated') || !data) {
      setRedirect('/api/auth/signin');
    }
  }, [data, status]);

  if (redirect) {
    router.push(redirect);
    return <div>Redirecting...</div>;
  }

  const sendMessage = async (text:string) => {
    // Make a POST request to the bot's endpoint...
    // Save the message in the database...
    setMessages([...messages, { text, from: 'User' }]);
  };

  return (
    <div>
      {messages.map((message, index) => (
        <ChatItem id={message.text} avatar='' key={index} {...message} />
      ))}
      <button onClick={() => sendMessage('Hello, bot!')}>Send Message</button>
    </div>
  );
}