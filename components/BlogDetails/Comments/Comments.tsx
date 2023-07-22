import React, { FormEvent } from "react";
import AddNewComment from "./AddNewComment";
import AllComments from "./AllComments";

const Comments = () => {
  return (
    <div className="w-full flex flex-col lg:items-start items-center justify-start gap-10">
      <AddNewComment />
      <AllComments />
    </div>
  );
};

export default Comments;
