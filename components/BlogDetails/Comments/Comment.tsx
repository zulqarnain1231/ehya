import Image from "next/image";
import React from "react";
import { BiMessage } from "react-icons/bi";
import { MdModeEditOutline, MdDeleteOutline } from "react-icons/md";

interface Props{
    isEditable?:boolean;
    replies:
}
const Comment = () => {
  return (
    <div className="w-full flex flex-col items-start justify-start gap-4 bg-white-off rounded-[8px] p-4">
      {/* comment here */}
      <div className="w-full flex items-start justify-start gap-4">
        <div className="relative h-[40px] w-[40px]">
          <Image src={"/Assets/Blogs/user2.png"} alt="" fill />
        </div>
        <div className="w-full flex flex-col items-start justify-start gap-4">
          <div>
            <p className="font-bold text-black-off text-[14px]">
              Mohammad Rezaii
            </p>
            <p className="font-[400] text-[12px] text-black-secondary">
              15 December 2020, 11:40 AM
            </p>
          </div>
          <p className="text-[16px] font-[400] text-black-secondary">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Egestas
            purus viverra accumsan in nisl nisi.
          </p>
          <div className="w-full flex items-center justify-start gap-6">
            <button className="flex items-center justify-start gap-2 text-[16px] text-black-secondary font-[500]">
              <BiMessage className="h-[26px] w-[20px]" /> Reply
            </button>
            <button className="flex items-center justify-start gap-2 text-[16px] text-black-secondary font-[500]">
              <MdModeEditOutline className="h-[26px] w-[20px]" /> Edit
            </button>
            <button className="flex items-center justify-start gap-2 text-[16px] text-black-secondary font-[500]">
              <MdDeleteOutline className="h-[26px] w-[20px]" /> Delete
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Comment;
