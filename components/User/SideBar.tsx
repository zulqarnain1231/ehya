import React from "react";
import Link from "next/link";
import Image from "next/image";

const SideBar = () => {
  return (
    <div className="w-full h-full flex flex-col  items-start justify-start gap-10 bg-white-main shadow-lg p-6 lg:p-10">
      <Link href={"/"} className="h-[36px] w-[100px] relative">
        <Image src={"/Assets/Logo.png"} alt="" fill />
      </Link>
      <p className="text-[20px] text-black-secondary font-semibold">
        Main Menu
      </p>
    </div>
  );
};

export default SideBar;
