import { IResolvers } from '@graphql-tools/utils';
import { Context } from './ogm';
import { Conversation, Message } from './ogm';

interface SendMessageInput {
  conversationId: string;
  from: string;
  text: string;
}

interface AddBotInput {
  username: string;
  name: string;
  endpoint: string;
}

const resolvers: IResolvers<any, Context> = {
  Query: {
    publicBots: async (parent, args, context) => {
      const bots = await context.ogm.model('Bot').find({ where: { public: true } });
      return bots;
    },
  },
  Mutation: {
    sendMessage: async (parent, { input }: { input: SendMessageInput }, context) => {
      const { conversationId, from, text } = input;
      const conversation = await Conversation.getBy("id", conversationId);
      if (conversation.owner.username !== context.session?.user?.name) {
        throw new Error('You are not authorized to send messages in this conversation.');
      }
      const message = await Message.new({ from, text, timestamp: new Date().toISOString() });
      await conversation.messages.connect(message);
    },
    addBot: async (parent, { input }: { input: AddBotInput }, context) => {
      if (!context.session || !context.session.user) {
        throw new Error('You must be logged in to add a bot.');
      }
      const bot = await context.ogm.model('Bot').create({
        input: [
          {
            ...input,
            owner: {
              connect: { where: { username: context.session.user.name } }
            }
          }
        ]
      });
      return bot.bots[0];
    },
  },
};

export default resolvers;