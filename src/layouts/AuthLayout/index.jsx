import React from "react";
import { Link, Outlet } from "react-router-dom";

// styles
import "./style.css";

// react-icons
import { FaHouse } from "react-icons/fa6";

const AuthLayout = () => {
  return (
    <section className="auth h-full">
      <div className="site-container auth-container flex justify-center items-center h-full">
        <div className="auth__content relative w-full h-[66.85rem] rounded-[1rem] shadow-[0_14px_28px_rgba(0,0,0,0.25)] grid grid-cols-2 bg-white max-[875px]:grid-cols-1 max-[875px]:h-full">
          <Link
            to="/"
            className="absolute text-gray-600 text-[2rem] flex justify-center items-center w-[4rem] h-[4rem] border-[2px] border-gray-600 rounded-full top-[2rem] left-[2rem] max-[635px]:top-[1rem] max-[635px]:left-auto max-[635px]:right-[1rem]"
          >
            <FaHouse />
          </Link>
          <div className="auth-panel flex justify-center items-center h-full bg-[url('/images/auth-bg.avif')] bg-no-repeat bg-cover bg-center text-white rounded-l-[1rem] max-[875px]:hidden"></div>
          <Outlet />
        </div>
      </div>
    </section>
  );
};

export default AuthLayout;
