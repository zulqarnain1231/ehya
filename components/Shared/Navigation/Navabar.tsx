import Image from "next/image";
import React, { useState } from "react";
import Link from "next/link";
import ComponentWrapper from "../Wrappers/ComponentWrapper";
import Drawer from "@mui/material/Drawer";
import { RxCross1 } from "react-icons/rx";
import { BiMenuAltRight } from "react-icons/bi";

const Navabar = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const toggleDrawer = () => {
    setIsOpen((prevvalue) => !prevvalue);
  };
  const menu = [
    {
      name: "Home",
      route: "/",
    },
    {
      name: "Articles",
      route: "/",
    },
    {
      name: "Pages",
      route: "/",
    },
    {
      name: "Pricing",
      route: "/",
    },
    {
      name: "FAQ",
      route: "/",
    },
  ];
  return (
    <ComponentWrapper>
      <nav className="w-full h-[70px] flex items-center justify-between bg-transparent">
        <Link href={"/"} className="h-[36px] w-[90px] relative">
          <Image src={"/Assets/Logo.png"} alt="" fill />
        </Link>
        <div className="flex items-center justify-start gap-8">
          {menu.map((item: any, index: number) => {
            return (
              <Link
                key={index}
                href={item.route}
                className="font-[500] md:inline-block hidden text-black-main text-[16px] relative after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[2px] after:bg-black-off hover:after:w-full hover:after:duration-200"
              >
                {item.name}
              </Link>
            );
          })}
          <Link
            href={"/signup"}
            className="h-[46px] w-[130px] md:flex hidden items-center justify-center font-[500] text-brand-main text-[16px] border-[2px] border-brand-main hover:bg-gray-100/50 hover:duration-300 rounded-[24px]"
          >
            SignUp
          </Link>
          <BiMenuAltRight
            className="md:hidden inline-block h-[30px] w-[30px] text-black-main"
            onClick={toggleDrawer}
          />
        </div>
      </nav>

      {/* menu for mobile view */}
      <Drawer
        anchor={"left"}
        open={isOpen}
        onClose={toggleDrawer}
        sx={{
          "& .MuiPaper-root": {
            height: "100vh",
            width: "100%",
          },
        }}
      >
        <div className="w-full h-full flex flex-col items-center justify-center gap-[50px] relative">
          <div className="w-[36px] h-[36px] flex items-center justify-center bg-red-main rounded-full absolute right-4 top-4">
            <RxCross1
              onClick={toggleDrawer}
              className=" text-white-main h-[20px] w-[20px]"
            />
          </div>

          {menu.map((item: any, index: number) => {
            return (
              <Link
                key={index}
                onClick={toggleDrawer}
                href={item.route}
                className="font-[500] text-black-main text-[16px] relative after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[2px] after:bg-black-off hover:after:w-full hover:after:duration-200"
              >
                {item.name}
              </Link>
            );
          })}
          <Link
            href={"/signup"}
            onClick={toggleDrawer}
            className="h-[46px] w-[130px] flex items-center justify-center font-[500] text-brand-main text-[16px] border-[2px] border-brand-main hover:bg-gray-100/50 hover:duration-300 rounded-[24px]"
          >
            SignUp
          </Link>
        </div>
      </Drawer>
    </ComponentWrapper>
  );
};

export default Navabar;
