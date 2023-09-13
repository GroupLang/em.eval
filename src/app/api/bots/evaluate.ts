import type { NextApiRequest, NextApiResponse } from 'next'
import { OpenAI } from 'openai'
import { Embedding } from 'openai/resources/embeddings.mjs';
import {cosineSimilarity} from 'vector-cosine-similarity';

const openai = new OpenAI({ apiKey: process.env.OPENAI_API_KEY!});

type EvaluationData = {
  question: string,
  originalAnswer: string,
  emsAnswers: { [key:string]: string }
}

type ResponseData = {
  message: string,
  vectorDistances?: { [key:string]: number }
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<ResponseData>
) {
  const evaluationData: EvaluationData = req.body

  // TODO: Validate the input data

  const { question, originalAnswer, emsAnswers } = evaluationData;

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

  res.status(200).json({ message: 'Evaluation completed successfully', vectorDistances })
}
