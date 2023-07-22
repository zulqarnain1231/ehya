import Image from "next/image";
import React from "react";
import ArticleSnippet from "./ArticleSnippet";

const LatestArticles = () => {
  return (
    <div className="w-full h-[840px] flex flex-col items-start justify-start gap-8 rounded-[8px] bg-white-main shadow-xl p-4">
      <p className="font-medium text-black-off text-[20px]">Latest Articles</p>
      {[1, 2, 3, 4, 5].map((item: number) => {
        return <ArticleSnippet key={item} />;
      })}
      <p className="font-medium text-black-off text-[20px]">Tags</p>
      <div className="w-full flex items-center justify-start flex-wrap gap-2">
        <p className="h-[36px] px-4 flex items-center justify-center text-white-main bg-brand-main rounded-[8px]">
          Medical
        </p>
        <p className="h-[36px] px-4 flex items-center justify-center text-white-main bg-brand-main rounded-[8px]">
          Lifestyle
        </p>
        <p className="h-[36px] px-4 flex items-center justify-center text-white-main bg-brand-main rounded-[8px]">
          Learn
        </p>
        <p className="h-[36px] px-4 flex items-center justify-center text-white-main bg-brand-main rounded-[8px]">
          Healthy
        </p>
        <p className="h-[36px] px-4 flex items-center justify-center text-white-main bg-brand-main rounded-[8px]">
          Food
        </p>
        <p className="h-[36px] px-4 flex items-center justify-center text-white-main bg-brand-main rounded-[8px]">
          Education
        </p>
      </div>
    </div>
  );
};

export default LatestArticles;
