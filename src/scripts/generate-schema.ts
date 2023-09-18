const dotenv = require('dotenv');
const OGM = require('@neo4j/graphql-ogm');
const neo4j = require('neo4j-driver');
const path = require('path');
const resolvers = require('../graphql/resolvers').default;
dotenv.config({ path: '.env.local' });

async function main() {

  const { readFileSync } = require('fs');
  const typeDefs = readFileSync(path.join(__dirname, '../graphql/schema.graphql')).toString('utf-8');
  console.log('typeDefs', typeDefs);
  console.log('Connecting to Neo4j...');
  const driver = neo4j.driver(process.env.NEO4J_URI, neo4j.auth.basic(process.env.NEO4J_USER, process.env.NEO4J_PASSWORD));
  console.log(process.env.NEO4J_URI, process.env.NEO4J_USER, process.env.NEO4J_PASSWORD)
  
  const ogm = new OGM.OGM({ typeDefs, driver, resolvers })
  console.log('Generating OGM types...');
  const initiated = ogm.init();
  console.log('OGM initiated', initiated);
  try {
    const thing = await OGM.generate({ ogm, outFile: path.join(__dirname, '../graphql/ogm-types.ts')})
    console.log('Generated OGM types');
  } catch (error) {
    console.error(error);
    process.exit(1);
  }
}

main().catch((errors) => {  
  console.error(errors);
  process.exit(1);
}).then(() => {
  process.exit(0);
}
);