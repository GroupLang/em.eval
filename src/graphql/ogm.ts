import { OGM, Model as BaseM, generate } from '@neo4j/graphql-ogm';
import createYoga from 'graphql-yoga';
import * as types  from './ogm-types';
import { driver } from './neo4j';
import { Session } from 'next-auth';
import resolvers from './resolvers';
import { readFileSync } from 'fs';
import path from 'path';

// Define the Context type
export interface Context {
  session: Session | null;
  ogm: OGM;
}
// Building the Neo4j GraphQL schema is an async process

const typeDefs = readFileSync(path.join(__dirname, 'schema.graphql')).toString('utf-8');


const ogm = new OGM({ typeDefs, driver, resolvers });

class Model<T> extends BaseM {
  model: any;
  constructor(name: string) {
    const model = super(name);
    this.name = name;
    this.model = model;
  }
  async new(props:Partial<T>) {

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

type ModelT<T> = Model<T> & T


const Bot =  new Model<types.Bot>("Bot") as ModelT<types.Bot>;
const Service = new Model<types.Service>("Service") as ModelT<types.Service>;
const User =  new Model<types.User>("User") as ModelT<types.User>;
const Conversation =  new Model<types.Conversation>("Conversation") as ModelT<types.Conversation>;
const Message =  new Model<types.Message>("Message") as ModelT<types.Message>;
const EvaluationItem = new Model<types.EvaluationItem>("EvaluationItem") as ModelT<types.EvaluationItem>;


export default ogm;
export { Bot, Service, User, Conversation, Message, EvaluationItem };
