import React from 'react';
import { Avatar } from '@mui/material';
import avatar from '@images/logo.png';
import {
  IoChatboxEllipsesOutline,
  IoEllipsisHorizontalOutline,
  IoHeartOutline,
  IoShareSocialOutline,
} from 'react-icons/io5';

const Post = () => (
  <div className="post mb-24 ">
    <div className="flex flex-row justify-between header-post border-b pb-5 border-b-purple-500">
      <div className="flex flex-row items-center ">
        <div className="border rounded-full p-3 cursor-pointer border-purple-500">
          <Avatar alt="avatar" src={avatar.src} sx={{ width: 40, height: 40 }} />
        </div>
        <div className="ml-3 flex flex-col justify-around h-full self-center ">
          <div className="text-lg">KidP2H Box</div>
          <div className="text-sm text-purple-500">Just now</div>
        </div>
      </div>
      <div className="self-center">
        <div className="relative">
          <IoEllipsisHorizontalOutline size={25} className="cursor-pointer text-white" />
          <IoEllipsisHorizontalOutline
            size={25}
            className="cursor-pointer text-white blur-sm absolute top-0"
          />
        </div>
      </div>
    </div>
    <div className="content-post mt-6 border-b border-b-purple-500 pb-5">
      Ở nhà: Làm siêu trộm, cuộc sống nhàn hạ, hình tượng ổn, phi vụ tầm cỡ kim cương, đá quý. Qua
      đây chưa tới 1 tuần: Đi luôn fanpage, bị đồn hẹn hò với một đứa không biết từ đâu ra tên Ngôn
      Nhất Trì, khách hàng offer trộm đề thi Nhạc, Mỹ thuật, IELTS ????? 🥲
    </div>
    <div className="action-post mt-5 flex flex-row justify-between">
      <div className="relative w-full mr-2 ">
        <div className="btn-action-post flex flex-row items-center justify-center w-full py-3 border rounded-md cursor-pointer border-red-400">
          <IoHeartOutline size={20} className="mr-3 text-red-500" />
          <span className="count mr-3">205</span>
          <span className="type text-purple-500 uppercase">Like</span>
        </div>
        <div className="absolute blur-sm top-0 btn-action-post flex flex-row items-center justify-center w-full py-3 mr-2 border rounded-md cursor-pointer border-red-400">
          <IoHeartOutline size={20} className="mr-3 text-red-500" />
          <span className="count mr-3">205</span>
          <span className="type text-purple-500 uppercase">Like</span>
        </div>
      </div>

      <div className="relative w-full mr-2">
        <div className="btn-action-post items-center justify-center  flex flex-row w-full  py-3  border rounded-md cursor-pointer border-blue-600">
          <IoChatboxEllipsesOutline size={20} className="mr-3 text-blue-600" />
          <span className="count mr-3">205</span>
          <span className="type text-purple-500 uppercase">Comment</span>
        </div>
        <div className=" absolute top-0 blur-sm btn-action-post items-center justify-center  flex flex-row w-full py-3 mr-2 border rounded-md cursor-pointer border-blue-600">
          <IoChatboxEllipsesOutline size={20} className="mr-3 text-blue-600" />
          <span className="count mr-3">205</span>
          <span className="type text-purple-500 uppercase">Comment</span>
        </div>
      </div>
      <div className="relative w-full">
        <div className="btn-action-post items-center justify-center  flex flex-row w-full py-3 border rounded-md cursor-pointer border-cyan-500">
          <IoShareSocialOutline size={20} className="mr-3 text-cyan-500" />
          <span className="count mr-3">105</span>
          <span className="type text-purple-500 uppercase">Share</span>
        </div>
        <div className="absolute top-0 blur-sm btn-action-post items-center justify-center  flex flex-row w-full py-3 border rounded-md cursor-pointer border-cyan-500">
          <IoShareSocialOutline size={20} className="mr-3 text-cyan-500" />
          <span className="count mr-3">105</span>
          <span className="type text-purple-500 uppercase">Share</span>
        </div>
      </div>
    </div>
  </div>
);

export default Post;
