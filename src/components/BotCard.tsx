import { Bot } from '@/graphql/ogm';
import { FC } from 'react';
import Avatar from 'react-avatar';

type BotCardProps = {
  bot: typeof Bot;
};

const BotCard:FC<BotCardProps> = ({ bot }) => (
    <div key={bot.id}>
      <h2>{bot.username}</h2>
      <p>Owner: {bot.registeredBy.username}</p>
      <Avatar src={bot.registeredBy.image || ""} githubHandle={bot.registeredBy.username} />
      <p>Chats: {bot.conversations.length}</p>
    </div>
);

export default BotCard;