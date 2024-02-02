import React, { useState } from "react";

// react-router-dom
import { Link, useLocation } from "react-router-dom";

// styles
import "./style.css";

// react-icons
import {
  FaUser,
  FaHeart,
  FaMoneyBill,
  FaShoppingBag,
  FaPhoneAlt,
  FaQuestion,
} from "react-icons/fa";
import {
  FaCartShopping,
  FaLanguage,
  FaHouse,
  FaList,
  FaLocationDot,
  FaBuilding,
  FaHeadset,
} from "react-icons/fa6";
import { RiMenu2Line } from "react-icons/ri";
import { MdOutlineKeyboardArrowDown } from "react-icons/md";
import { IoMdSettings } from "react-icons/io";

const Header = () => {
  // Use Location
  const location = useLocation();
  const isAuthPage =
    location.pathname === "/auth" || location.pathname === "/auth/signup";

  const [addActive, setAddActive] = useState("");
  // Currency
  const [currency, setCurrency] = useState("USD");
  const [openCurrency, setOpenCurrency] = useState("");

  // Language
  const [language, setLanguage] = useState("UZ");
  const [openLanguage, setOpenLanguage] = useState("");

  // Handle Add Active
  const handleAddActive = () => {
    return addActive == "" ? setAddActive("active") : setAddActive("");
  };

  // HandleChangeCurrency
  const handleChangeCurrency = () => {
    !openCurrency ? setOpenCurrency("active") : setOpenCurrency("");
    setOpenLanguage("");
  };

  // HandleChangeLang
  const handleChangeLang = () => {
    !openLanguage ? setOpenLanguage("active") : setOpenLanguage("");
    setOpenCurrency("");
  };

  return (
    <>
      {!isAuthPage && (
        <header
          id="header"
          className="w-full bg-[#fff] fixed top-0 left-0 z-[1000]"
        >
          {/* First Header */}
          <div className="header-first border-b-[1px] border-[#E0E0E0] py-[2rem] max-[876px]:py-[1.5rem] max-[876px]:border-transparent">
            <div className="site-container flex justify-between items-center">
              {/* mobile-menu */}
              <button
                onClick={handleAddActive}
                className="hidden text-[1.6rem] w-[4rem] h-[3.5rem] bg-[#0D6EFD] rounded-[7px] max-[876px]:flex justify-center items-center text-white"
              >
                <RiMenu2Line />
              </button>
              {/* Site Logo */}
              <Link to="/" className="site-logo block">
                <img src="/images/svg/logo-symbol.svg" alt="" />
              </Link>
              {/* Site Search */}
              <form className="max-[876px]:hidden">
                <label className="flex">
                  <input
                    type="search"
                    placeholder="Search"
                    className="pt-[1.1rem] pb-[1rem] pl-[1rem] pr-[0.5rem] text-[1.6rem] placeholder:text-[1.6rem] placeholder:text-[#8B96A5] w-[48rem] border-[2px] border-[#0D6EFD] rounded-tl-[7px] rounded-bl-[7px]"
                  />

                  <button className="border-[2px] border-[#0D6EFD] rounded-tr-[7px] rounded-br-[7px] border-l-[0] pt-[1.1rem] pb-[1rem] px-[2.3rem] text-white text-[1.6rem] font-medium bg-[#0D6EFD] transition-all duration-300 hover:bg-[#127fff]">
                    Search
                  </button>
                </label>
              </form>
              {/* Site Nav */}
              <nav className="site-nav">
                <ul className="site-nav__list flex items-center gap-x-[1.8rem]">
                  <li className="site-nav__item max-[876px]:hidden">
                    <Link className="site-nav__link flex flex-col items-center gap-y-[0.7rem] text-[#8B96A5] text-[2rem] transition-all duration-300 hover:text-[#0D6EFD]">
                      <FaHeart />
                      <span className="text-[1.2rem]">Orders</span>
                    </Link>
                  </li>
                  <li className="site-nav__item">
                    <Link className="site-nav__link flex flex-col items-center gap-y-[0.7rem] text-[#8B96A5] text-[2rem] transition-all duration-300 hover:text-[#0D6EFD]">
                      <FaCartShopping />
                      <span className="text-[1.2rem]">My Cart</span>
                    </Link>
                  </li>
                  <li className="site-nav__item max-[876px]:hidden">
                    <Link
                      to="auth"
                      className="site-nav__link flex flex-col items-center gap-y-[0.7rem] text-[#8B96A5] text-[2rem] transition-all duration-300 hover:text-[#0D6EFD]"
                    >
                      <FaUser />
                      <span className="text-[1.2rem]">Profile</span>
                    </Link>
                  </li>
                </ul>
              </nav>
              {/* Mobile Nav */}
              <nav
                className={`mobile-nav flex flex-col translate-x-[-100%] invisible transition-all duration-300 absolute bg-[#fff] text-[#1C1C1C] left-0 top-0 bottom-0 w-[70%] z-[1000] h-screen max-[435px]:w-[80%] overflow-y-auto ${addActive}`}
              >
                <div className="mobile-nav__header p-[2rem] bg-[#EFF2F4]">
                  <img
                    src="/images/svg/hero-avatar.svg"
                    alt=""
                    width={44}
                    height={44}
                    className="mb-[1rem]"
                  />
                  {/* Mobile Nav Sign or Login */}
                  <div className="mobile-nav__signlog flex gap-[0.7rem] text-[1.6rem]">
                    <Link to="auth" className="hover:text-[#0d6efd]">
                      Log In
                    </Link>
                    <span>|</span>
                    <Link to="auth/signup" className="hover:text-[#0d6efd]">
                      Sign Up
                    </Link>
                  </div>
                </div>
                <ul className="mobile-nav__list flex flex-col py-[1rem]">
                  <li className="mobile-nav__item">
                    <Link
                      onClick={() => setAddActive("")}
                      to="/"
                      className={`mobile-nav__item bg-white py-[1.2rem] px-[2.3rem] flex items-center gap-x-[1.6rem] text-[#676f7a] translate-x-[-20px] invisible opacity-0 transition-all duration-[2s] ${addActive} hover:bg-[#E5F1FF] hover:transition-none hover:duration-0`}
                    >
                      <FaHouse />
                      <span className="text-[1.6rem]">Home</span>
                    </Link>
                  </li>
                  <li className="mobile-nav__item">
                    <Link
                      onClick={() => setAddActive("")}
                      to="/shop"
                      className={`mobile-nav__item bg-white py-[1.2rem] px-[2.3rem] flex items-center gap-x-[1.6rem] text-[#676f7a] translate-x-[-20px] invisible opacity-0 transition-all duration-[2s] ${addActive} hover:bg-[#E5F1FF] hover:transition-none hover:duration-0`}
                    >
                      <FaList />
                      <span className="text-[1.6rem]">Categories</span>
                    </Link>
                  </li>
                  <li className="mobile-nav__item">
                    <Link
                      onClick={() => setAddActive("")}
                      to="/"
                      className={`mobile-nav__item bg-white py-[1.2rem] px-[2.3rem] flex items-center gap-x-[1.6rem] text-[#676f7a] translate-x-[-20px] invisible opacity-0 transition-all duration-[2s] ${addActive} hover:bg-[#E5F1FF] hover:transition-none hover:duration-0`}
                    >
                      <FaHeart />
                      <span className="text-[1.6rem]">Favorites</span>
                    </Link>
                  </li>
                  <li className="mobile-nav__item">
                    <Link
                      onClick={() => setAddActive("")}
                      to="/"
                      className={`mobile-nav__item bg-white py-[1.2rem] px-[2.3rem] flex items-center gap-x-[1.6rem] text-[#676f7a] translate-x-[-20px] invisible opacity-0 transition-all duration-[2s] ${addActive} hover:bg-[#E5F1FF] hover:transition-none hover:duration-0`}
                    >
                      <FaShoppingBag />
                      <span className="text-[1.6rem]">Orders</span>
                    </Link>
                  </li>
                </ul>
                <span className="block w-[93%] h-[1px] bg-[#DEE2E7] self-center"></span>
                <ul className="mobile-nav__list flex flex-col py-[1rem]">
                  <li className="mobile-nav__item">
                    <Link
                      onClick={() => setAddActive("")}
                      to="/"
                      className={`mobile-nav__item bg-white py-[1.2rem] px-[2.3rem] flex items-center gap-x-[1.6rem] text-[#676f7a] translate-x-[-20px] invisible opacity-0 transition-all duration-[2s] ${addActive} hover:bg-[#E5F1FF] hover:transition-none hover:duration-0`}
                    >
                      <FaLocationDot />
                      <span className="text-[1.6rem]">Find store</span>
                    </Link>
                  </li>
                  <li className="mobile-nav__item">
                    <Link
                      onClick={() => setAddActive("")}
                      to="/"
                      className={`mobile-nav__item bg-white py-[1.2rem] px-[2.3rem] flex items-center gap-x-[1.6rem] text-[#676f7a] translate-x-[-20px] invisible opacity-0 transition-all duration-[2s] ${addActive} hover:bg-[#E5F1FF] hover:transition-none hover:duration-0`}
                    >
                      <FaBuilding />
                      <span className="text-[1.6rem]">About</span>
                    </Link>
                  </li>
                  <li className="mobile-nav__item">
                    <Link
                      onClick={() => setAddActive("")}
                      to="https://vcarduz.netlify.app/vcard/1"
                      target="_blank"
                      className={`mobile-nav__item bg-white py-[1.2rem] px-[2.3rem] flex items-center gap-x-[1.6rem] text-[#676f7a] translate-x-[-20px] invisible opacity-0 transition-all duration-[2s] ${addActive} hover:bg-[#E5F1FF] hover:transition-none hover:duration-0`}
                    >
                      <FaHeadset />
                      <span className="text-[1.6rem]">Contact us</span>
                    </Link>
                  </li>
                  <li className="mobile-nav__item">
                    <Link
                      onClick={() => setAddActive("")}
                      to="/"
                      className={`mobile-nav__item bg-white py-[1.2rem] px-[2.3rem] flex items-center gap-x-[1.6rem] text-[#676f7a] translate-x-[-20px] invisible opacity-0 transition-all duration-[2s] ${addActive} hover:bg-[#E5F1FF] hover:transition-none hover:duration-0`}
                    >
                      <IoMdSettings />
                      <span className="text-[1.6rem]">Settings</span>
                    </Link>
                  </li>
                  <li className="mobile-nav__item">
                    <Link
                      onClick={() => setAddActive("")}
                      to="/"
                      className={`mobile-nav__item bg-white py-[1.2rem] px-[2.3rem] flex items-center gap-x-[1.6rem] text-[#676f7a] translate-x-[-20px] invisible opacity-0 transition-all duration-[2s] ${addActive} hover:bg-[#E5F1FF] hover:transition-none hover:duration-0`}
                    >
                      <FaQuestion />
                      <span className="text-[1.6rem]">FAQs</span>
                    </Link>
                  </li>
                </ul>
                <span className="block w-[93%] h-[1px] bg-[#DEE2E7] self-center"></span>
                <ul className="mobile-nav__list flex flex-col py-[1rem]">
                  <li className="mobile-nav__item">
                    <Link
                      onClick={() => setAddActive("")}
                      to="/"
                      className={`mobile-nav__item bg-white py-[1.2rem] pl-[5.3rem] flex items-center gap-x-[1.6rem] text-[#676f7a] translate-x-[-20px] invisible opacity-0 transition-all duration-[2s] ${addActive} hover:bg-[#E5F1FF] hover:transition-none hover:duration-0`}
                    >
                      <span className="text-[1.6rem]">User agreement</span>
                    </Link>
                  </li>
                  <li className="mobile-nav__item">
                    <Link
                      onClick={() => setAddActive("")}
                      to="/"
                      className={`mobile-nav__item bg-white py-[1.2rem] pl-[5.3rem] flex items-center gap-x-[1.6rem] text-[#676f7a] translate-x-[-20px] invisible opacity-0 transition-all duration-[2s] ${addActive} hover:bg-[#E5F1FF] hover:transition-none hover:duration-0`}
                    >
                      <span className="text-[1.6rem]">Partnership</span>
                    </Link>
                  </li>
                  <li className="mobile-nav__item">
                    <Link
                      onClick={() => setAddActive("")}
                      to="/"
                      className={`mobile-nav__item bg-white py-[1.2rem] pl-[5.3rem] flex items-center gap-x-[1.6rem] text-[#676f7a] translate-x-[-20px] invisible opacity-0 transition-all duration-[2s] ${addActive} hover:bg-[#E5F1FF] hover:transition-none hover:duration-0`}
                    >
                      <span className="text-[1.6rem]">Privacy policy</span>
                    </Link>
                  </li>
                </ul>
              </nav>
            </div>
          </div>
          {/* Second Header */}
          <div className="header-second border-b-[1px] border-[#E0E0E0]">
            <div className="site-container">
              <div className="py-[1.2rem] flex justify-between items-center max-[876px]:hidden">
                <ul className="flex items-center gap-[2rem] text-[#676f7a]">
                  <li>
                    <Link
                      to={location.pathname === "/shop" ? "/" : "/shop"}
                      className="block cursor-pointer py-[1rem] px-[2rem] bg-[#0D6EFD] text-white rounded-[0.7rem] transition-all duration-300 hover:bg-[#127fff]"
                    >
                      {location.pathname === "/shop" ? "Home" : "Show Products"}
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="https://vcarduz.netlify.app/vcard/1"
                      target="_blank"
                      className="hover:underline hover:text-[#0D6EFD]"
                    >
                      Contact
                    </Link>
                  </li>
                  <li>
                    <Link className="hover:underline hover:text-[#0D6EFD]">
                      FAQs
                    </Link>
                  </li>
                </ul>
                <ul className="header-second__list select-none flex items-center gap-x-[3rem] text-[#555b63]">
                  {/* Currency */}
                  <li
                    onClick={handleChangeCurrency}
                    className="header-second__item relative flex items-center cursor-pointer gap-[0.5rem]"
                  >
                    <span className="text-[#118C4F]">
                      <FaMoneyBill />
                    </span>
                    <span className="font-semibold">{currency}</span>
                    <MdOutlineKeyboardArrowDown />
                    <ul
                      className={`absolute w-[12rem] py-[1rem] rounded-[1rem] shadow-[10px_6px_37px_-1px_rgba(0,0,0,0.04)] bg-white top-[3.5rem] border border-[#e0e0e098] right-0 flex flex-col justify-center opacity-0 invisible ${openCurrency}`}
                    >
                      <li
                        onClick={() => setCurrency("USD")}
                        className="flex items-center justify-center gap-[1.2rem] py-[0.5rem] hover:bg-gray-200"
                      >
                        <img src="/images/svg/usa-flag.svg" alt="" width={25} />
                        <span className="font-semibold text-[1.6rem]">USD</span>
                      </li>
                      <li
                        onClick={() => setCurrency("UZS")}
                        className="flex items-center justify-center gap-[1.2rem] py-[0.5rem] hover:bg-gray-200"
                      >
                        <img src="/images/svg/uzb-flag.svg" alt="" width={25} />
                        <span className="font-semibold text-[1.6rem]">UZS</span>
                      </li>
                    </ul>
                  </li>

                  {/* Language */}
                  <li
                    onClick={handleChangeLang}
                    className="header-second__item relative flex items-center cursor-pointer gap-[0.5rem]"
                  >
                    <span className="text-[#0d6efd]">
                      <FaLanguage />
                    </span>
                    <span className="font-semibold">{language}</span>
                    <MdOutlineKeyboardArrowDown />

                    <ul
                      className={`absolute w-[12rem] py-[1rem] rounded-[1rem] shadow-[10px_6px_37px_-1px_rgba(0,0,0,0.04)] bg-white top-[3.5rem] border border-[#e0e0e098] right-0 flex flex-col justify-center opacity-0 invisible ${openLanguage}`}
                    >
                      <li
                        onClick={() => setLanguage("EN")}
                        className="flex items-center justify-center gap-[1.2rem] py-[0.5rem] hover:bg-gray-200"
                      >
                        <img src="/images/svg/usa-flag.svg" alt="" width={25} />
                        <span className="font-semibold text-[1.6rem]">EN</span>
                      </li>
                      <li
                        onClick={() => setLanguage("RU")}
                        className="flex items-center justify-center gap-[1.2rem] py-[0.5rem] hover:bg-gray-200"
                      >
                        <img src="/images/svg/ru-flag.svg" alt="" width={25} />
                        <span className="font-semibold text-[1.6rem]">RU</span>
                      </li>
                      <li
                        onClick={() => setLanguage("UZ")}
                        className="flex items-center justify-center gap-[1.2rem] py-[0.5rem] hover:bg-gray-200"
                      >
                        <img src="/images/svg/uzb-flag.svg" alt="" width={25} />
                        <span className="font-semibold text-[1.6rem]">UZ</span>
                      </li>
                    </ul>
                  </li>
                </ul>
              </div>
              {/* Second Header Search */}
              <form className="hidden max-[876px]:block mb-[1.5rem]">
                <input
                  type="search"
                  placeholder="Search"
                  className="hidden w-full max-[876px]:flex pt-[1.1rem] pb-[1rem] px-[1rem] rounded-[0.7rem] outline-none border-[1px] border-[#DEE2E7] bg-[#F7FAFC] text-[1.6rem] placeholder:text-[#8B96A5]"
                />
              </form>
            </div>
          </div>

          {/* Overlay */}
          <div
            onClick={handleAddActive}
            className={`overlay absolute top-0 left-0 bottom-0 bg-black invisible opacity-50 w-full h-screen block z-[999] transition-all duration-300 ${addActive}`}
          ></div>
        </header>
      )}
    </>
  );
};

export default Header;
