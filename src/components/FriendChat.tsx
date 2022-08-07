import React from 'react';
import { Avatar, Badge } from '@mui/material';
import avatar from '@images/logo.png';

const FriendChat = () => {

  return (
    <div className="friend mt-7 mb-3 flex flex-row w-64 justify-start items-center text-white  cursor-pointer">
      <Badge
        badgeContent="5"
        color="error"
        overlap="circular"
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'right',
        }}>
        <Avatar alt="Remy Sharp" src={avatar.src} />
      </Badge>
      <div className="text-white ml-5 flex flex-col justify-between w-full">
        <div className="w-full justify-between flex items-center">
          <span>KidP2H Bx</span>
          <span className="text-gray-500 text-xs">9:30PM</span>
        </div>
        <div className="text-xs text-gray-500">Ngay mai co bai ong nhi</div>
      </div>
    </div>
  );
};

export default FriendChat;
