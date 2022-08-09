import Cookies from 'js-cookie';

const Logout = () => null;

export async function getServerSideProps(ctx: any) {
  ctx.res.setHeader('Set-Cookie', [`accessToken=deleted; Max-Age=0`]);
  return {
    redirect: {
      destination: '/auth/login',
      permanent: true,
    },
  };
}

export default Logout;
