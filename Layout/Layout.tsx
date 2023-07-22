import Footer from "@/components/Shared/Navigation/Footer";
import Navabar from "@/components/Shared/Navigation/Navabar";
import React from "react";

interface Props {
  children: React.ReactNode;
}
const Layout: React.FC<Props> = ({ children }: Props) => {
  return (
    <div className="w-full h-full">
      <Navabar />
      <main className="w-full h-full font-inter">{children}</main>
      <Footer />
    </div>
  );
};

export default Layout;
