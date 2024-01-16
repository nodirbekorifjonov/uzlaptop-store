import React from "react";

// styles
import "./style.css";

// components
import HeroCarousel from "../../components/HeroCarousel";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <>
      {/* Hero Section */}
      <section className="hero py-[2rem] mb-[3rem]">
        <div className="site-container">
          <div className="hero__content w-full flex justify-between items-center gap-[2rem] p-[2rem] bg-white border-[1px] border-[#DEE2E7] rounded-[0.6rem] max-[863px]:p-0">
            <div className="hero__carousel w-[70%] h-[38rem] max-[1149px]:h-[41rem] max-[863px]:w-full max-[610px]:hidden">
              <HeroCarousel />
            </div>
            <div className="hero-mobile__carousel hidden w-full h-[25rem] max-[610px]:block max-[415px]:h-[18rem]">
              <HeroCarousel />
            </div>
            <div className="hero__menu w-[30%] flex flex-col justify-between gap-y-[1rem] max-[863px]:hidden">
              {/* Hero User Menu */}
              <div className="hero__user pt-[1.4rem] bg-[#E3F0FF] rounded-[0.6rem] px-[1rem] pb-[1.2rem]">
                <div className="hero__user-info flex items-center gap-[0.9rem] mb-[1.3rem]">
                  <img src="./images/svg/hero-avatar.svg" alt="" width={44} />
                  <span className="text-[1.6rem] text-[#1c1c1c]">
                    Hi, user <br /> let's get stated
                  </span>
                </div>
                <div className="hero__user-btns flex flex-col gap-y-[0.7rem]">
                  <Link className="w-full flex justify-center items-center px-[5.2rem] py-[0.7rem] bg-gradient-to-b from-[#127FFF] to-[#0067FF] text-white rounded-[0.6rem]  self-start">
                    Join now
                  </Link>
                  <Link className="w-full flex justify-center items-center px-[6.1rem] py-[0.7rem] bg-white text-[#0D6EFD] rounded-[0.6rem]  self-start">
                    Log in
                  </Link>
                </div>
              </div>
              {/* Hero menu */}
              <div className="bg-[#F38332] rounded-[0.6rem] pt-[1.6rem] pb-[2.2rem] pl-[1.6rem] pr-[4rem]">
                <span className="block text-[1.6rem] text-white w-[60%]">
                  Get US $10 off with a new supplier
                </span>
              </div>
              <div className="bg-[#55BDC3] rounded-[0.6rem] pt-[1.6rem] pb-[2.2rem] pl-[1.6rem] pr-[4rem]">
                <span className="block text-[1.6rem] text-white w-[60%]">
                  Send quotes with supplier preferences
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;
