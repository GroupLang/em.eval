// src/components/ChatItemCollection.tsx
import { FC, useEffect, useRef } from 'react';
import Avatar from 'react-avatar';
import { ChatItem } from 'react-chat-elements';

type ChatMessage = {
  text: string;
  from: string;
};

type ChatItemCollectionProps = {
  messages: ChatMessage[];
};

const ChatItemCollection: FC<ChatItemCollectionProps> = ({ messages }) => {
  const messagesEndRef = useRef<HTMLDivElement | null>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };
  useEffect(scrollToBottom, [messages]);

  return (
    <>
      {messages.map((message, index) => (
        <ChatItem
          id={message.text}
          key={index}
          avatar={""}
          {...message}
        />
      ))}
      <div ref={messagesEndRef} />
    </>
  );
};

export default ChatItemCollection;