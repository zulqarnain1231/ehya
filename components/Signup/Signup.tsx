import React from "react";
import ComponentWrapper from "../Shared/Wrappers/ComponentWrapper";
const Signup = () => {
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  };
  return (
    <ComponentWrapper style="py-16">
      <div className="w-full flex  items-center justify-center mx-auto">
        <form
          onSubmit={handleSubmit}
          className="lg:w-[40%] md:w-[50%] w-full h-full flex flex-col items-center justify-start gap-10"
        >
          <p className="text-center text-black-off sm:text-[36px] text-[28px] font-bold">
            Signup
          </p>
        </form>
      </div>
    </ComponentWrapper>
  );
};

export default Signup;
