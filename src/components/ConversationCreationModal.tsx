import { FC, FormEvent, useState } from "react";
import { useMutation, gql, Conversation } from '@/graphql';
import { useRouter } from "next/router";
import Modal from "react-modal";

type ConversationCreationModalProps = {
  botId: string;
  showModal: boolean;
  setShowModal: (showModal: boolean) => void;
};


const CREATE_CONVERSATION = gql`
  mutation CreateConversation($input: CreateConversationInput!) {
    createConversation(input: $input) {
      id
    }
  }
`;
const ConversationCreationModal: FC<ConversationCreationModalProps> = ({ botId, showModal, setShowModal }) => {
  const router = useRouter();
  const [name, setName] = useState<string>('');
  const [createConversation] = useMutation(CREATE_CONVERSATION);

  const handleCreateChat = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    // Assuming you have the userId available in your component's scope
    const { data } = await createConversation({ variables: { input: { botId, name  } } });
    router.push(`/chat/${data.createConversation.id}`);
  };
  return (
    <Modal isOpen={showModal} onRequestClose={() => setShowModal(false)}>
      <form onSubmit={handleCreateChat}>
        <input type="text" placeholder="Chat name" required value={name} />
        <button type="submit">Create Chat</button>
      </form>
    </Modal>
  );
};

export default ConversationCreationModal;