// src/components/BotList.tsx
import { useState, useEffect, FC } from 'react';
import { gql } from 'graphql-tag';
import { User, useQuery } from '@/graphql';
import { Bot } from '@/graphql/ogm';
import BotCard from '@/components/BotCard';
import { Model, OGM } from '@neo4j/graphql-ogm';

const GET_BOTS = gql`
  query GetBots {
    Bots {
      id
      username
      owner {
        username
        avatar
      }
      chats {
        id
      }
    }
  }
`;

type BotListProps = {
  user: User | null;
  filter: {
    text: string;
    showAuthorBots: boolean;
  };
};

const BotList: FC<BotListProps> = ({ user, filter }) => {
  const { data, loading, error } = useQuery<typeof Bot.model[]>(GET_BOTS);

  if (loading) {
    return <div>Loading...</div>;
  }
  if (error) {
    return <div>Error: {error.message}</div>;
  }
  if (!data) {
    return <div>No bots found</div>;
  }

  const filteredBots = data.filter(bot => 
    bot.
    bot.username.includes(filter.text) && (!filter.showAuthorBots || bot.registeredBy.username === user?.username)
  );

  return (
    <div>
      {filteredBots.map((bot) =>
        <BotCard key={bot.id} bot={bot} />
      )}
    </div>
  );
};

export default BotList;