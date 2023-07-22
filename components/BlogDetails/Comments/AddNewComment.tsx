import React from "react";

const AddNewComment = () => {
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="w-full flex flex-col items-start justify-start gap-4 border-[2px] border-brand-main/70 rounded-[8px] p-4"
    >
      <input
        type="text"
        className="h-[70px] w-full font-[400] text-black-secondary text-[16px] focus:outline-none placeholder:text-black-secondary"
        placeholder="Leave Your Comment Here"
      />
      <div className="w-full flex items-center justify-end">
        <button
          type="submit"
          className="h-[40px] w-[130px] rounded-[8px] bg-brand-main text-white-main text-[16px] font-[500]"
        >
          Send
        </button>
      </div>
    </form>
  );
};

export default AddNewComment;
