import NextAuth, { CookieOption, NextAuthOptions } from 'next-auth';
import CredentialsProvider from 'next-auth/providers/credentials';
import client from '../../../ApolloClient';
import login from '@mutations/login.graphql';
import jwt from 'jsonwebtoken';
import { JWT } from 'next-auth/jwt';
import { CookieSerializeOptions } from 'cookie';

export const decode = async (data: any) => {
  const { secret, token } = data;
  const verify = jwt.verify(token, secret) as JWT;
  return verify;
};
export const encode = async (data: any) => {
  const { secret, token } = data;

  const payload = {
    username: token.username,
    email: token.email,
    _id: token._id,
  };
  const accessToken = jwt.sign(payload, secret, {
    expiresIn: '1209600s',
    algorithm: 'HS512',
  });
  return accessToken;
};

export const cookiesOptions: CookieSerializeOptions = {
  sameSite: 'lax',
  secure: true,
  httpOnly: true,
  path: '/',
};

export const authOptions: NextAuthOptions = {
  providers: [
    CredentialsProvider({
      type: 'credentials',
      credentials: {},
      async authorize(credentials: any, req) {
        const { username, password } = credentials as {
          username: string;
          password: string;
        };

        try {
          const { data } = await client.mutate({
            mutation: login,
            variables: {
              userInput: {
                username,
                password,
              },
            },
          });

          const { user } = data.login;

          const response = {
            username: user.username,
            email: user.email,
            _id: user._id,
          };
          return response;
        } catch (error) {
          throw new Error('Unauthorized');
        }
      },
    }),
  ],
  session: {
    strategy: 'jwt',
    maxAge: 60 * 60 * 24 * 14,
  },
  jwt: {
    maxAge: 60 * 60 * 24 * 14,
    secret: process.env.SECRET,
    encode: encode,
    decode: decode,
  },
  pages: {
    signIn: '/auth/login',
    signOut: '/logout',
    error: '/auth/login',
    newUser: '/auth/register',
    verifyRequest: '/auth/verify',
  },
  cookies: {
    sessionToken: {
      name: 'accessToken',
      options: {
        ...cookiesOptions,
      },
    },
    csrfToken: {
      name: 'csrfToken',
      options: {
        ...cookiesOptions,
      },
    },
    callbackUrl: {
      name: 'callbackUrl',
      options: {
        ...cookiesOptions,
      },
    },
  },
  callbacks: {
    async signIn({ user }) {
      return user ? true : false;
    },
    async session({ session, token }) {
      session.username = token.username;
      session.email = token.email;
      session._id = token._id;
      session.user!.name = token.username as string;
      session.user!.email = token.email as string;
      return session;
    },
    async jwt({ token, user }) {
      if (user?.username) {
        token.username = user.username;
        token.email = user.email;
        token._id = user._id;
      }

      return token;
    },
  },
};
export default NextAuth(authOptions);
