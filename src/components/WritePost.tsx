import React, { ChangeEvent, SetStateAction, useEffect, useRef, useState } from 'react';
import { IoHappyOutline, IoImageOutline, IoVideocamOutline } from 'react-icons/io5';
import 'emoji-mart-next/css/emoji-mart.css';

// @ts-ignore
import { Picker } from 'emoji-mart-next';

const WritePost = () => {
  const [showIcon, setShowIcon] = useState<boolean>(false);
  const [content, setContent] = useState<string>('');
  const emojiPickerRef = useRef<HTMLDivElement>(null);
  const iconEmojiRef = useRef<HTMLDivElement>(null);
  const refTextArea = useRef<HTMLTextAreaElement>(null);

  const handleInputContent = (e: ChangeEvent<HTMLTextAreaElement>) => {
    setContent(e.target.value);
  };

  const handleEmojiSelect = (data: any) => {
    setContent((prevState: SetStateAction<string>) => `${prevState} ${data.native}`);
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
    <div>
      <div className="mb-10 uppercase text-xl border-b pb-3 w-24 whitespace-nowrap">
        <span>Update your activity</span>
      </div>
      <div className="relative">
        <textarea
          id="content-writing"
          style={{ resize: 'none' }}
          rows={4}
          className="text-lg focus:ring-purple-500 focus:outline-none block p-2.5 pb-9  w-full neon rounded-none bg-transparent border-b border-purple-500 "
          placeholder="Write something ..."
          onInput={handleInputContent}
          value={content}
          ref={refTextArea}
        />
        <div className="absolute top-48 right-0 z-50" ref={emojiPickerRef}>
          {showIcon && <Picker onSelect={handleEmojiSelect} set="apple" darkMode="true" />}
        </div>
      </div>

      <div className="flex justify-between mt-3">
        <div className="flex flex-row">
          <div className="relative">
            <div className="bottom-2 left-0 cursor-pointer mr-3 ">
              <IoImageOutline size={30} className="text-blue-500" />
            </div>
            <div className="absolute top-0 cursor-pointer mr-3 blur-sm ">
              <IoImageOutline size={30} className="text-blue-500" />
            </div>
          </div>
          <div className="relative">
            <div className="bottom-2 left-0 cursor-pointer ">
              <IoVideocamOutline size={30} className="text-red-400" />
            </div>
            <div className="absolute top-0 cursor-pointer mr-3 blur-sm ">
              <IoVideocamOutline size={30} className="text-red-400" />
            </div>
          </div>
        </div>
        <div className=" bottom-2 right-0 cursor-pointer" ref={iconEmojiRef}>
          <IoHappyOutline size={30} className="text-purple-500" />
        </div>
      </div>
      <div className="mt-3 flex justify-center items-center bg-purple-500 w-full h-10 rounded-md cursor-pointer">
        <input type="file" id="image" name="image" />
        <span>POST</span>
      </div>
    </div>
  );
};

export default WritePost;
