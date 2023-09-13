
import { OpenAI } from 'openai'
import {cosineSimilarity} from 'vector-cosine-similarity';

const getCosineSimilarities = async (question: string, originalAnswer: string, emsAnswers: {[key:string]: string}, apiKey?:string) => {
  const openai = new OpenAI({ apiKey: apiKey || process.env.OPENAI_API_KEY!});

  const originalEmbeddingResponse = await openai.embeddings.create(
    {input: [`${question} ${originalAnswer}`], model: 'text-embedding-ada-002'}
  );
  const originalVector = originalEmbeddingResponse.data[0].embedding;

  const vectorDistances:{[key:string]: number} = {};
  for (const [emName, emAnswer] of Object.entries(emsAnswers)) {
    // Call OpenAI Node with question + emsAnswer and get the vector
    const emsEmbeddingResponse = await openai.embeddings.create(
      {input: [`${question} ${emAnswer}`], model: 'text-embedding-ada-002'}
    );
    const emsVector = emsEmbeddingResponse.data[0].embedding;

    // Calculate the vector distance between the original vector and this vector
    const distance:number = cosineSimilarity(originalVector, emsVector);
    vectorDistances[emName] = distance;
  }
  return vectorDistances;
}

export { getCosineSimilarities }