import React from "react";

interface Props {
  name: string;
  title: string;
  placeHolder: string;
  type: string;
  state: any;
  setState: (e: React.ChangeEvent<HTMLInputElement>) => void;
  isCompulsory?: boolean;
}
const TextInput: React.FC<Props> = ({
  name,
  title,
  placeHolder,
  type,
  state,
  setState,
  isCompulsory = true,
}) => {
  return (
    <div className="w-full flex flex-col items-start justify-start gap-4">
      <p className="text-black-secondary text-[16px] font-semibold">{title}:</p>
      <input
        type={type}
        name={name}
        placeholder={placeHolder}
        value={state}
        onChange={setState}
        required={isCompulsory}
        className="w-full h-[50px] text-[16px] text-black-secondary font-[500] placeholder:font-[400] border-[2px] border-black-secondary hover:border-brand-main focus:outline-none focus:border-brand-main p-3 rounded-[8px]"
      />
    </div>
  );
};

export default TextInput;
