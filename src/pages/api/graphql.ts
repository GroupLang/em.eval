import { RequestHandler } from 'express'
import { apolloServer } from "../../apollo/server"

const startServer = apolloServer.start()

const handler:RequestHandler = async(req, res) => {
  await startServer
  await apolloServer.createHandler({
    path: "/api/graphql",
  })(req, res)
}

export default handler;

export const config = {
  api: {
    bodyParser: false,
  },
}