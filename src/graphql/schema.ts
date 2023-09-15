import { Neo4jGraphQL } from "@neo4j/graphql"
import { readFileSync } from "fs"
import { driver } from "@/neo4j"
import { resolvers } from "./index"

const typeDefs = readFileSync('src/app/types/schema.graphql', 'utf8');


export const neoSchema = new Neo4jGraphQL({ typeDefs, resolvers, driver })