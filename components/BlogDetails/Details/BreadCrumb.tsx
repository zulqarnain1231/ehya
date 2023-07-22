import Link from "next/link";
import React from "react";

const BreadCrumb = () => {
  return (
    <div className="w-full flex items-center justify-start gap-4">
      <Link
        href={"/"}
        className="font-semibold text-black-secondary text-[14px]"
      >
        Home
      </Link>
      <p className="font-semibold text-black-secondary text-[14px]">/</p>
      <p className="font-semibold text-black-secondary text-[14px]">Blog</p>
      <p className="font-semibold text-black-secondary text-[14px]">/</p>
      <p className="font-semibold text-black-secondary text-[14px]">
        Article Title
      </p>
    </div>
  );
};

export default BreadCrumb;
