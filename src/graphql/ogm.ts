import { readFileSync } from 'fs';
import { OGM, Model as BaseM } from '@neo4j/graphql-ogm';
import { Neo4jGraphQL } from '@neo4j/graphql';
import yoga, { createYoga } from 'graphql-yoga';
import * as types from './ogm-types';
import * as neo4j from 'neo4j-driver';

const typeDefs = readFileSync('src/app/types/schema.graphql', 'utf8');

const driver = neo4j.driver(
  process.env.NEO4J_URI!,
  neo4j.auth.basic(process.env.NEO4J_USER!, process.env.NEO4J_PASSWORD!)
);

const neoSchema = new Neo4jGraphQL({
  typeDefs,
  driver,
});

const initServer = async () => {
  console.log("Building GraphQL server");
  return await neoSchema.getSchema();
};

export default createYoga({
  schema: await initServer(),
  graphqlEndpoint: "/api/graphql",
});


const resolvers = {
  Bot: {
    emuleeName: async (source:any) => {
      const emulee = source.name;
      return emulee.name;
    }  ,
  },
};

const ogm = new OGM({ typeDefs, driver, resolvers });

class Model<T> extends BaseM {
  model: any;
  constructor(name: string) {
    const model = super(name);
    this.name = name;
    this.model = model;
  }
  async new(props:T) {

    const newInstance = await this.model.create({ input: { props }})
    return newInstance as T;
  }
  async getBy(prop: string, value: any) {

    const results = await this.model.find({where: { [prop]: value }});
    if (results.length > 0) {
      return results[0]
    }
  }
}



const Bot =  new Model<types.Bot>("Bot");
const Service = new Model<types.Service>("Service");
const User =  new Model<types.User>("User");
const Conversation =  new Model<types.Conversation>("Conversation");
const Message =  new Model<types.Message>("Message");
const EvaluationItem = new Model<types.EvaluationItem>("EvaluationItem");

export { Bot, Service, User, Conversation, Message, EvaluationItem };
