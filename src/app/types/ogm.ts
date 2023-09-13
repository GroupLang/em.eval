import { readFileSync } from 'fs';
import { join } from 'path';
import { OGM } from '@neo4j/graphql-ogm';
import * as neo4j from 'neo4j-driver';

const typeDefs = readFileSync('src/app/types/schema.graphql', 'utf8');

const driver = neo4j.driver(
  process.env.NEO4J_URI!,
  neo4j.auth.basic(process.env.NEO4J_USERNAME!, process.env.NEO4J_PASSWORD!)
);
const ogm = new OGM({ typeDefs, driver });

const Bot = ogm.model("App_Bot");
const Service = ogm.model("App_Service");
const User = ogm.model("App_User");
const Conversation = ogm.model("App_Conversation");
const Message = ogm.model("App_Message");

const init = async () => await ogm.init();
init();

export default ogm;
export { Bot, Service, User, Conversation, Message };