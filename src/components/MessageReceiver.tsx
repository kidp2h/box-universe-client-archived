import React from 'react';
import avatar from '@images/logo.png';
import { Avatar } from '@mui/material';

type Props = {
  message: string;
};

const MessageReceiver = (props: Props) => {
  const { message } = props;
  return (
    <div className="flex flex-row friend mb-3 ">
      <Avatar alt="" src={avatar.src} />
      <div className="ml-5 flex flex-col items-start justify-center">
        <span className="max-w-sm break-words border border-gray-500 rounded-bl-2xl rounded-r-2xl py-3 px-3 ">
          {message}
        </span>
        <div className="text-gray-500 text-xs mt-3">9:30PM</div>
      </div>
    </div>
  );
};

export default MessageReceiver;
