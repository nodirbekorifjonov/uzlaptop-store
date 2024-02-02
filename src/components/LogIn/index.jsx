import React from "react";

// react-router-dom
import { Link } from "react-router-dom";

// react-icons
import { FcGoogle } from "react-icons/fc";
import { FaFacebookF } from "react-icons/fa6";

const LogIn = () => {
  return (
    <div className="signup px-[5rem] py-[3rem] h-full max-[515px]:px-[2rem] max-[875px]:py-[5rem]">
      <div className="flex flex-col items-center justify-between h-full">
        <div>
          <div className="mb-[2rem]">
            <h2 className="text-[2rem] font-medium">Login</h2>
            <p className="text-[1.6rem] text-gray-600">
              Wekcome Back! Please enter your details
            </p>
          </div>
          <form>
            <input
              type="email"
              placeholder="Email"
              className="email-input relative w-full outline-none p-[1rem] border-b-[1px] border-gray-300 transition-all duration-300 focus:border-gray-600 mb-[1rem]"
            />
            <input
              type="password"
              placeholder="Password"
              className="password-input relative w-full outline-none p-[1rem] border-b-[1px] border-gray-300 transition-all duration-300 focus:border-gray-600 mb-[1rem]"
            />
            <div className="flex justify-between items-center mb-[2rem]">
              <label className="flex items-center">
                <input type="checkbox" className="mr-[0.5rem]" />
                <span className="font-light">Remember me</span>
              </label>
              <Link className="hover:underline">Forgot Password?</Link>
            </div>
            <div className="signup-btns flex flex-col gap-[2rem]">
              <button
                type="submit"
                className="w-full py-[1.2rem] px-[3rem] border-none bg-black text-white rounded-[0.6rem] transition-all hover:bg-[#000000dc]"
              >
                Log In
              </button>
              <div className="flex items-center justify-between gap-[1rem]">
                <span className="signup-line block w-full h-[1px] bg-black"></span>
                <span>or</span>
                <span className="signup-line block w-full h-[1px] bg-black"></span>
              </div>
              <div className="flex flex-col gap-[1.5rem]">
                <Link className="flex justify-center items-center gap-[0.5rem] w-full py-[1.2rem] px-[3rem] border-[1px] border-black rounded-[0.6rem] font-medium">
                  <FcGoogle /> Sign Up With Google
                </Link>
                <Link className="flex justify-center items-center gap-[0.5rem] w-full py-[1.2rem] px-[3rem] border-[1px] border-black rounded-[0.6rem] font-medium">
                  <span className="text-blue-600">
                    <FaFacebookF />
                  </span>
                  Sign Up With Facebook
                </Link>
              </div>
            </div>
          </form>
        </div>
        <div className="align-bottom">
          <span>Don't have an account? </span>
          <Link to="/auth/signup" className="text-blue-700 hover:underline">
            SignUp
          </Link>
        </div>
      </div>
    </div>
  );
};

export default LogIn;
