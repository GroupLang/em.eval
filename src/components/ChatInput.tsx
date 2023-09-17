// src/components/ChatInput.tsx
import { FC, FormEvent } from 'react';
import { Input, Button } from 'react-chat-elements';

type ChatInputProps = {
  handleSendMessage: (event: FormEvent<HTMLFormElement>) => void;
};

const ChatInput: FC<ChatInputProps> = ({ handleSendMessage }) => (
  <form onSubmit={handleSendMessage}>
    <Input
      maxHeight={80}
      placeholder="Type a message"
      multiline={true}
      rightButtons={
        <Button color="white" backgroundColor="black" text="Send" />
      }
    />
  </form>
);

export default ChatInput;