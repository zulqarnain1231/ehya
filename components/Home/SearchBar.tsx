import React from "react";
import { HiSearch } from "react-icons/hi";

const SearchBar = () => {
  return (
    <div className="w-full h-[56px] flex items-center justify-between gap-4 p-2 bg-white-main rounded-[6px] shadow-lg">
      <div className="w-full h-[56px] flex items-center justify-start gap-4 p-2">
        {" "}
        <HiSearch className="text-gray-400 h-[24px] w-[24px]" />
        <input
          type="text"
          className="w-full h-full focus:outline-none placeholder:italic placeholder:font-semibold font-[500] text-[18px] text-black-secondary "
          placeholder="Search article"
        />
      </div>
      <button className="h-[46px] w-[120px] flex items-center justify-center bg-brand-main text-white-main text-[18px] font-[500] rounded-[8px] ">
        Search
      </button>
    </div>
  );
};

export default SearchBar;
