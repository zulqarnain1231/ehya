import React from "react";
import Comment from "./Comment";

const AllComments = () => {
  return (
    <div className="w-full flex flex-col lg:items-start items-center justify-start gap-6">
      <p className="text-[18px] text-black-off lg:text-left text-center font-bold">
        All Comments(3)
      </p>
      <Comment isEditable replies />
      {[1, 2].map((item: number) => {
        return <Comment key={item} />;
      })}
    </div>
  );
};

export default AllComments;
