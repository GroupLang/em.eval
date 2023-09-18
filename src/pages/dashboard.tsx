import { useSession } from 'next-auth/react';
import { useEffect, useState } from 'react';
import { useRouter } from 'next/dist/client/router.js';
import { gql } from 'graphql-tag';
import { User, useQuery } from '@/graphql';
import BotList from '@/components/BotList';
import Filter from '@/components/BotFilter';


const GET_USER = gql`
  query GetUser($id: ID!) {
    User(where: { id: $id }) {
      apiKey
    }
  }
`;

export default function Dashboard() {
  const { data: session } = useSession();
  const router = useRouter();
  const [filter, setFilter] = useState({ text: '', showAuthorBots: false });
  const { data, loading, error } = useQuery<User>(GET_USER, {
    variables: { username: session?.user?.name },
  }) 
  useEffect(() => {
    if (!loading && !session) {
      router.push('/api/auth/signin');
    }
  }, [session, loading, router]);

  if (loading) {
    return <div>Loading...</div>;
  }
  if (error) {
    return <div>Error: {error.message}</div>;
  }

  return (
    <div>
      <h1>Dashboard</h1>
      <Filter value={filter} onChange={setFilter} />
      
      {data ? <BotList user={data} filter={filter} /> : ""}
    </div>
  );
}