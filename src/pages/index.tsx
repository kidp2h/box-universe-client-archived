import React, { ReactElement } from 'react';
import WritePost from '@components/WritePost';
import Newsfeed from '@components/Newsfeed';
import MainLayout from '@layouts/MainLayout';
import Head from 'next/head';
import { NextPageWithLayout } from './_app';
import Cookies from 'js-cookie';

const Home: NextPageWithLayout = () => {
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

export async function getServerSideProps(ctx: any) {
  console.log(Cookies.get('accessToken'), '62');
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
}
export default Home;
