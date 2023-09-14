import type { NextApiHandler, NextApiRequest, NextApiResponse } from 'next'
import { User, Bot } from '@/app/types/ogm';
import { getServerSession } from 'next-auth/next';

type BotData = {
  username: string,
  name: string,
  endpoint: string
}

type handler = NextApiHandler<{message: string,
bot?: BotData
}
>

const handler:NextApiHandler = async (req, res) => {
  const botData: BotData = req.body

  // Get the user session
  const session = await getServerSession();

  // If no user is logged in, return a 403
  if (!session || !session.user) {
    res.status(403).json({ message: 'You must be logged in to register a bot.' });
    return;
  }

  try {
    // Find the user
    const users = await User.find({ where: { email: session.user.email } });

    // If user not found, return an error
    if (users.length === 0) {
      res.status(404).json({ message: 'User not found.' });
      return;
    }

    // Create a new bot and attach it to the user
    const bot = await Bot.create({
      input: {
        ...botData,
        registeredBy: { connect: { where: { id: users[0].id } } },
        apiKey: users[0].apiKey
      }
    });

    res.status(200).json({ message: 'Bot registered successfully', bot });
  } catch (e) {
    console.error('Error', e)
    res.status(500).json({ message: 'An error occurred while registering the bot.' });
  }
}

export default handler;