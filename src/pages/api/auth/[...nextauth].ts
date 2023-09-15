import NextAuth from 'next-auth';
import neo4j from 'neo4j-driver';
import { Neo4jAdapter } from '@next-auth/neo4j-adapter';
import TwitterProvider from 'next-auth/providers/twitter';
import GitHubProvider from 'next-auth/providers/github';

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
});