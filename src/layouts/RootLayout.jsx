import React from "react";

// react-router-dom
import { Outlet } from "react-router-dom";

// styles
import "./style.css";

// components
import Header from "../components/Header";
import Footer from "../components/Footer";

const RootLayout = () => {
  return (
    <>
      {/* Header */}
      <Header />

      {/* Main */}
      <main>{<Outlet />}</main>

      {/* Footer */}
      <Footer />
    </>
  );
};

export default RootLayout;
