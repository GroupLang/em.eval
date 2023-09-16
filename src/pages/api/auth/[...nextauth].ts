import NextAuth, { User } from 'next-auth';
import { JWT } from 'next-auth/jwt';
import { CallbacksOptions } from 'next-auth';
import neo4j from 'neo4j-driver';
import { Neo4jAdapter } from '@next-auth/neo4j-adapter';
import TwitterProvider from 'next-auth/providers/twitter';
import GitHubProvider from 'next-auth/providers/github';
import { AdapterUser } from 'next-auth/adapters';

const driver = neo4j.driver(
  process.env.NEO4J_URI!,
  neo4j.auth.basic(process.env.NEO4J_USER!, process.env.NEO4J_PASSWORD!)
);

const neo4jSession = driver.session();

let providers = [];

if (
  process.env.GITHUB_CLIENT_ID?.length &&
  process.env.GITHUB_CLIENT_SECRET?.length
) {
  providers.push(
    GitHubProvider({
      clientId: process.env.GITHUB_CLIENT_ID,
      clientSecret: process.env.GITHUB_CLIENT_SECRET,
    })
  );
}

export default NextAuth({
  providers,
  adapter: Neo4jAdapter(neo4jSession),
  callbacks: {
    signIn: async ({user}:{ user: User | AdapterUser}) => {
      const whitelist = process.env.NEXTAUTH_WHITELIST?.split(',');
      if (whitelist?.includes(user.name!)) {
        return true;
      }
      return false;
    },
    jwt: async ({ token, user: { image, name, email} }:{token: JWT, user: User}) => {
      const dbUser = await neo4jSession.run(
        `
        MERGE (u:User { username: $name})
        ON CREATE SET u.username = $name, u.email = $email, u.image = $image, u.apiKey = $apiKey
        ON MATCH SET u.username = $name, u.email = $email, u.image = $image
        RETURN u
        `, {
          name,
          email,
          image,
          apiKey: token.apiKey,
        });
      if (dbUser.records.length) {
        const neo4jUser = dbUser.records[0].get('u').properties;
        token.neo4jId = neo4jUser.id;
        token.username = neo4jUser.username;
        token.email = neo4jUser.email;
        token.image = neo4jUser.image;
        token.apiKey = neo4jUser.apiKey;
      }
      return Promise.resolve(token);
    },
  },
});