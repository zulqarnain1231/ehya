import Image from "next/image";
import Link from "next/link";
import React from "react";
import { MdVerified } from "react-icons/md";

const BlogCard = () => {
  return (
    <Link
      href={"/blogdetails"}
      className="w-full flex flex-col items-start justify-start shadow-xl rounded-[8px]"
    >
      <div className="w-full h-[250px] relative">
        <Image src={"/Assets/Blogs/blog1.jpg"} alt="" fill />
      </div>
      <div className="w-full flex flex-col items-start justify-start gap-4 p-5">
        <p className="text-black-off md:text-[26px] text-[20px] font-bold">
          Future of Work
        </p>
        <p className="text-[18px] text-black-off font-[500]">
          Majority of peole will work in jobs that don’t exist today.
        </p>
        <div className="w-full flex items-center justify-between">
          <div className="flex items-center justify-start gap-2">
            <div className="h-[40px] w-[40px] relative">
              <Image
                src={"/Assets/Blogs/user1.png"}
                className="rounded-full"
                alt=""
                fill
              />
            </div>
            <div className="flex flex-col items-start justify-center gap-1">
              <p className="text-[18px] text-black-off font-bold italic">
                Johanna Murray
              </p>
              <div className="flex items-center justify-start gap-2">
                <MdVerified className="text-green-500 h-[14px] w-[14px]" />
                <p className="text-[12px] font-[500] text-green-500 italic">
                  Verified writer
                </p>
              </div>
            </div>
          </div>
          <p className="text-black-off/80 text-[16px] font-bold italic">
            02 May
          </p>
        </div>
      </div>
    </Link>
  );
};

export default BlogCard;
