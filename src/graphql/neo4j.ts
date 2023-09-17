import * as dotenv from 'dotenv';
dotenv.config({ path: '.env.local' });

import * as neo4j from 'neo4j-driver';

export const driver = neo4j.driver(
  process.env.NEO4J_URI!,
  neo4j.auth.basic(process.env.NEO4J_USER!, process.env.NEO4J_PASSWORD!)
);

