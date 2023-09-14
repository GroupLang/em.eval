import { OpenAI } from 'openai'
import {cosineSimilarity} from 'vector-cosine-similarity';

export type EvaluationData = {
  question: string,
  originalAnswer: string,
  emsAnswers: { [key:string]: string }
}

const getCosineSimilarities = async ({ question, originalAnswer, emsAnswers }:EvaluationData, apiKey?:string) => {
  const openai = new OpenAI({ apiKey: apiKey || process.env.OPENAI_API_KEY!});

  const originalEmbeddingResponse = await openai.embeddings.create(
    {input: [`${question} ${originalAnswer}`], model: 'text-embedding-ada-002'}
  );
  const originalVector = originalEmbeddingResponse.data[0].embedding;

  const vectorDistances:{[key:string]: number} = {};
  for (const [emName, emAnswer] of Object.entries(emsAnswers)) {
    const emsEmbeddingResponse = await openai.embeddings.create(
      {input: [`${question} ${emAnswer}`], model: 'text-embedding-ada-002'}
    );
    const emsVector = emsEmbeddingResponse.data[0].embedding;

    const distance:number = cosineSimilarity(originalVector, emsVector);
    vectorDistances[emName] = distance;
  }

  const lowestValue = Math.min(...Object.values(vectorDistances));
  const highestValue = Math.max(...Object.values(vectorDistances));
  const getPoints = (value: number) => {
    if (highestValue === lowestValue) return 0;
    const points = Math.round((value - lowestValue) / (highestValue - lowestValue) * 100);
    return points;
  }

  const scoredDistances: {[key:string]: {similarity: number, points: number}} = {};
  Object.entries(vectorDistances).forEach(([key, value]) => {
    scoredDistances[key] = {similarity: value, points: getPoints(value)};
  });

  return scoredDistances;
}

export { getCosineSimilarities }