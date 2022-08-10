import { ApolloClient, InMemoryCache, HttpLink, ApolloLink } from '@apollo/client';
import Cookies from 'js-cookie';

const httpLink = new HttpLink({
  uri: 'http://172.26.22.101:3000/graphql',
  headers: {},
});
const authLink = new ApolloLink((operation, forward) => {
  const token = Cookies.get('accessToken');

  operation.setContext({
    headers: {
      authorization: token ? `Bearer ${token}` : '',
    },
  });

  return forward(operation);
});

const client = new ApolloClient({
  link: authLink.concat(httpLink),
  cache: new InMemoryCache(),
});

export default client;
