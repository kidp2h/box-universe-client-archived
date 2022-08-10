import React, { ReactElement } from 'react';
import MainLayout from '@layouts/MainLayout';
import { NextPageWithLayout } from './_app';
import withAuth from '@middlewares/auth';

const Notifications: NextPageWithLayout = () => <div>Notifications</div>;

Notifications.getLayout = function getLayout(page: ReactElement) {
  return <MainLayout>{page}</MainLayout>;
};

export default Notifications;
