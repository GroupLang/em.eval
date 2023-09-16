import { driver } from '../../graphql/neo4j';
import { startServerAndCreateNextHandler } from '@as-integrations/next'
import { ApolloServerPluginLandingPageGraphQLPlayground } from "apollo-server-core"
import  resolvers  from '../../graphql/resolvers';
import { allowCors } from '@/utils/network';
import { NextApiRequest, NextApiResponse } from 'next';
import ogm from '../../graphql/ogm';


const { ApolloServer } = require("apollo-server");

require("dotenv").config({ path: ".env.local" });


const server = new ApolloServer({
    schema: ogm.schema,
    context: ({ req }:any) => ({ req, driver }),
    introspection: true,
    playground: true,
    url: "/api/graphql",
    plugins: [ApolloServerPluginLandingPageGraphQLPlayground()],
    resolvers
});

server.listen().then(({ url }:{url:string}) => {
    console.log(`GraphQL server ready on ${url}`);
});

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
    await startServerAndCreateNextHandler(server, {
        context: async (req, res) => ({ req, res }),
    })(req, res);
    return;
}

  
export default allowCors(handler)