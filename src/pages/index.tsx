import Head from 'next/head';
import Image from 'next/image';
import gql from 'graphql-tag';
import styles from '../style/Home.module.css';
import { SignInOut } from '../components/SignInOut';
import { UserList } from '../components/UserList';
import { User } from '@/graphql';
import client from '../helpers/apolloClient';

export async function getStaticProps() {
  const { data } = await client.query({
    query: gql`
      query Users {
        users {
          id
          name
          accounts {
            provider
          }
        }
      }
    `,
  }).catch((e:unknown) => {
    console.error(`Unable to query our backend API: ${e}`)

    return {
      data: null
    }
  })

  return {
    props: {
      users: data?.users || null,
    },
  };
}
export default function Home({ users }:{ users: User[] }) {
  return (
    <div className={styles.container}>
      <Head>
        <title>[DEMO] Neo4j and Next.js</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <header className={styles.header}>
        <div>
          <SignInOut />
        </div>
      </header>

      <main className={styles.main}>
        <h1 className={styles.title}>
            hey
        </h1>
        <UserList className={styles.users} users={users} />
      </main>

      <footer className={styles.footer}>
        <a href="https://vercel.com" target="_blank" rel="noopener noreferrer">
          Powered by{' '}
          <span className={styles.logo}>
            <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
          </span>
        </a>
      </footer>
    </div>
  );
}