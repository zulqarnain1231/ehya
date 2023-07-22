import React from 'react'
import Image from 'next/image';
const ArticleSnippet = () => {
  return (
    <div className="w-full h-[80px] flex item-center justify-start gap-4">
      <div className="relative h-full w-[90px]">
        <Image
          src={"/Assets/Blogs/blog2.png"}
          className="rounded-[8px]"
          alt=""
          fill
        />
      </div>
      <div className="w-full flex flex-col items-start justify-start gap-2">
        <p className="text-[18px] text-left text-black-off font-medium">
          Help children get better education
        </p>
        <p className="text-black-secondary text-[14px] font-[400]">
          Jun 27, 2022
        </p>
      </div>
    </div>
  );
}

export default ArticleSnippet
