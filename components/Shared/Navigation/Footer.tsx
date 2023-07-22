import React from "react";
import ComponentWrapper from "../Wrappers/ComponentWrapper";
import { AiFillHeart } from "react-icons/ai";
import Link from "next/link";
import Image from "next/image";
import {
  BiLogoFacebook,
  BiLogoTwitter,
  BiLogoInstagramAlt,
  BiLogoTelegram,
} from "react-icons/bi";
import { FaLinkedinIn } from "react-icons/fa";
import SocialIcon from "./SocialIcon";

const Footer = () => {
  const date = new Date();
  const year = date.getFullYear();
  return (
    <footer className="w-full bg-black-off">
      <ComponentWrapper style={"py-10"}>
        <div className="w-full flex flex-col items-center justify-start lg:gap-[60px] gap-10">
          <div className="w-full grid lg:grid-cols-6 grid-cols-2 gap-10">
            <div className="w-full col-span-2  flex flex-col items-center lg:items-start justify-start gap-4">
              <Link href={"/"} className="h-[36px] w-[90px] relative">
                <Image src={"/Assets/Logowhite.png"} alt="" fill />
              </Link>
              <p className="text-black-secondary text-[14px] font-[500] lg:text-left text-center lg:w-[80%] w-full">
                Build a modern and creative website with moonfo
              </p>
              <div className="w-full flex items-center lg:justify-start justify-center gap-4">
                <SocialIcon
                  icon={
                    <BiLogoFacebook className="h-[20px] w-[20px] text-white-main" />
                  }
                />
                <SocialIcon
                  icon={
                    <BiLogoTwitter className="h-[20px] w-[20px] text-white-main" />
                  }
                />
                <SocialIcon
                  icon={
                    <BiLogoInstagramAlt className="h-[20px] w-[20px] text-white-main" />
                  }
                />
                <SocialIcon
                  icon={
                    <FaLinkedinIn className="h-[16px] w-[16px] text-white-main" />
                  }
                />
                <SocialIcon
                  icon={
                    <BiLogoTelegram className="h-[20px] w-[20px] text-white-main" />
                  }
                />
              </div>
            </div>
            {/* product column here */}
            <div className="w-full flex flex-col items-start justify-start gap-4">
              <p className="text-black-secondary text-[14px] font-[700]">
                Product
              </p>
              <p className="text-black-secondary text-[14px] font-[500]">
                {" "}
                LandingPage
              </p>
              <p className="text-black-secondary text-[14px] font-[500]">
                {" "}
                Features
              </p>
              <p className="text-black-secondary text-[14px] font-[500]">
                {" "}
                Documentation
              </p>
              <p className="text-black-secondary text-[14px] font-[500]">
                {" "}
                Pricing
              </p>
              <p className="text-black-secondary text-[14px] font-[500]">
                Referral Program
              </p>
            </div>
            {/* services column here */}
            <div className="w-full flex flex-col items-start justify-start gap-4">
              <p className="text-black-secondary text-[14px] font-[700]">
                Services
              </p>
              <p className="text-black-secondary text-[14px] font-[500]">
                {" "}
                LandingPage
              </p>
              <p className="text-black-secondary text-[14px] font-[500]">
                {" "}
                Features
              </p>
              <p className="text-black-secondary text-[14px] font-[500]">
                {" "}
                Documentation
              </p>
              <p className="text-black-secondary text-[14px] font-[500]">
                {" "}
                Pricing
              </p>
              <p className="text-black-secondary text-[14px] font-[500]">
                Referral Program
              </p>
            </div>
            {/* Company column here */}
            <div className="w-full flex flex-col items-start justify-start gap-4">
              <p className="text-black-secondary text-[14px] font-[700]">
                Company
              </p>
              <p className="text-black-secondary text-[14px] font-[500]">
                {" "}
                LandingPage
              </p>
              <p className="text-black-secondary text-[14px] font-[500]">
                {" "}
                Features
              </p>
              <p className="text-black-secondary text-[14px] font-[500]">
                {" "}
                Documentation
              </p>
            </div>
            {/* More column here */}
            <div className="w-full flex flex-col items-start justify-start gap-4">
              <p className="text-black-secondary text-[14px] font-[700]">
                More
              </p>
              <p className="text-black-secondary text-[14px] font-[500]">
                {" "}
                LandingPage
              </p>
              <p className="text-black-secondary text-[14px] font-[500]">
                {" "}
                Features
              </p>
              <p className="text-black-secondary text-[14px] font-[500]">
                {" "}
                Documentation
              </p>
            </div>
          </div>
          <div className="w-full flex flex-col items-center justify-center gap-8">
            <span className="h-[40px] w-[40px] flex items-center justify-center bg-brand-main rounded-full cursor-pointer hover:scale-105 hover:duration-300">
              <AiFillHeart className="text-white-main h-[20px] w-[20px]" />
            </span>
            <p className="text-black-secondary text-[14px] font-[500] italic">
              Copyright © {year}. Zulfi with love.
            </p>
          </div>
        </div>
      </ComponentWrapper>
    </footer>
  );
};

export default Footer;
