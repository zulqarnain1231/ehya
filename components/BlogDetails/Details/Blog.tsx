import Image from "next/image";
import React from "react";

const Blog = () => {
  return (
    <div className="w-full flex flex-col lg:items-start items-center justify-start gap-6">
      <div className="w-full h-[450px] relative shadow-lg">
        <Image
          className="rounded-[10px]"
          src={"/Assets/Blogs/BlogDetail.jpg"}
          alt=""
          fill
        />
      </div>
      <p className="font-[500] text-brand-main text-[16px] uppercase">
        Education
      </p>
      <p className="text-black-off text-[26px] font-semibold lg:text-left text-center">
        Help children get better education
      </p>
      <div className="w-full flex flex-col lg:items-start items-center justify-start gap-10">
        <p className="font-[500] text-black-secondary text-[16px] lg:text-left text-center">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Egestas
          purus viverra accumsan in nisl nisi. Arcu cursus vitae congue mauris
          rhoncus aenean vel elit scelerisque. In egestas erat imperdiet sed
          euismod nisi porta lorem mollis. Morbi tristique senectus et netus.
          Mattis pellentesque id nibh tortor id aliquet lectus proin.
        </p>
        <p className="font-[500] text-black-secondary text-[16px] lg:text-left text-center">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Egestas
          purus viverra accumsan in nisl nisi. Arcu cursus vitae congue mauris
          rhoncus aenean vel elit scelerisque. In egestas erat imperdiet sed
          euismod nisi porta lorem mollis. Morbi tristique senectus et netus.
          Mattis pellentesque id nibh tortor id aliquet lectus proin.
        </p>
        <p className="font-[500] text-black-secondary text-[16px] lg:text-left text-center">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Egestas
          purus viverra accumsan in nisl nisi. Arcu cursus vitae congue mauris
          rhoncus aenean vel elit scelerisque. In egestas erat imperdiet sed
          euismod nisi porta lorem mollis. Morbi tristique senectus et netus.
          Mattis pellentesque id nibh tortor id aliquet lectus proin.
        </p>
      </div>
    </div>
  );
};

export default Blog;
