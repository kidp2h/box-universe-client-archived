import { useSession } from 'next-auth/react';
import { useRouter } from 'next/router';

// const withAuth = (gssp: any) => {
//   return async (ctx: any) => {
//     const accessToken = ctx.req.cookies.accessToken;
//     if (!accessToken) {
//       return {
//         redirect: {
//           destination: '/auth/login',
//         },
//       };
//     } else {
//       // const { data } = await client.query({
//       //   query: me,
//       // });
//
//       return {
//         props: {},
//       };
//     }
//   };
// };

const withAuth = (Component: any) => {
  const AuthComponent = ({ ...props }: any) => {
    const { data: session, status } = useSession();
    const router = useRouter();
    if (status === 'loading') {
      return null;
    }
    if (!session) {
      router.push('/auth/login');
    }
    return !!session ? <Component {...props} /> : null;
  };
  return AuthComponent;
};

export default withAuth;
