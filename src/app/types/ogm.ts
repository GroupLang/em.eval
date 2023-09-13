import { readFileSync } from 'fs';
import { join } from 'path';
import { OGM } from '@neo4j/graphql-ogm';
import * as neo4j from 'neo4j-driver';

const typeDefs = readFileSync('src/app/types/schema.graphql', 'utf8');

const driver = neo4j.driver(
  process.env.NEO4J_URI!,
  neo4j.auth.basic(process.env.NEO4J_USERNAME!, process.env.NEO4J_PASSWORD!)
);
const resolvers = {
  Bot: {
    emuleeName: async (source:any) => {
      const emulee = source.name;
      return emulee.name;
    },
  },
};
const ogm = new OGM({ typeDefs, driver, resolvers });

const Bot = ogm.model("Bot");
const Service = ogm.model("Service");
const User = ogm.model("User");
const ApiUser = ogm.model("ApiUser");
const Conversation = ogm.model("Conversation");
const Message = ogm.model("Message");
const EvaluationItem = ogm.model("EvaluationItem");

const init = async () => await ogm.init();
init();

export default ogm;
export { Bot, Service, User, Conversation, Message, ApiUser };