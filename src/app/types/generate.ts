import { generate } from '@neo4j/graphql-ogm';
import { join } from 'path';
import ogm from './ogm';

async function main() {
  if (process.env.GENERATE) {
    const outFile = join('src/app/types/ogm-types.ts');
    try {
      console.log('Before ogm.init');
      await ogm.init();
      console.log('After ogm.init');

      console.log('Before generate');
      await generate({
        ogm,
        outFile,
      });
      console.log('After generate');
    } catch (error) {
      console.error('Error generating types:', error);
    }

    console.log('Types Generated');
    process.exit(1);
  }
}

export default main;