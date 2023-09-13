// pages/api/auth/[...nextauth].ts
import NextAuth from 'next-auth'
import GithubProvider from 'next-auth/providers/github'
import { ApiUser } from '@/app/types/ogm'
import { User } from 'next-auth'
import { JWT } from 'next-auth/jwt'
import { AdapterUser } from 'next-auth/adapters'
import { ApiUser as TApiUser } from '@/app/types/ogm-types'

interface ExtendedUser extends User {
  apiKey: string;
}

interface ExtendedJWT extends JWT {
  user?: ExtendedUser;
}

const generateApiKey = () => {
  const length = 32;
  const charset = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
  let retVal = "";
  for (let i = 0, n = charset.length; i < length; ++i) {
      retVal += charset.charAt(Math.floor(Math.random() * n));
  }
  return retVal;
}

export default NextAuth({
  providers: [
    GithubProvider({
      clientId: process.env.GITHUB_CLIENT_ID!,
      clientSecret: process.env.GITHUB_CLIENT_SECRET!,
    }),
  ],
  callbacks: {
    async jwt({ token, user }: {token: ExtendedJWT, user: User | ExtendedUser | AdapterUser}): Promise<any> {
      if ('apiKey' in user) {
        token.apiKey = user.apiKey; // Add the API key to the JWT
      }
      return token;
    },
    async signIn({ user, account, profile, email, credentials }) {
      const extendedUser = user as ExtendedUser;
      const isAllowedToSignIn = process.env.WHITELISTED_GITHUB!.split(',').includes(extendedUser.id)

      if (!('apiKey' in user && isAllowedToSignIn)) return false;

        if (!isAllowedToSignIn) {
          return false;
        }
        const users = await ApiUser.find<TApiUser[]>({ where: { email } });
        let apiKey = '';
        if (users.length === 0) {
          apiKey = generateApiKey();
          const apiUser = await ApiUser.create({ input: { apiKey, email }});
        }
        user.apiKey = apiKey; 
        return true;
      }
  },
  pages: {
    signIn: '/auth/signin',
    signOut: '/auth/signout',
    error: '/auth/error', // Error code passed in query string as ?error=
    verifyRequest: '/auth/verify-request', // (used for check email message)
    newUser: undefined // If set, new users will be directed here on first sign in
  },
  session: {
    strategy: 'jwt',
  },
  jwt: {
    secret: process.env.JWT_SECRET,
  },
})