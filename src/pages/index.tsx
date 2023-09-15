import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import gql from 'graphql-tag';

import client from '../apollo/client';

import styles from '../style/Home.module.css';

import { SignInOut } from '../components/SignInOut';
import { UserList } from '../components/UserList';
import { User } from '@/graphql';

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
  }).catch(e => {
    // We need to handle the case where client.query returns void; otherwise our app will have a build failure
    console.error(`Unable to query our backend API: ${e}`)

    // Notice we're matching the shape our destructured variable is looking for
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