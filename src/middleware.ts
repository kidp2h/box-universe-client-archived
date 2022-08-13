import { withAuth } from 'next-auth/middleware';
import { NextRequest } from 'next/server';

export default withAuth(function middleware(req: NextRequest) {}, {
  callbacks: {
    authorized: function ({ token }) {
      console.log(token); // token is always null

      return true;
    },
  },
  cookies: {
    sessionToken: {
      name: 'accessToken',
    },
  },
});

export const config = { matcher: ['/chat', '/notifications'] };
