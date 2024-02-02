import React from "react";

// react-router-dom
import { Link, useLocation } from "react-router-dom";

// styles
import "./style.css";

// react-icons
import { FaTelegram, FaInstagram, FaFacebook } from "react-icons/fa6";

const Footer = () => {
  const location = useLocation();
  const isAuthPage =
    location.pathname === "/auth" || location.pathname === "/auth/signup";
  return (
    <>
      {!isAuthPage && (
        <footer id="footer">
          {/* Fisrt Footer */}
          <div className="footer-first pt-[4rem] pb-[5.9rem] bg-white">
            <div className="site-container flex gap-[9rem] max-[955px]:flex-col max-[955px]:gap-y-[3rem] max-[585px]:justify-center">
              <div className="footer-socials w-[27.6rem] flex flex-col gap-y-[1.5rem] flex-shrink-0 max-[955px]:w-[70%] max-[955px]:text-center max-[955px]:flex-shrink max-[955px]:self-center max-[955px]:items-center">
                <Link to="/" className="">
                  <img src="/images/svg/logo-symbol.svg" alt="" />
                </Link>
                <p className="text-[#505050] text-[1.6rem] ">
                  Best information about the company gies here but now lorem
                  ipsum is
                </p>
                <ul className="footer-socials__list flex items-center gap-x-[1rem]">
                  <li className="footer-socials__item">
                    <Link
                      to=""
                      className="footer-socials__link block text-[2.6rem] text-[#BDC4CD] transition-all hover:text-[#0d6efd]"
                    >
                      <FaTelegram />
                    </Link>
                  </li>
                  <li className="footer-socials__item">
                    <Link
                      to=""
                      className="footer-socials__link block text-[2.6rem] text-[#BDC4CD] transition-all hover:text-[#0d6efd]"
                    >
                      <FaInstagram />
                    </Link>
                  </li>
                  <li className="footer-socials__item">
                    <Link
                      to=""
                      className="footer-socials__link block text-[2.6rem] text-[#BDC4CD] transition-all hover:text-[#0d6efd]"
                    >
                      <FaFacebook />
                    </Link>
                  </li>
                </ul>
              </div>
              {/* Footer links */}
              <div className="flex justify-between w-[100%] max-[585px]:grid max-[585px]:grid-cols-2 max-[585px]:gap-y-[2rem] max-[355px]:grid-cols-1">
                {/* Partners */}
                <div className="text-[1.6rem] max-[585px]:flex max-[585px]:flex-col max-[585px]:items-center max-[585px]:text-center">
                  <p className="text-[#1C1C1C] font-medium mb-[1rem]">
                    Partnership
                  </p>
                  <ul className="footer__list flex flex-col gap-y-[0.3rem]">
                    <li className="footer__item">
                      <Link className="footer__link text-[#8B96A5] leading-[1.5] transition-all hover:text-[#0d6efd] hover:underline">
                        About Us
                      </Link>
                    </li>
                    <li className="footer__item">
                      <Link className="footer__link text-[#8B96A5] leading-[1.5] transition-all hover:text-[#0d6efd] hover:underline">
                        Find Store
                      </Link>
                    </li>
                    <li className="footer__item">
                      <Link className="footer__link text-[#8B96A5] leading-[1.5] transition-all hover:text-[#0d6efd] hover:underline">
                        Categories
                      </Link>
                    </li>
                    <li className="footer__item">
                      <Link className="footer__link text-[#8B96A5] leading-[1.5] transition-all hover:text-[#0d6efd] hover:underline">
                        Blogs
                      </Link>
                    </li>
                  </ul>
                </div>
                {/* Information */}
                <div className="text-[1.6rem] max-[585px]:flex max-[585px]:flex-col max-[585px]:items-center max-[585px]:text-center">
                  <p className="text-[#1C1C1C] font-medium mb-[1rem]">
                    Information
                  </p>
                  <ul className="footer__list flex flex-col gap-y-[0.3rem]">
                    <li className="footer__item">
                      <Link className="footer__link text-[#8B96A5] leading-[1.5] transition-all hover:text-[#0d6efd] hover:underline">
                        Help Center
                      </Link>
                    </li>
                    <li className="footer__item">
                      <Link className="footer__link text-[#8B96A5] leading-[1.5] transition-all hover:text-[#0d6efd] hover:underline">
                        Money Refund
                      </Link>
                    </li>
                    <li className="footer__item">
                      <Link className="footer__link text-[#8B96A5] leading-[1.5] transition-all hover:text-[#0d6efd] hover:underline">
                        Shipping
                      </Link>
                    </li>
                    <li className="footer__item">
                      <Link className="footer__link text-[#8B96A5] leading-[1.5] transition-all hover:text-[#0d6efd] hover:underline">
                        Contact us
                      </Link>
                    </li>
                  </ul>
                </div>
                {/* For Users */}
                <div className="text-[1.6rem] max-[585px]:flex max-[585px]:flex-col max-[585px]:items-center max-[585px]:text-center">
                  <p className="text-[#1C1C1C] font-medium mb-[1rem]">
                    For users
                  </p>
                  <ul className="footer__list flex flex-col gap-y-[0.3rem]">
                    <li className="footer__item">
                      <Link className="footer__link text-[#8B96A5] leading-[1.5] transition-all hover:text-[#0d6efd] hover:underline">
                        Login
                      </Link>
                    </li>
                    <li className="footer__item">
                      <Link className="footer__link text-[#8B96A5] leading-[1.5] transition-all hover:text-[#0d6efd] hover:underline">
                        Register
                      </Link>
                    </li>
                    <li className="footer__item">
                      <Link className="footer__link text-[#8B96A5] leading-[1.5] transition-all hover:text-[#0d6efd] hover:underline">
                        Settings
                      </Link>
                    </li>
                    <li className="footer__item">
                      <Link className="footer__link text-[#8B96A5] leading-[1.5] transition-all hover:text-[#0d6efd] hover:underline">
                        My Orders
                      </Link>
                    </li>
                  </ul>
                </div>
                {/* Get App */}
                <div className="text-[1.6rem] max-[585px]:flex max-[585px]:flex-col max-[585px]:items-center max-[585px]:text-center">
                  <p className="text-[#1C1C1C] font-medium mb-[1.5rem]">
                    Get app
                  </p>
                  <ul className="footer__list flex flex-col gap-y-[0.8rem]">
                    <li className="footer__item">
                      <Link className="footer__link">
                        <img
                          src="/images/svg/appstore-market.svg"
                          alt=""
                          width={124}
                          height={42}
                        />
                      </Link>
                    </li>
                    <li className="footer__item">
                      <Link className="footer__link">
                        <img
                          src="/images/svg/googleplay-market.svg"
                          alt=""
                          width={124}
                          height={42}
                        />
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          {/* Second Footer */}
          <div className="footer-second pt-[2.3rem] pb-[2.1rem] bg-[#EFF2F4]">
            <div className="site-container">
              <p className="text-[1.6rem] text-[#606060] leading-[1.5]">
                © 2024 Uzlaptop
              </p>
            </div>
          </div>
        </footer>
      )}
    </>
  );
};

export default Footer;
