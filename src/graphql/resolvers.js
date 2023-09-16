
const resolvers = {
  Query: {
    publicBots: async (parent, args, context) => {
      // Get all Bots where public is true
      // You need to implement the `getPublicBots` function
      const bots = await context.ogm.model('Bot').find({ where: { public: true } });

      return bots;
    },
  },
  Mutation: {
    addBot: async (parent, args, context) => {
      // Check if the user is authenticated
      if (!context.session || !context.session.user) {
        throw new Error('You must be logged in to add a bot.');
      }

      // Create a new Bot and connect it to the User
      // You need to implement the `createBot` function
      const bot = await context.ogm.model('Bot').create({
        input: [
          {
            ...args,
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