import { IResolvers } from '@graphql-tools/utils';
import { Session } from 'next-auth';
import { OGM } from '@neo4j/graphql-ogm';
import { Bot, Conversation, Message, User } from './ogm';

export interface Context {
  session: Session | null;
  ogm: OGM;
}
export interface SendMessageInput {
  conversationId: string;
  from: string;
  text: string;
}

export interface ConversationInput {
  botId: string,
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
    createConversation: async (_: any, { input }: { input: ConversationInput }, context) => {
      const { botId } = input;
      const bot = await Bot.getBy("id", botId);
      const user = await User.getBy("username", context.session?.user?.name);

      if (user.username !== context.session?.user?.name) {
        throw new Error('You are not authorized to send messages in this conversation.');
      }
      const conversation = await Conversation.new({ owner: user });
      await bot.conversations.connect(conversation);
      await user.conversations.connect(conversation);
      return conversation;

    },
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