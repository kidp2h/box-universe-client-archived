import React from 'react';
import {
  IoChatboxOutline,
  IoExitOutline,
  IoHomeOutline,
  IoNotificationsOutline,
  IoSettingsOutline,
} from 'react-icons/io5';
import Link from 'next/link';
import ItemSidebar from '@components/ItemSidebar';
import { signOut } from 'next-auth/react';

type Props = {
  page: string;
};

const Sidebar = (props: Props) => {
  const { page } = props;
  return (
    <div className="flex justify-center items-center h-5/6 fixed bottom-1 left-2 z-50">
      <div className="w-20 h-full flex flex-col justify-between sidebar sidebar-blur backdrop-blur-lg rounded-xl">
        <div>
          <div
            className={`item flex justify-center relative items-center ${
              page === 'home' && 'active'
            } `}>
            <div className="rounded-full p-3 glass-blur cursor-pointer icon-item">
              <Link href="/" passHref>
                <ItemSidebar>
                  <IoHomeOutline size={20} className="text-white" />
                </ItemSidebar>
              </Link>
            </div>
            <div className="dot rounded-full w-1 h-1  bg-green-500 absolute right-2 top-1/2" />
          </div>
          <div
            className={`item flex justify-center relative items-center ${
              page === 'chat' && 'active'
            } `}>
            <div className="rounded-full p-3 glass-blur cursor-pointer icon-item">
              <Link href="/chat" passHref>
                <ItemSidebar>
                  <IoChatboxOutline size={20} className="text-white" />
                </ItemSidebar>
              </Link>
            </div>
            <div className="dot rounded-full w-1 h-1  bg-green-500 absolute right-2 top-1/2" />
          </div>
          <div
            className={`item flex justify-center relative items-center ${
              page === 'notifications' && 'active'
            } `}>
            <div className="rounded-full p-3 glass-blur cursor-pointer icon-item">
              <Link href="/notifications" passHref>
                <ItemSidebar>
                  <IoNotificationsOutline size={20} className="text-white" />
                </ItemSidebar>
              </Link>
            </div>
            <div className="dot rounded-full w-1 h-1  bg-green-500 absolute right-2 top-1/2" />
          </div>
        </div>
        <div>
          <div
            className={`item flex justify-center relative items-center ${
              page === 'settings' && 'active'
            } `}>
            <div className="rounded-full p-3 glass-blur cursor-pointer icon-item">
              <Link href="/settings" passHref>
                <ItemSidebar>
                  <IoSettingsOutline size={20} className="text-white" />
                </ItemSidebar>
              </Link>
            </div>
            <div className="dot rounded-full w-1 h-1  bg-green-500 absolute right-2 top-1/2" />
          </div>
          <div className="item flex justify-center relative items-center ">
            <button onClick={() => signOut({ callbackUrl: '/auth/login' })}>
              <div className="rounded-full p-3 glass-blur cursor-pointer icon-item">
                <ItemSidebar>
                  <IoExitOutline size={20} className="text-white" />
                </ItemSidebar>
              </div>
            </button>
            <div className="dot rounded-full w-1 h-1  bg-green-500 absolute right-2 top-1/2" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default React.memo(Sidebar);
