import React from "react";
import BreadCrumb from "./BreadCrumb";
import Blog from "./Blog";

const Details = () => {
  return (
    <div className="w-full h-full flex flex-col items-center lg:items-start justify-start gap-10">
      <BreadCrumb />
      <Blog />
    </div>
  );
};

export default Details;
