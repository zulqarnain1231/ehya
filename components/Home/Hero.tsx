import React from "react";
import ComponentWrapper from "../Shared/Wrappers/ComponentWrapper";
import Image from "next/image";
import SearchBar from "./SearchBar";

const Hero = () => {
  return (
    <div className="w-full min-h-[calc(100vh-70px)] relative">
      <ComponentWrapper style={"h-full py-10"}>
        <div className="w-full h-full grid lg:grid-cols-2">
          <div className="w-full flex flex-col items-center justify-center gap-8">
            <p className="text-black-off md:text-[60px] text-[46px] text-center lg:text-left font-bold">
              Read the most interesting articles
            </p>
            <p className="text-[20px] font-[500] text-black-off">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Natus
              reiciendis nesciunt illo omnis, nostrum quam sed asperiores, in
              enim incidunt, aperiam sunt hic. Illum sequi animi voluptatum,
              exercitationem magni sapiente?
            </p>
            <SearchBar />
            <div className="w-full flex justify-start items-center flex-wrap gap-4 ">
              <p className="text-[18px] text-black-off/80 font-bold italic">
                Popular Tags:
              </p>
              <p className="py-2 px-4 text-brand-main text-[18px] font-bold bg-[#E1EBF9] rounded-[6px]">
                Design
              </p>
              <p className="py-2 px-4 text-brand-main text-[18px] font-bold bg-[#E1EBF9] rounded-[6px]">
                User Experience
              </p>
              <p className="py-2 px-4 text-brand-main text-[18px] font-bold bg-[#E1EBF9] rounded-[6px]">
                User Interfaces
              </p>
            </div>
          </div>
          <div className="w-full h-[530px] relative lg:inline-block hidden">
            <Image src={"/Assets/HeroImage.png"} alt="" fill />
          </div>
        </div>
      </ComponentWrapper>
      <div className="absolute h-full sm:w-[400px] w-[300px] left-0 top-0 -z-10">
        <div className="relative h-full w-full">
          <Image src={"/Assets/Oval.png"} alt="" fill />
        </div>
      </div>
    </div>
  );
};

export default Hero;
