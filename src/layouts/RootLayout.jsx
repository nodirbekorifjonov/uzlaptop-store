import React from "react";

// react-router-dom
import { Outlet, useLocation } from "react-router-dom";

// styles
import "./style.css";

// components
import Header from "../components/Header";
import Footer from "../components/Footer";

const RootLayout = () => {
  const location = useLocation();
  const isAuthPage =
    location.pathname === "/auth" || location.pathname === "/auth/signup";
  return (
    <>
      {/* Header */}
      <Header />
      {/* Main */}
      <main
        className={`${!isAuthPage ? "mt-[16rem] max-[876px]:mt-[14rem]" : ""}`}
      >
        {<Outlet />}
      </main>
      {/* Footer */}
      <Footer />
    </>
  );
};

export default RootLayout;
