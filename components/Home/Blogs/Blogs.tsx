import React from "react";
import ComponentWrapper from "@/components/Shared/Wrappers/ComponentWrapper";
import BlogCard from "./BlogCard";
import { BsArrowRight } from "react-icons/bs";

const Blogs = () => {
  return (
    <ComponentWrapper style="py-10">
      <div className="w-full h-full grid lg:grid-cols-3 md:grid-cols-2 gap-8">
        {[1, 2, 3, 4, 5, 6, 7, 8, 9].map((item: number) => {
          return <BlogCard key={item} />;
        })}
      </div>
      <div className="w-full flex items-center justify-center my-10">
        <button className="h-[46px] w-[170px] flex items-center justify-center gap-2 text-brand-main text-[18px] font-semibold bg-transparent border-[2px] border-brand-main rounded-[10px]">
          More articles
          <BsArrowRight className="text-brand-main font-bold h-[20px] w-[20px]" />
        </button>
      </div>
    </ComponentWrapper>
  );
};

export default Blogs;
