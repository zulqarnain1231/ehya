import React from "react";
import ComponentWrapper from "../Shared/Wrappers/ComponentWrapper";
import Details from "./Details/Details";
import LatestArticles from "./LatestArticles/LatestArticles";

const BlogDetails = () => {
  return (
    <ComponentWrapper style="py-10">
      <div className="w-full grid lg:grid-cols-[2fr,1fr] gap-16">
        <Details />
        <LatestArticles />
      </div>
    </ComponentWrapper>
  );
};

export default BlogDetails;
