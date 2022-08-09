// const withAuth = (C: any) => {
//   return class AuthComponent extends React.Component {
//     constructor(props: any) {
//       super(props);
//     }
//
//     static async getServerSideProps(ctx: any) {
//       const accessToken = ctx.req.cookies.accessToken;
//       if (!accessToken) {
//         return {
//           redirect: {
//             destination: '/auth/login',
//           },
//         };
//       }
//       return {
//         props: {},
//       };
//     }
//
//     render() {
//       const getLayout = C.getLayout ?? ((page: any) => page);
//       return true ? <>{getLayout(<C {...this.props} />)}</> : null;
//     }
//   };
// };
//   // const AuthComponent = ({ ...props }: any) => {
//   //   const { isAuthenticated } = useAuth();
//   //   const getLayout = C.getLayout ?? ((page: any) => page);
//   //   const router = useRouter();
//   //   //
//   //   useEffect(() => {
//   //     if (!isAuthenticated) router.push('/auth/login');
//   //   });
//   //
//   //   return true ? <>{getLayout(<C {...props} />)}</> : null;
//   // };
//   // AuthComponent.getServerSideProps = async (ctx: any) => {
//   //   const accessToken = ctx.req.cookies.accessToken;
//   //   if (!accessToken) {
//   //     return {
//   //       redirect: {
//   //         destination: '/auth/login',
//   //       },
//   //     };
//   //   }
//   //   return {
//   //     props: {},
//   //   };
//   // };
//   // return AuthComponent;
// };

const withAuth = (gssp: any) => {
  return async (ctx: any) => {
    const accessToken = ctx.req.cookies.accessToken;
    if (!accessToken) {
      return {
        redirect: {
          destination: '/auth/login',
        },
      };
    }

    return {
      props: {},
    };
  };
};

export default withAuth;
