process.env['NODE_NO_WARNINGS'] = '1'

require('dotenv').config({ path: '.env.local'})
import readline from 'readline';
import { getCosineSimilarities } from '@/app/api/bots/cosineSimilarity';
import colors from 'colors';
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

let question: string;
let originalAnswer: string;
let emsAnswers: {[key:string]: string} = {};
let key: string;

const askOpenAIKey = () => {
  return new Promise((resolve) => {
    rl.question('Enter your OpenAI key: ', (answer) => {
      key = answer;
      resolve(null);
    });
  });
};


const askQuestion = () => {
  return new Promise((resolve) => {
    rl.question(colors.bgWhite('Enter the question: '), (answer) => {
      question = answer;
      resolve(null);
    });
  });
};

const askOriginalAnswer = () => {
  return new Promise((resolve) => {
    rl.question(colors.bgWhite('Enter the original answer: '), (answer) => {
      originalAnswer = answer;
      resolve(null);
    });
  });
};

const askEmsAnswers = () => {
  return new Promise((resolve) => {
    const recursiveAsyncReadLine = () => {
      rl.question('Enter an emulated answer (' + Object.keys(emsAnswers).length + 1+')' + colors.grey('(or enter to finish)') + ':', (answer) => {
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
    await askOpenAIKey();
  }
  await askQuestion();
  await askOriginalAnswer();
  await askEmsAnswers();
  console.log(colors.rainbow('Evaluating...'));
  const result = await getCosineSimilarities(question, originalAnswer, emsAnswers, key || process.env.OPENAI_API_KEY!);
  const lowestValue = Math.min(...Object.values(result));
  const highestValue = Math.max(...Object.values(result));
  const getPoints = (value: number) => {
    const points = Math.round((value - lowestValue) / (highestValue - lowestValue) * 100);
    return points;
  }

  console.log('Results:');
  var Table = require('cli-table');
  var table = new Table({head:['', 'Answer', 'Similarity', 'Points', 'Text']});
  
  


  console.log(colors.bgGreen("Question: ") + question); 
  console.log(colors.bgGreen("Original Answer: ") + originalAnswer);
  console.log("Answers:")

  Object.entries(result).map(([key, value], i) => {
    table.push([value === highestValue ? '🏆' : '', key, value, getPoints(value), emsAnswers[key]]);
  });
  console.log(table.toString());

  rl.close();
};
runScript();
