import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/router";
import { AiFillDashboard } from "react-icons/ai";
import { FaComments } from "react-icons/fa";
import { BsPostcardHeartFill } from "react-icons/bs";
import { RxCross1 } from "react-icons/rx";
import { BiMenuAltRight } from "react-icons/bi";
import Drawer from "@mui/material/Drawer";

const SideBar = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const toggleDrawer = () => {
    setIsOpen((prevvalue) => !prevvalue);
  };
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
    <div className="w-full h-full">
      <div className="w-full h-full md:flex hidden flex-col  items-start justify-start gap-10 bg-white-main shadow-lg p-6 lg:p-10">
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

      {/* for small screens */}
      <div className="w-full h-[60px] flex md:hidden items-center justify-between bg-white-main px-4">
        <Link href={"/"} className="h-[36px] w-[90px] relative">
          <Image src={"/Assets/Logo.png"} alt="" fill />
        </Link>
        <BiMenuAltRight
          className="md:hidden inline-block h-[30px] w-[30px] text-black-main"
          onClick={toggleDrawer}
        />
      </div>
      <Drawer
        anchor={"left"}
        open={isOpen}
        onClose={toggleDrawer}
        sx={{
          "& .MuiPaper-root": {
            height: "100vh",
            width: "70%",
          },
        }}
      >
        <div className="w-full h-full flex flex-col items-start justify-start gap-[50px] relative px-6 py-10">
          <div className="w-[30px] h-[30px] flex items-center justify-center bg-red-main rounded-full absolute right-4 top-4">
            <RxCross1
              onClick={toggleDrawer}
              className=" text-white-main h-[20px] w-[20px]"
            />
          </div>
          <Link href={"/"} className="h-[36px] w-[90px] relative">
            <Image src={"/Assets/Logo.png"} alt="" fill />
          </Link>
          {menu.map((item: any, index: number) => {
            return (
              <Link
                key={index}
                onClick={toggleDrawer}
                href={item.route}
                className={`w-full flex items-center justify-start gap-4 text-black-secondary hover:text-brand-main font-semibold text-[18px] ${
                  router.pathname == item.route && "text-brand-main"
                }`}
              >
                {item.icon}
                {item.name}
              </Link>
            );
          })}
        </div>
      </Drawer>
    </div>
  );
};

export default SideBar;
