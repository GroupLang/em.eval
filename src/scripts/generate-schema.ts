import {generate} from '@neo4j/graphql-ogm';
import { readFileSync } from 'fs';
import ogm from '@/graphql/ogm';

ogm.init().then(async () => {
  const schema = ogm.schema;
  const schemaString = schema.toString();
  const schemaFile = readFileSync('src/graphql/schema.graphql', 'utf8');
  if (schemaString !== schemaFile) {
    console.log('Schema is out of date. Updating...');
    console.log(schemaString);
    await generate({ ogm, outFile: 'src/graphql/ogm-types.ts'});
  
    console.log(schemaFile);
    console.log('Schema updated.');
  }
});