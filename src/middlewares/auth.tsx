import client from '../ApolloClient';
import me from '@queries/me.graphql';

const withAuth = (gssp: any) => {
  return async (ctx: any) => {
    const accessToken = ctx.req.cookies.accessToken;
    if (!accessToken) {
      return {
        redirect: {
          destination: '/auth/login',
        },
      };
    } else {
      // const { data } = await client.query({
      //   query: me,
      // });

      return {
        props: {},
      };
    }
  };
};

export default withAuth;
