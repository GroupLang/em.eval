const dotenv = require('dotenv');
const OGM = require('@neo4j/graphql-ogm');
const neo4j = require('neo4j-driver');
const path = require('path');
import resolvers from '../../src/graphql/resolvers';
dotenv.config({ path: '.env.local' });

async function main() {

  const { readFileSync } = require('fs');
  const typeDefs = readFileSync(path.join(__dirname, '../../src/graphql/schema.graphql')).toString('utf-8');

  const driver = neo4j.driver(process.env.NEO4J_URI, neo4j.auth.basic(process.env.NEO4J_USER, process.env.NEO4J_PASSWORD));
  const ogm = new OGM.OGM({ typeDefs, resolvers, driver });
  await OGM.generate({ ogm, outFile: path.join(__dirname, '../../src/graphql/ogm-types.ts')});
  await driver.close();
}

main().catch((error) => {
  console.error(error);
  process.exit(1);
}).then(() => {
  process.exit(0);
}
);