import React, { FormEvent } from "react";
import AddNewComment from "./AddNewComment";

const Comments = () => {
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  };
  return (
    <div className="w-full flex flex-col lg:items-start items-center justify-start gap-10">
      <AddNewComment />
    </div>
  );
};

export default Comments;
