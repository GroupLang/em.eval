import { Bot } from '@/graphql/ogm';
import { FC, useState } from 'react';
import Avatar from 'react-avatar';

type BotCardProps = {
  bot: typeof Bot.model
};


const BotCard:FC<BotCardProps> = ({ bot }) => {
  const [showModal, setShowModal] = useState(false);
  const handleOpenModal = () => {
    setShowModal(true);
  };
  return (
    <div key={bot.id}>
    <h2>{bot.username}</h2>
    <p>Owner: {bot.registeredBy.username}</p>
    <Avatar src={bot.registeredBy.image || ""} githubHandle={bot.registeredBy.username} />
    <p>Chats: {bot.conversations.length}</p>
    <button type="button" onClick={handleOpenModal}>new chat</button>
  </div>

  )
}

export default BotCard;