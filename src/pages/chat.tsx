import React, { SetStateAction, useEffect, useRef, useState, ReactElement } from 'react';
import avatar from '@images/logo.png';
import { Avatar } from '@mui/material';
import {
  IoChatboxEllipsesOutline,
  IoEllipsisVerticalOutline,
  IoHappyOutline,
} from 'react-icons/io5';
import 'emoji-mart-next/css/emoji-mart.css';
// @ts-ignore: Type
import { Picker } from 'emoji-mart-next';
import MessageSender from '@components/MessageSender';
import MessageReceiver from '@components/MessageReceiver';
import MainLayout from '@layouts/MainLayout';
import Head from 'next/head';
import { NextPageWithLayout } from './_app';
import withAuth from '@middlewares/auth';

const Chat: NextPageWithLayout = () => {
  const [showIcon, setShowIcon] = useState<boolean>(false);
  const [message, setMessage] = useState<string>('');
  const emojiPickerRef = useRef<HTMLDivElement>(null);
  const iconEmojiRef = useRef<HTMLDivElement>(null);

  const handleInputMessage = (e: React.ChangeEvent<HTMLInputElement>) => {
    setMessage(e.target.value);
  };

  const handleEmojiSelect = (data: any) => {
    setMessage((prevState: SetStateAction<string>) => `${prevState} ${data.native}`);
  };
  useEffect(() => {
    function detectClickOutside(event: any) {
      if (iconEmojiRef.current?.contains(event.target)) {
        setShowIcon(!showIcon);
      }
      if (emojiPickerRef.current && !emojiPickerRef.current.contains(event.target)) {
        if (showIcon) setShowIcon(false);
      }
    }
    document.addEventListener('mousedown', detectClickOutside);
    return () => {
      document.removeEventListener('mousedown', detectClickOutside);
    };
  });
  return (
    <>
      <Head>
        <title>Chat</title>
      </Head>
      <div className="w-full relative h-full ">
        <div className="header__box sticky top-1/6 z-50 backdrop-blur-sm  flex items-center h-11 justify-between border-b border-b-purple-500 pb-3">
          <div className="flex items-center">
            <Avatar alt="Remy Sharp" src={avatar.src} />
            <span className="ml-5 text-xl">KidP2H Box</span>
          </div>
          <IoEllipsisVerticalOutline size={25} />
        </div>
        <div className="content-box-chat h-3/4 pt-3 overflow-scroll ">
          <MessageReceiver message="ssdjsajsjsjsjs" />
          <MessageSender message="toi nay an gi nhi" />
          <MessageReceiver message="sadsajdhsajdhasjkdhjasdhasjkdhaskjdhasjkdhjkshdjkahdjkashd" />
          <MessageSender message="toi nay an gi nhi" />
          <MessageReceiver message="sadsajdhsajdhasjkdhjasdhasjkdhaskjdhasjkdhjkshdjkahdjkashd" />
          <MessageSender message="toi nay an gi nhi" />
          <MessageReceiver message="sadsajdhsajdhasjkdhjasdhasjkdhaskjdhasjkdhjkshdjkahdjkashd" />
          <MessageSender message="toi nay an gi nhi" />
          <MessageReceiver message="sadsajdhsajdhasjkdhjasdhasjkdhaskjdhasjkdhjkshdjkahdjkashd" />
          <MessageSender message="toi nay an gi nhi" />
          <MessageReceiver message="sadsajdhsajdhasjkdhjasdhasjkdhaskjdhasjkdhjkshdjkahdjkashd" />
          <MessageSender message="toi nay an gi nhi" />
          <MessageReceiver message="sadsajdhsajdhasjkdhjasdhasjkdhaskjdhasjkdhjkshdjkahdjkashd" />
          <MessageSender message="toi nay an gi nhi" />
          <MessageReceiver message="sadsajdhsajdhasjkdhjasdhasjkdhaskjdhasjkdhjkshdjkahdjkashd" />
          <MessageSender message="toi nay an gi nhi" />
          <MessageReceiver message="sadsajdhsajdhasjkdhjasdhasjkdhaskjdhasjkdhjkshdjkahdjkashd" />
          <MessageSender message="toi nay an gi nhi" />
          <MessageReceiver message="sadsajdhsajdhasjkdhjasdhasjkdhaskjdhasjkdhjkshdjkahdjkashd" />
          <MessageSender message="toi nay an gi nhi" />
          <MessageReceiver message="sadsajdhsajdhasjkdhjasdhasjkdhaskjdhasjkdhjkshdjkahdjkashd" />
          <MessageSender message="toi nay an gi nhi" />
          <MessageReceiver message="sadsajdhsajdhasjkdhjasdhasjkdhaskjdhasjkdhjkshdjkahdjkashd" />
          <MessageSender message="toi nay an gi nhi" />
          <MessageReceiver message="sadsajdhsajdhasjkdhjasdhasjkdhaskjdhasjkdhjkshdjkahdjkashd" />
          <MessageSender message="toi nay an gi nhi" />
          <MessageReceiver message="sadsajdhsajdhasjkdhjasdhasjkdhaskjdhasjkdhjkshdjkahdjkashd" />
          <MessageSender message="toi nay an gi nhi" />
          <MessageReceiver message="sadsajdhsajdhasjkdhjasdhasjkdhaskjdhasjkdhjkshdjkahdjkashd" />
          <MessageSender message="toi nay an gi nhi" />
          <MessageReceiver message="sadsajdhsajdhasjkdhjasdhasjkdhaskjdhasjkdhjkshdjkahdjkashd" />
          <MessageSender message="toi nay an gi nhi" />
          <MessageReceiver message="sadsajdhsajdhasjkdhjasdhasjkdhaskjdhasjkdhjkshdjkahdjkashd" />
          <MessageSender message="toi nay an gi nhi" />
          <MessageReceiver message="sadsajdhsajdhasjkdhjasdhasjkdhaskjdhasjkdhjkshdjkahdjkashd" />
          <MessageSender message="toi nay an gi nhi" />
          <MessageReceiver message="sadsajdhsajdhasjkdhjasdhasjkdhaskjdhasjkdhjkshdjkahdjkashd" />
          <MessageSender message="toi nay an gi nhi" />
          <MessageReceiver message="sadsajdhsajdhasjkdhjasdhasjkdhaskjdhasjkdhjkshdjkahdjkashd" />
          <MessageSender message="toi nay an gi nhi" />
          <MessageReceiver message="sadsajdhsajdhasjkdhjasdhasjkdhaskjdhasjkdhjkshdjkahdjkashd" />
          <MessageSender message="toi nay an gi nhi" />
          <MessageReceiver message="sadsajdhsajdhasjkdhjasdhasjkdhaskjdhasjkdhjkshdjkahdjkashd" />
          <MessageSender message="toi nay an gi nhi" />
          <MessageReceiver message="sadsajdhsajdhasjkdhjasdhasjkdhaskjdhasjkdhjkshdjkahdjkashd" />
          <MessageSender message="toi nay an gi nhi" />
        </div>
        <div className="mt-3 relative w-full flex items-center ">
          <div ref={iconEmojiRef}>
            <IoHappyOutline
              size={25}
              className="text-purple-500 absolute top-1/2 -translate-y-1/2 transform right-5 cursor-pointer"
            />
            <IoHappyOutline
              size={25}
              className="text-purple-500 blur-sm absolute top-1/2 -translate-y-1/2 transform right-5 cursor-pointer"
            />
          </div>

          <input
            name="search"
            placeholder="Message"
            id="username"
            className="placeholder:select-none pr-14 w-full neon text-md align-middle placeholder:text-sm placeholder:uppercase  h-12 bg-transparent rounded-lg focus: outline-0 pl-10 border-box border-purple-500 "
            onInput={handleInputMessage}
            autoComplete="off"
            value={message}
            spellCheck="false"
          />
          <div
            className="absolute bottom-14 right-0"
            style={{ zIndex: 99999 }}
            ref={emojiPickerRef}>
            {showIcon && <Picker onSelect={handleEmojiSelect} set="apple" darkMode="true" />}
          </div>
          <IoChatboxEllipsesOutline
            color="white"
            className="absolute top-1/2 transform -translate-y-1/2 ml-3 "
            size={20}
          />
        </div>
      </div>
    </>
  );
};

Chat.getLayout = function getLayout(page: ReactElement) {
  return <MainLayout>{page}</MainLayout>;
};

export default Chat;
