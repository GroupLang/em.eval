// apolloClient.ts
const { ApolloClient, InMemoryCache } = require('@apollo/client');

const client = new ApolloClient({
  uri: 'http://localhost:4000/graphql', // replace with your GraphQL server URI
  cache: new InMemoryCache(),
});

export default client;