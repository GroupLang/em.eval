import type { NextApiRequest, NextApiResponse } from 'next'
import { OpenAI } from 'openai'
import { Embedding } from 'openai/resources/embeddings.mjs';
import {cosineSimilarity} from 'vector-cosine-similarity';
import { getCosineSimilarities } from './cosineSimilarity';


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

  const { question, originalAnswer, emsAnswers } = evaluationData;
  const vectorDistances = await getCosineSimilarities(question, originalAnswer, emsAnswers)

  res.status(200).json({ message: 'Evaluation completed successfully', vectorDistances })
}
