

import NextAuth, { Account, User as NextAuthUser } from 'next-auth'
import GithubProvider from 'next-auth/providers/github'
import { User } from '@/app/types/ogm'
import { JWT } from 'next-auth/jwt'
import { AdapterUser } from 'next-auth/adapters'
import { User as TUser } from '@/app/types/ogm-types'
import bcrypt from 'bcryptjs';

const salt = bcrypt.genSaltSync(10);


type UserParam = NextAuthUser | NextAuthUser;

interface ExtendedJWT extends JWT {
  user?: TUser;
}

const pages = {
  signIn: '/auth/signin',
  signOut: '/auth/signout',
  error: '/auth/error', // Error code passed in query string as ?error=
  verifyRequest: '/auth/verify-request', // (used for check email message)
  newUser: undefined // If set, new users will be directed here on first sign in
}


const jwt = async ({ token, user }: {token: ExtendedJWT, user: UserParam}): Promise<any> => {

  if (user) {
    try {
      // The user just logged in, so we fetch additional data from the database and add it to the JWT
      const [dbUser] = await User.find({ where: { email: user.email } });
      token.user = dbUser
      return user;
    } catch (e) {
      console.error("Error creating JWT:", e)
    }
  } else {
    console.error("No user present when creating jwt")
    return false;
  }
}
const signIn = async ({ user, account }:{ user: UserParam, account: Account | null}) => {

  const isAllowedToSignIn = process.env.WHITELISTED_GITHUB!.split(',').includes(user.id)

  if (!isAllowedToSignIn) {
    return `/auth/error?error=You are not allowed to sign in. Ask the administrator to add you to the whitelist.`;
  }

  if (!('apiKey' in extendedUser)) return false;

  try {
    const users = await User.find<TUser[]>({ where: { email } });
    let apiKey = '';
    if (users.length === 0) {
      apiKey = generateApiKey();
      const apiUser = await User.create({ input: { apiKey, email }});
    }
    extendedUser.apiKey = apiKey; 
    return true;
  } catch (error) {
    console.error(error);
    return `/auth/error?error=An error occurred during sign in: ${(error as Error).message}`;
  }
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
  callbacks: { jwt, signIn },
  pages,
  session: { strategy: 'jwt' },
  jwt: { secret: process.env.JWT_SECRET },
})

export { signIn, jwt, pages };
