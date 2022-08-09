import React, { ReactElement } from 'react';
import WritePost from '@components/WritePost';
import Newsfeed from '@components/Newsfeed';
import MainLayout from '@layouts/MainLayout';
import Head from 'next/head';
import { NextPageWithLayout } from './_app';
import { useQuery } from '@apollo/client';
import listUsers from '@queries/listUsers.graphql';
import withAuth from '@middlewares/auth';

const Home: NextPageWithLayout = () => {
  const { data } = useQuery(listUsers);
  /* eslint-disable */
  // console.log(data);

  return (
    <>
      <Head>
        <title>Home</title>
      </Head>
      <WritePost />
      <Newsfeed />
    </>
  );
};
Home.getLayout = function getLayout(page: ReactElement) {
  return <MainLayout>{page}</MainLayout>;
};

export const getServerSideProps = withAuth(() => {});

export default Home;
