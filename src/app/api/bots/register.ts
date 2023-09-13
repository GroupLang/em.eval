import type { NextApiRequest, NextApiResponse } from 'next'
const apiKeys = JSON.parse(process.env.API_KEYS!);

type BotData = {
  username: string,
  name: string,
  endpoint: string
}

type ResponseData = {
  message: string,
  bot?: BotData
}

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<ResponseData>
) {
  const apiKey = req.headers['x-api-key']
  const botData: BotData = req.body

  if (!apiKey || apiKey !== apiKeys[botData.username]) {
    return res.status(401).json({ message: 'Invalid API key' })
  }

  // TODO: register bot

  res.status(200).json({ message: 'Bot registered successfully', bot: botData })
}
