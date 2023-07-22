import React from "react";
import ComponentWrapper from "../Shared/Wrappers/ComponentWrapper";
import Image from "next/image";

const NewsLetter = () => {
  return (
    <div className="w-full sm:min-h-[100vh] bg-black-off mt-10 relative">
      <div className=" lg:inline-block hidden w-full h-[100px] -top-[40px] absolute bg-white-main rounded-b-[80%] z-10"></div>
      <ComponentWrapper style="py-28">
        <div className="w-full h-full lg:grid lg:grid-cols-2 flex flex-col-reverse items-center justify-start gap-10">
          <div className="w-full flex flex-col items-center lg:items-start justify-start gap-4">
            <p className="text-white-main md:text-[36px] text-[28px] lg:text-left text-center font-bold">
              Get our stories delivered From us to your inbox weekly.
            </p>
            <div className="w-full flex md:flex-row flex-col items-center justify-between md:gap-2 gap-4">
              <input
                type="email"
                className="h-[46px] w-full bg-white-main focus:outline-none rounded-[10px] text-black-off placeholder:text-black-secondary text-[18px] font-[500] p-3"
                placeholder="Your Email"
              />
              <button className="h-[46px] md:w-[180px] w-full flex items-center justify-center text-white-main text-[18px] font-semibold bg-brand-main rounded-[10px]">
                Get Started
              </button>
            </div>
            <p className="text-[16px] text-black-secondary lg:text-left text-center font-semibold">
              Get a response tomorrow if you submit by 9pm today. If we received
              after 9pm will get a reponse the following day.
            </p>
          </div>
          <div className="w-full sm:inline-block hidden h-[430px] relative">
            <Image src={"/Assets/Footerimg.png"} alt="" fill />
          </div>
        </div>
      </ComponentWrapper>
    </div>
  );
};

export default NewsLetter;
