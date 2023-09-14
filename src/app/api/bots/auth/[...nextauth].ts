

import NextAuth from 'next-auth'
import GithubProvider from 'next-auth/providers/github'
import { ApiUser } from '@/app/types/ogm'
import { User } from 'next-auth'
import { JWT } from 'next-auth/jwt'
import { AdapterUser } from 'next-auth/adapters'
import { ApiUser as TApiUser } from '@/app/types/ogm-types'
import { SignInOptions } from 'next-auth/react'
import bcrypt from 'bcryptjs';

const salt = bcrypt.genSaltSync(10);


interface ExtendedUser extends User {
  apiKey?: string;
}

interface ExtendedJWT extends JWT {
  user?: ExtendedUser;
}

const pages = {
  signIn: '/auth/signin',
  signOut: '/auth/signout',
  error: '/auth/error', // Error code passed in query string as ?error=
  verifyRequest: '/auth/verify-request', // (used for check email message)
  newUser: undefined // If set, new users will be directed here on first sign in
}

const jwt = async ({ token, user }: {token: ExtendedJWT, user: User | ExtendedUser | AdapterUser}): Promise<any> =>
  ('apiKey' in user) ? { ...token, apiKey: user.apiKey } : token;

const signIn = async ({ user, account, profile, email, credentials }:SignInOptions) => {
  const extendedUser = user as ExtendedUser;
  const isAllowedToSignIn = process.env.WHITELISTED_GITHUB!.split(',').includes(extendedUser.id)

  if (!isAllowedToSignIn) {
    return `/auth/error?error=You are not allowed to sign in. Ask the administrator to add you to the whitelist.`;
  }

  if (!('apiKey' in extendedUser)) return false;

  try {
    const users = await ApiUser.find<TApiUser[]>({ where: { email } });
    let apiKey = '';
    if (users.length === 0) {
      apiKey = generateApiKey();
      const apiUser = await ApiUser.create({ input: { apiKey, email }});
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
