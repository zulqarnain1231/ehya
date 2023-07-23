import React, { useState } from "react";
import ComponentWrapper from "../Shared/Wrappers/ComponentWrapper";
import TextInput from "../Shared/Inputs/TextInput";
import { ISignup } from "@/types/types";
import Link from "next/link";

const Signup = () => {
  const [inputs, setInputs] = useState<ISignup>({
    name: "",
    password: "",
    email: "",
  });
  const handleInputs = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setInputs({ ...inputs, [name]: value });
  };
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  };
  return (
    <ComponentWrapper style="py-10">
      <div className="w-full flex  items-center justify-center mx-auto">
        <form
          onSubmit={handleSubmit}
          className="lg:w-[40%] md:w-[50%] w-full h-full flex flex-col items-center justify-start gap-10"
        >
          <p className="text-center text-black-off sm:text-[36px] text-[28px] font-bold">
            Signup
          </p>
          <div className="w-full flex flex-col items-start justify-start gap-6">
            <TextInput
              name="name"
              state={inputs.name}
              type="text"
              setState={handleInputs}
              placeHolder="Enter Name Here"
              title="Name"
            />
            <TextInput
              name="email"
              state={inputs.email}
              type="email"
              setState={handleInputs}
              placeHolder="Enter Email Here"
              title="Email"
            />
            <TextInput
              name="password"
              state={inputs.password}
              type="password"
              setState={handleInputs}
              placeHolder="Enter password Here"
              title="Password"
            />
            <p className="font-[500] text-brand-main text-[14px]">
              Forgot Password?
            </p>
            <button
              type="submit"
              className="w-full h-[50px] text-white-main text-base font-semibold bg-brand-main rounded-[8px]"
            >
              Register
            </button>
            <div className="w-full flex items-center justify-start gap-2">
              <p className="font-[500] text-base text-black-secondary">
                You have an account?
              </p>
              <Link
                href={"/login"}
                className="font-[500] text-brand-main text-base"
              >
                Login now
              </Link>
            </div>
          </div>
        </form>
      </div>
    </ComponentWrapper>
  );
};

export default Signup;
