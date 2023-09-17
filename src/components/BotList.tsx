// src/components/BotList.tsx
import { useState, useEffect, FC } from 'react';
import { gql } from 'graphql-tag';
import { User, useQuery } from '@/graphql';
import { Bot } from '@/graphql/ogm';
import BotCard from '@/components/BotCard';

const GET_USER = gql`
  query GetUser($id: ID!) {
    User(where: { id: $id }) {
      apiKey
    }
  }
`;

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
};


const BotList:FC<BotListProps>  = ({ user }) => {
  const { data, loading, error } = useQuery<typeof Bot[]>(GET_BOTS)

  const [filter, setFilter] = useState('');
  const [showOwnBots, setShowOwnBots] = useState(false);

  const filteredBots = data!.filter(bot => 
    bot.username.includes(filter) && (!showOwnBots || bot.registeredBy.username === user?.username)
  );

  if (loading) {
    return <div>Loading...</div>;
  }
  if (error) {
    return <div>Error: {error.message}</div>;
  }

  return (
    <div>
      <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" type="text" value={filter} onChange={(e) => setFilter(e.target.value)} placeholder="Filter bots" />
      <div className="mt-2">
        <input className="mr-2 leading-tight" type="checkbox" placeholder='Filter by name' checked={showOwnBots} onChange={(e) => setShowOwnBots(e.target.checked)} />
        <span className="text-sm">
          Show only my bots
        </span>
      </div>
      {filteredBots.map((bot) =>
        <BotCard key={bot.id} bot={bot} />
      )}
    </div>
  );
};

export default BotList;