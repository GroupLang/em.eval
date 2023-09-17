// src/components/ChatItemCollection.tsx
import { FC, useEffect, useRef } from 'react';
import { ChatItem } from 'react-chat-elements';

type ChatMessage = {
  text: string;
  from: string;
};

type ChatItemCollectionProps = {
  messages: ChatMessage[];
  userImage: string;
  botImage: string;
};

const ChatItemCollection: FC<ChatItemCollectionProps> = ({ messages, userImage, botImage }) => {
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
          avatar={message.from === 'user' ? userImage : botImage}
          key={index}
          {...message}
        />
      ))}
      <div ref={messagesEndRef} />
    </>
  );
};

export default ChatItemCollection;