import React from 'react';
import avatar from '@images/logo.png';
import { Avatar } from '@mui/material';

type Props = {
  message: string;
};
const MessageSender = (props: Props) => {
  const { message } = props;
  return (
    <div className="flex flex-row me mb-3 justify-end ">
      <div className="flex items-end justify-center flex-col mr-5">
        <span className="max-w-sm break-words border border-gray-500 rounded-br-2xl rounded-l-2xl py-3 px-3">
          {message}
        </span>
        <div className="text-gray-500 text-xs mt-3">9:30PM</div>
      </div>
      <Avatar alt="" src={avatar.src} />
    </div>
  );
};

export default MessageSender;
