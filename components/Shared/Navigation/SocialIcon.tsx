import React from "react";

interface Props {
  icon: React.ReactNode;
}

const SocialIcon: React.FC<Props> = ({ icon }: Props) => {
  return (
    <div className="h-[30px] w-[30px] flex items-center justify-center rounded-full bg-red-secondary cursor-pointer hover:scale-105 hover:duration-300">
      {icon}
    </div>
  );
};

export default SocialIcon;
