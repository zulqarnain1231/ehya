import Footer from "@/components/Shared/Navigation/Footer";
import Navabar from "@/components/Shared/Navigation/Navabar";
import React from "react";
import { useRouter } from "next/router";

interface Props {
  children: React.ReactNode;
}
const Layout: React.FC<Props> = ({ children }: Props) => {
  const router = useRouter();
  const renderNavbar = () => {
    if (router.pathname == "/dashboard") {
      return false;
    } else return true;
  };
  const renderFooter = () => {
    if (
      router.pathname == "/login" ||
      router.pathname == "/signup" ||
      router.pathname == "/dashboard"
    ) {
      return false;
    } else return true;
  };
  return (
    <div className="w-full h-full">
      {renderNavbar() && <Navabar />}
      <main className="w-full h-full font-inter">{children}</main>
      {renderFooter() && <Footer />}
    </div>
  );
};

export default Layout;
