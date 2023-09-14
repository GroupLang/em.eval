process.env['NODE_NO_WARNINGS'] = '1'

require('dotenv').config({ path: '.env.local'})
import readline from 'readline';
import { getCosineSimilarities } from '@/app/helpers/cosineSimilarity';
import colors from 'colors';

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

let question: string;
let originalAnswer: string;
let emsAnswers: {[key:string]: string} = {};
let apiKey: string;

const askForInput = (prompt: string, saveTo: (answer: string) => void) => {
  return new Promise((resolve) => {
    rl.question(prompt, (answer) => {
      saveTo(answer);
      resolve(null);
    });
  });
};

const askEmsAnswers = () => {
  return new Promise((resolve) => {
    const recursiveAsyncReadLine = () => {
      rl.question(
        `Enter an emulated answer (${Object.keys(emsAnswers).length + 1}) ${colors.grey('(or enter to finish)')}:`,
        (answer) => {
          if (answer === '') {
            resolve(null);
          } else {
            emsAnswers[`A${Object.keys(emsAnswers).length + 1}`] = answer;
            recursiveAsyncReadLine();
          }
      });
    };
    recursiveAsyncReadLine();
  });
};

const runScript = async () => {
  if (!process.env.OPENAI_API_KEY) {
    await askForInput('Enter your OpenAI API key: ', (answer) => apiKey = answer);
  }
  await askForInput(colors.bgWhite('Enter the question: '), (answer) => question = answer);
  await askForInput(colors.bgWhite('Enter the original answer: '), (answer) => originalAnswer = answer);
  await askEmsAnswers();
  colors.enable()

  console.log('Evaluating...'.rainbow);
  const result = await getCosineSimilarities(question, originalAnswer, emsAnswers, apiKey || process.env.OPENAI_API_KEY!);
  const lowestValue = Math.min(...Object.values(result));
  const highestValue = Math.max(...Object.values(result));
  const getPoints = (value: number) => {
    const points = Math.round((value - lowestValue) / (highestValue - lowestValue) * 100);
    return points;
  }

  var Table = require('cli-table');
  var table = new Table({head:['', 'Answer', 'Similarity', 'Points', 'Text']});
  
  Object.entries(result).map(([key, value], i) => {
    const lowest = value === lowestValue;
    const highest = value === highestValue;
    table.push([highest ? '🏆' : '', key, value, getPoints(value), lowest ? emsAnswers[key].zalgo : emsAnswers[key]]);
  });

  console.log(`
  ${('Results:'.bgGreen)}
  ${('Question:').underline}\t\t ${question}
  ${('Original Answer:').bgGreen}\t\t ${originalAnswer}
  ${('Answers:').underline}
  ${table.toString()}
  `);

  rl.close();
};
runScript();