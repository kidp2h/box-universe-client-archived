import React from 'react';
import { Avatar, Badge } from '@mui/material';
import avatar from '@images/logo.png';
import { IoCheckmarkOutline, IoCloseOutline } from 'react-icons/io5';

const Request = () => {
  return (
    <div className="friend mt-7 mb-3 flex flex-row justify-center items-center text-white w-full">
      <Badge
        overlap="circular"
        anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
        color="success"
        variant="dot">
        <Avatar alt="Remy Sharp" src={avatar.src} />
      </Badge>
      <div className="text-white ml-5">KidP2H Box</div>
      <div className="relative">
        <IoCheckmarkOutline size={25} className="text-green-500 ml-10 cursor-pointer" />
        <IoCheckmarkOutline
          size={25}
          className="text-green-500 ml-10 cursor-pointer absolute blur-sm top-0"
        />
      </div>
      <div className="relative">
        <IoCloseOutline size={25} className="text-red-500 ml-3 cursor-pointer" />
        <IoCloseOutline
          size={25}
          className="text-red-500 ml-3 cursor-pointer absolute blur-sm top-0"
        />
      </div>
    </div>
  );
};

export default Request;
