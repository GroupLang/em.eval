import type { NextApiRequest, NextApiResponse } from 'next'
import { getCosineSimilarities, type EvaluationData } from '../../helpers/cosineSimilarity';

type ResponseData = {
  message: string,
  scoredDistances?: { [key:string]: {similarity: number, points: number} }
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<ResponseData>
) {
  const evaluationData: EvaluationData = req.body
  const scoredDistances = await getCosineSimilarities(evaluationData)

  res.status(200).json({ message: 'Evaluation completed successfully', scoredDistances })
}