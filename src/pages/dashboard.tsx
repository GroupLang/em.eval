import { useSession } from 'next-auth/react';
import { useEffect } from 'react';
import { useRouter } from 'next/dist/client/router.js';
import { gql } from 'graphql-tag';
import { useQuery } from '@/graphql';

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

  const { data, loading, error } = useQuery(GET_USER, {
    variables: { username: session?.user?.name },
  });

  // Redirect to login page if not authenticated
  useEffect(() => {
    if (!loading && !session) {
      router.push('/api/auth/signin');
    }
  }, [session, loading, router]);

  if (loading || !data) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  return (
    <div>
      <h1>Dashboard</h1>
      <p>Your API Key: {data.User.apiKey}</p>
    </div>
  );
}