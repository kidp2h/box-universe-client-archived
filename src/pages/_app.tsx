import '../styles/globals.css';
import React, { ReactElement, ReactNode } from 'react';
import { NextPage } from 'next';
import type { AppProps } from 'next/app';
import { Provider } from 'react-redux';
import store, { wrapper, persistor } from '@stores/app';
import Head from 'next/head';
import favicon from '@images/favicon.ico';
import { ApolloProvider } from '@apollo/client';
import client from '../ApolloClient';
import { PersistGate } from 'redux-persist/integration/react';

export type NextPageWithLayout = NextPage & {
  getLayout?: (page: ReactElement) => ReactNode;
};

type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout;
};

const MyApp = ({ Component, pageProps }: AppPropsWithLayout) => {
  const getLayout = Component.getLayout ?? ((page) => page);
  return (
    <>
      <Head>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <link rel="icon" type="image/x-icon" href={favicon.src} />
      </Head>
      <ApolloProvider client={client}>
        <Provider store={store}>
          <PersistGate loading={null} persistor={persistor}>
            {getLayout(<Component {...pageProps} />)}
          </PersistGate>
        </Provider>
      </ApolloProvider>
    </>
  );
};

export default wrapper.withRedux(MyApp);
