import { useSession } from 'next-auth/react';
import { useRouter } from 'next/router';

const withLogout = (Component: any) => {
  const LogoutComponent = ({ ...props }: any) => {
    const { data: session, status } = useSession();
    const router = useRouter();
    if (status === 'loading') {
      return null;
    }
    if (!!session) {
      router.push('/');
    }
    return !session ? <Component {...props} /> : null;
  };
  return LogoutComponent;
};

export default withLogout;
