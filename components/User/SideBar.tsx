import React from "react";
import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/router";
import { AiFillDashboard } from "react-icons/ai";
import { FaComments } from "react-icons/fa";
import { BsPostcardHeartFill } from "react-icons/bs";

const SideBar = () => {
  const router = useRouter();
  const menu = [
    {
      name: "Dashboard",
      route: "/dashboard",
      icon: <AiFillDashboard className="h-[30px] w-[30px]" />,
    },
    {
      name: "Comments",
      route: "/dashboard/comments",
      icon: <FaComments className="h-[30px] w-[30px]" />,
    },
    {
      name: "Posts",
      route: "/dashboard/posts",
      icon: <BsPostcardHeartFill className="h-[30px] w-[30px]" />,
    },
  ];
  return (
    <div className="w-full h-full flex flex-col  items-start justify-start gap-10 bg-white-main shadow-lg p-6 lg:p-10">
      <Link href={"/"} className="h-[36px] w-[100px] relative">
        <Image src={"/Assets/Logo.png"} alt="" fill />
      </Link>
      <p className="text-[20px] text-black-secondary font-semibold">
        Main Menu
      </p>
      {menu.map((item: any, index: number) => {
        return (
          <Link
            key={index}
            href={item.route}
            className={`w-full flex items-center justify-start gap-6 text-black-secondary hover:text-brand-main font-semibold text-[18px] ${
              router.pathname == item.route && "text-brand-main"
            }`}
          >
            {item.icon}
            {item.name}
          </Link>
        );
      })}
    </div>
  );
};

export default SideBar;
