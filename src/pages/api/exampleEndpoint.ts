// src/pages/api/exampleEndpoint.ts
import type { NextApiHandler, NextApiRequest, NextApiResponse } from 'next'

type Message = {
  from: string,
  tagged?: string[],
  id: string,
  text: string,
  timestamp: string
}

type Conversation = {
  id: string,
  messages: Message[]
}

type User = {
  id: string,
  username: string
}

type BotRequest = {
  context: Message[],
  conversation?: Conversation[],
  message: Message,
  users?: User[]
}

type handler = NextApiHandler<{message: string}>

const handler:handler = async (req: NextApiRequest, res: NextApiResponse) => {
  const botRequest: BotRequest = req.body

  // Here you can process the botRequest data and generate a response
  // For now, let's just return a simple message

  res.status(200).json({ message: `echo: ${botRequest.message.text}` });
}

export default handler;