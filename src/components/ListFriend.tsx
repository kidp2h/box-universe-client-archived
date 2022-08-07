import React from 'react';
import Friend from '@components/Friend';
import { IoSearchOutline } from 'react-icons/io5';

const ListFriend = () => {
  const x = 5;
  return (
    <div className="fixed bottom-1 z-50 ml-24 h-5/6 px-3 overflow-x-hidden overflow-scroll backdrop-blur-md  rounded-xl">
      <div className="mt-1 ml-2">
        <div className="uppercase text-xl border-b pb-3 h-11 w-24 whitespace-nowrap">
          <span className="text-white">FRIENDS</span>
        </div>
      </div>

      <div className="mt-5 relative w-fit flex items-center ">
        <input
          name="search"
          placeholder="Search Friend"
          id="username"
          className="placeholder:select-none neon text-lg align-middle placeholder:text-sm placeholder:uppercase  h-12 bg-transparent rounded-lg focus: outline-0 w-64 pl-10 border-box border-purple-500 "
          autoComplete="off"
          spellCheck="false"
        />
        <IoSearchOutline
          color="white"
          className="absolute top-1/2 transform -translate-y-1/2 ml-3 "
          size={20}
        />
      </div>
      <div className="list-friends ">
        <Friend />
        <Friend />
        <Friend />
        <Friend />
        <Friend />
        <Friend />
        <Friend />
        <Friend />
        <Friend />
        <Friend />
        <Friend />
        <Friend />
        <Friend />
        <Friend />
        <Friend />
        <Friend />
        <Friend />
        <Friend />
        <Friend />
        <Friend />
        <Friend />
        <Friend />
        <Friend />
        <Friend />
        <Friend />
        <Friend />
        <Friend />
        <Friend />
        <Friend />
        <Friend />
        <Friend />
        <Friend />
        <Friend />
        <Friend />
        <Friend />
        <Friend />
        <Friend />
        <Friend />
        <Friend />
        <Friend />
        <Friend />
        <Friend />
        <Friend />
        <Friend />
      </div>
    </div>
  );
};
export default ListFriend;
