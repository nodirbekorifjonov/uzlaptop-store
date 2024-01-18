import React, { useState, useEffect, useRef } from "react";

// react-router-dom
import { Link } from "react-router-dom";

// react-slick
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

// styles
import "./style.css";

// components
import HeroCarousel from "../../components/HeroCarousel";

// data
import productData from "../../assets/data/products.json";

// react-icons
import { FaPlus, FaTelegramPlane, FaInstagram } from "react-icons/fa";

const Home = () => {
  // Calculate Time
  const targetDate = new Date("January 30, 2024").getTime();

  const calculateTimeRemaining = () => {
    const now = new Date().getTime();
    const difference = targetDate - now;

    const days = Math.floor(difference / (1000 * 60 * 60 * 24));
    const hours = Math.floor(
      (difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
    );
    const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((difference % (1000 * 60)) / 1000);

    return { days, hours, minutes, seconds };
  };

  const [timeRemaining, setTimeRemaining] = useState(calculateTimeRemaining());

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeRemaining(calculateTimeRemaining());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  // slider autoplay
  const sliderRef = useRef(null);

  useEffect(() => {
    const interval = setInterval(() => {
      if (sliderRef.current) {
        sliderRef.current.slickNext();
      }
    }, 3000); // Adjust the autoplay speed here (in milliseconds)

    return () => clearInterval(interval);
  }, []);

  // slider
  const settings = {
    infinite: true,
    slidesToShow: 3, // Number of cards to show at a time
    slidesToScroll: 1,
    autoplay: true,
    responsive: [
      {
        breakpoint: 768, // Adjust this breakpoint as needed
        settings: {
          slidesToShow: 2.5,
        },
      },
      {
        breakpoint: 480, // Adjust this breakpoint as needed
        settings: {
          slidesToShow: 2.3,
        },
      },
      {
        breakpoint: 395, // Adjust this breakpoint as needed
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 335, // Adjust this breakpoint as needed
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  // responsive recomments
  const isResponsive = window.innerWidth < 979; // Adjust the breakpoint as needed
  const productsToDisplay = isResponsive ? 6 : 10;

  // subscribe buttons
  const [showSubscribe, setShowSubscribe] = useState("");

  return (
    <>
      {/* Hero Section */}
      <section className="hero py-[2rem]">
        <div className="site-container">
          <div className="hero__content w-full flex justify-between items-center gap-[2rem] p-[2rem] bg-white border-[1px] border-[#DEE2E7] rounded-[0.6rem] max-[863px]:p-0 max-[725px]:border-none max-[725px]:rounded-none">
            <div className="hero__carousel w-[70%] h-[38rem] max-[1149px]:h-[41rem] max-[863px]:w-full max-[610px]:hidden">
              <HeroCarousel />
            </div>
            <div className="hero-mobile__carousel hidden w-full h-[25rem] max-[610px]:block max-[415px]:h-[18rem]">
              <HeroCarousel />
            </div>
            <div className="hero__menu w-[30%] flex flex-col items-between gap-y-[1rem] max-[863px]:hidden">
              {/* Hero User Menu */}
              <div className="hero__user pt-[1.4rem] bg-[#E3F0FF] rounded-[0.6rem] px-[1rem] pb-[1.2rem]">
                <div className="hero__user-info flex items-center gap-[0.9rem] mb-[1.3rem]">
                  <img src="./images/svg/hero-avatar.svg" alt="" width={44} />
                  <span className="text-[1.6rem] text-[#1c1c1c]">
                    Hi, user <br /> let's get stated
                  </span>
                </div>
                <div className="hero__user-btns flex flex-col gap-y-[0.7rem]">
                  <Link className="w-full flex justify-center items-center px-[5.2rem] py-[0.7rem] bg-gradient-to-b from-[#127FFF] to-[#0067FF] text-white rounded-[0.6rem] self-start">
                    Join now
                  </Link>
                  <Link className="w-full flex justify-center items-center px-[6.1rem] py-[0.7rem] bg-white text-[#0D6EFD] rounded-[0.6rem] self-start">
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
      {/* Offers Section */}
      <section className="offers py-[1rem] text-[#1C1C1C] max-[725px]:bg-[#fff]">
        <div className="site-container">
          <div className="offers__content flex w-full border-[1px] bg-[#fff] rounded-[0.6rem] py-[0.3rem] h-[24rem] max-[975px]:h-auto max-[975px]:flex-col max-[725px]:border-none overflow-hidden">
            {/* Offers Hero */}
            <div className="offers__hero p-[2rem] w-[28.1rem] max-[975px]:w-full max-[975px]:flex max-[975px]:justify-between max-[975px]:items-center max-[425px]:flex-col max-[425px]:gap-[1rem] max-[425px]:text-center max-[425px]:justify-center">
              <div className="mb-[1.8rem] max-[975px]:m-0">
                <h5 className="offers__title text-[2rem] font-semibold leading-[1.4]">
                  Deals and offers
                </h5>
                <p className="offers__info text-[1.6rem] text-[#8B96A5]">
                  Hygiene equipments
                </p>
              </div>
              {/* Offers time */}
              <ul className="offers__time-list flex items-center gap-[0.6rem] max-[975px]:self-center">
                <li className="offers__time-item p-[0.8rem] bg-[#606060] rounded-[0.4rem] text-white text-[1.2rem] text-center flex flex-col w-[4.5rem] h-[5rem]">
                  <span className="text-[1.6rem] font-bold leading-none">
                    {timeRemaining.days}
                  </span>
                  Days
                </li>
                <li className="offers__time-item p-[0.8rem] bg-[#606060] rounded-[0.4rem] text-white text-[1.2rem] text-center flex flex-col w-[4.5rem] h-[5rem]">
                  <span className="text-[1.6rem] font-bold leading-none">
                    {timeRemaining.hours}
                  </span>
                  Hour
                </li>
                <li className="offers__time-item p-[0.8rem] bg-[#606060] rounded-[0.4rem] text-white text-[1.2rem] text-center flex flex-col w-[4.5rem] h-[5rem]">
                  <span className="text-[1.6rem] font-bold leading-none">
                    {timeRemaining.minutes}
                  </span>
                  Min
                </li>
                <li className="offers__time-item p-[0.8rem] bg-[#606060] rounded-[0.4rem] text-white text-[1.2rem] text-center flex flex-col w-[4.5rem] h-[5rem]">
                  <span className="text-[1.6rem] font-bold leading-none">
                    {timeRemaining.seconds}
                  </span>
                  Sec
                </li>
              </ul>
            </div>
            {/* Offers Cards */}
            <ul className="offers__cards-list grid grid-cols-4 w-[80%] max-[975px]:w-full max-[725px]:hidden">
              <li className="offers__cards-item">
                <Link
                  to=""
                  className="offers__cards-link flex flex-col items-center pt-[0.8rem] px-[2rem] pb-[1.7rem] border-l-[1px] border-[#E0E0E0] text-center max-[975px]:border-0 max-[725px]:border-b-[1px] max-[410px]:border-t-[1px]"
                >
                  <div className="offers__cards-img flex justify-center items-center w-[14rem] h-[14rem] mb-[1.1rem]">
                    <img
                      src="./images/png/laptop-img.png"
                      alt=""
                      className="w-[95%]"
                    />
                  </div>
                  <h4 className="text-[1.6rem] leading-[1.5] mb-[0.7rem]">
                    Laptops
                  </h4>
                  <span className="flex justify-center items-center py-[0.4rem] px-[1.3rem] text-[1.4rem] font-medium text-[#EB001B] bg-[#FFE3E3] rounded-[2.9rem]">
                    -15%
                  </span>
                </Link>
              </li>
              <li className="offers__cards-item">
                <Link
                  to=""
                  className="offers__cards-link flex flex-col items-center pt-[0.8rem] px-[2rem] pb-[1.7rem] border-l-[1px] border-[#E0E0E0] text-center h-full max-[725px]:border-b-[1px] max-[410px]:border-l-0"
                >
                  <div className="offers__cards-img flex justify-center items-center w-[14rem] h-[14rem] mb-[1.1rem]">
                    <img
                      src="./images/png/keyboard-img.png"
                      alt=""
                      className="w-full"
                    />
                  </div>
                  <h4 className="text-[1.6rem] leading-[1.5] mb-[0.7rem]">
                    Keyboards
                  </h4>
                  <span className="flex justify-center items-center py-[0.4rem] px-[1.3rem] text-[1.4rem] font-medium text-[#EB001B] bg-[#FFE3E3] rounded-[2.9rem]">
                    -25%
                  </span>
                </Link>
              </li>
              <li className="offers__cards-item">
                <Link
                  to=""
                  className="offers__cards-link flex flex-col items-center pt-[0.8rem] px-[2rem] pb-[1.7rem] border-l-[1px] border-[#E0E0E0] text-center h-full max-[725px]:border-0 max-[410px]:border-b-[1px]"
                >
                  <div className="offers__cards-img flex justify-center items-center w-[14rem] h-[14rem] mb-[1.1rem]">
                    <img
                      src="./images/png/mouse-img.png"
                      alt=""
                      className="w-[95%]"
                    />
                  </div>
                  <h4 className="text-[1.6rem] leading-[1.5] mb-[0.7rem]">
                    Mouses
                  </h4>
                  <span className="flex justify-center items-center py-[0.4rem] px-[1.3rem] text-[1.4rem] font-medium text-[#EB001B] bg-[#FFE3E3] rounded-[2.9rem]">
                    -25%
                  </span>
                </Link>
              </li>
              <li className="offers__cards-item">
                <Link
                  to=""
                  className="offers__cards-link flex flex-col items-center pt-[0.8rem] px-[2rem] pb-[1.7rem] border-l-[1px] border-[#E0E0E0] text-center h-full max-[410px]:border-0"
                >
                  <div className="offers__cards-img flex justify-center items-center w-[14rem] h-[14rem] mb-[1.1rem]">
                    <img
                      src="./images/png/headphones-img.png"
                      alt=""
                      className="w-[95%]"
                    />
                  </div>
                  <h4 className="text-[1.6rem] leading-[1.5] mb-[0.7rem]">
                    Headphones
                  </h4>
                  <span className="flex justify-center items-center py-[0.4rem] px-[1.3rem] text-[1.4rem] font-medium text-[#EB001B] bg-[#FFE3E3] rounded-[2.9rem]">
                    -25%
                  </span>
                </Link>
              </li>
            </ul>
            <Slider
              ref={sliderRef}
              {...settings}
              className="hidden border-y-[1px] max-[725px]:block"
            >
              <div className="select-none border-r-[1px]">
                <Link
                  to=""
                  className="offers__cards-link flex flex-col items-center pt-[0.8rem] px-[2rem] pb-[1.7rem] text-center"
                >
                  <div className="offers__cards-img flex justify-center items-center w-[14rem] h-[14rem] mb-[1.1rem]">
                    <img
                      src="./images/png/laptop-img.png"
                      alt=""
                      className="w-[95%]"
                    />
                  </div>
                  <h4 className="text-[1.6rem] leading-[1.5] mb-[0.7rem]">
                    Laptops
                  </h4>
                  <span className="flex justify-center items-center py-[0.4rem] px-[1.3rem] text-[1.4rem] font-medium text-[#EB001B] bg-[#FFE3E3] rounded-[2.9rem]">
                    -15%
                  </span>
                </Link>
              </div>
              <div className="select-none border-r-[1px]">
                <Link
                  to=""
                  className="offers__cards-link flex flex-col items-center pt-[0.8rem] px-[2rem] pb-[1.7rem] text-center"
                >
                  <div className="offers__cards-img flex justify-center items-center w-[14rem] h-[14rem] mb-[1.1rem]">
                    <img
                      src="./images/png/keyboard-img.png"
                      alt=""
                      className="w-full"
                    />
                  </div>
                  <h4 className="text-[1.6rem] leading-[1.5] mb-[0.7rem]">
                    Keyboards
                  </h4>
                  <span className="flex justify-center items-center py-[0.4rem] px-[1.3rem] text-[1.4rem] font-medium text-[#EB001B] bg-[#FFE3E3] rounded-[2.9rem]">
                    -25%
                  </span>
                </Link>
              </div>
              <div className="select-none border-r-[1px]">
                <Link
                  to=""
                  className="offers__cards-link flex flex-col items-center pt-[0.8rem] px-[2rem] pb-[1.7rem] text-center"
                >
                  <div className="offers__cards-img flex justify-center items-center w-[14rem] h-[14rem] mb-[1.1rem]">
                    <img
                      src="./images/png/mouse-img.png"
                      alt=""
                      className="w-[95%]"
                    />
                  </div>
                  <h4 className="text-[1.6rem] leading-[1.5] mb-[0.7rem]">
                    Mouses
                  </h4>
                  <span className="flex justify-center items-center py-[0.4rem] px-[1.3rem] text-[1.4rem] font-medium text-[#EB001B] bg-[#FFE3E3] rounded-[2.9rem]">
                    -25%
                  </span>
                </Link>
              </div>
              <div className="select-none border-r-[1px]">
                <Link
                  to=""
                  className="offers__cards-link flex flex-col items-center pt-[0.8rem] px-[2rem] pb-[1.7rem] text-center"
                >
                  <div className="offers__cards-img flex justify-center items-center w-[14rem] h-[14rem] mb-[1.1rem]">
                    <img
                      src="./images/png/headphones-img.png"
                      alt=""
                      className="w-[95%]"
                    />
                  </div>
                  <h4 className="text-[1.6rem] leading-[1.5] mb-[0.7rem]">
                    Headphones
                  </h4>
                  <span className="flex justify-center items-center py-[0.4rem] px-[1.3rem] text-[1.4rem] font-medium text-[#EB001B] bg-[#FFE3E3] rounded-[2.9rem]">
                    -25%
                  </span>
                </Link>
              </div>
            </Slider>
          </div>
        </div>
      </section>
      {/* Inqury Section */}
      <section className="inqury py-[1rem] overflow-hidden">
        <div className="site-container">
          <div className="inqury__content w-full flex justify-between rounded-[0.6rem] py-[4rem] pl-[4rem] pr-[3rem] gap-[2rem] max-[725px]:flex-col max-[725px]:gap-[1.7rem] max-[715px]:p-[3rem] max-[725px]:rounded-none">
            <div className="inqury__info w-[40rem] leading-0">
              <h3 className="inqury__title text-[3.2rem] font-semibold text-white mb-[1.3rem] max-[725px]:text-[2.5rem] max-[725px]:w-[70%] max-[445px]:text-[1.8rem] max-[445px]:w-[21.7rem]">
                An easy way to send requests to all suppliers
              </h3>
              <p className="text-[1.6rem] leading-[1.5] text-white max-[725px]:hidden">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
                eiusmod tempor incididunt.
              </p>
            </div>
            <Link
              to=""
              className="hidden py-[1rem] px-[1.6rem] bg-gradient-to-b from-[#127FFF] to-[#0067FF] text-white rounded-[0.6rem] cursor-pointer self-start max-[725px]:block"
            >
              Send inqury
            </Link>
            <div className="inqury__form w-[49.1rem] text-[#1c1c1c] pt-[2.2rem] pr-[3.1rem] pb-[2.5rem] pl-[2rem] bg-white shadow-[0px_1px_2px_rgba(56,56,56,0.25)] rounded-[0.6rem] max-[715px]:hidden">
              <h4 className="text-[2rem] font-semibold leading-[1.4] mb-[1.8rem]">
                Send quote to suppliers
              </h4>
              <form className="w-full flex flex-col gap-y-[2rem]">
                <input
                  type="text"
                  placeholder="What item you need?"
                  className="pt-[1.1rem] text-[1.6rem] px-[1rem] pb-[1rem] w-full border-[1px] bg-white border-[#DEE2E7] outline-none rounded-[0.6rem] placeholder:text-inherit"
                />
                <textarea
                  className="w-full h-[7.3rem] border-[1px] bg-white border-[#DEE2E7] outline-none rounded-[0.6rem] p-[1.1rem]"
                  placeholder="Type more details"
                ></textarea>
                <label>
                  <input
                    type="number"
                    placeholder="Quanty"
                    className="pt-[1.1rem] text-[1.6rem] px-[1rem] pb-[1rem] w-[50%] border-[1px] bg-white border-[#DEE2E7] outline-none rounded-[0.6rem] placeholder:text-inherit"
                  />
                </label>
                <button
                  type="submit"
                  className="py-[1rem] px-[1.6rem] bg-gradient-to-b from-[#127FFF] to-[#0067FF] text-white rounded-[0.6rem] cursor-pointer self-start"
                >
                  Send inquiry
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
      {/* Recommended Section */}
      <section className="recommended py-[1rem] text-[#1c1c1c]">
        <div className="site-container">
          <h3 className="recommended__title flex flex-col text-[2.4rem] font-semibold leading-[1.33] mb-[2.4rem] max-[400px]:text-[1.8rem] max-[400px]:mb-[1rem]">
            Recommended items
          </h3>
          <ul className="recommended__list w-full flex flex-wrap justify-evenly gap-[2rem] max-[478px]:gap-[0.8rem]">
            {productData.slice(0, productsToDisplay).map((product) => (
              <li
                key={product.productId}
                className="recommended__item flex justify-center items-center"
              >
                <Link className="recommended__link w-[22rem] h-[31rem] px-[1rem] pt-[0.9rem] pb-[0.8rem] block bg-white border-[1px] border-[#E0E0E0] rounded-[0.6rem] max-[478px]:w-[16.5rem] max-[478px]:h-[24rem]">
                  <div className="recommended__link-img flex justify-center items-center w-full h-[19.4rem] p-[1.2rem] mb-[1.4rem] max-[478px]:h-[14rem]">
                    <img
                      src={`./images/png/${product.productImg}`}
                      alt=""
                      className="w-full"
                    />
                  </div>
                  <div className="recommended__link-info px-[0.6rem]">
                    <h5 className="text-[1.6rem] font-medium leading-[1.37] mb-[0.4rem] max-[478px]:leading-[1.37] max-[478px]:mb-[0.18rem]">
                      {product.productCost}
                    </h5>
                    <p className="text-[1.6rem] leading-[1.5] text-[#8b96a5] max-[478px]:text-[1.3rem] max-[478px]:leading-none">
                      {product.productName}
                    </p>
                  </div>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </section>
      {/* Subscribe Section */}
      <section className="subscribe pt-[3.8rem] pb-[3.9rem] mt-[1rem] bg-[#EFF2F4] text-[#1C1C1C]">
        <div className="site-container flex flex-col items-center text-center">
          <h2 className="text-[2rem] font-semibold leading-[1.4]">
            Subscribe on our newsletter
          </h2>
          <p className="text-[1.6rem] text-[#606060] leading-[1.5] mb-[2.1rem]">
            Get daily news on upcoming offers from many suppliers all over the
            world
          </p>
          <div className="flex gap-[2rem]">
            <span
              className={`subscribe__links block text-[2rem] text-[#0d6efd] p-[1.2rem] bg-white rounded-full shadow-[4px_4px_8px_0px_rgba(34,60,80,0.08)] cursor-pointer translate-x-[2rem] opacity-0 transition-all duration-300 hover:translate-y-[-0.5rem] hover:translate-x-0 ${showSubscribe}`}
            >
              <FaTelegramPlane />
            </span>
            <span
              onClick={() =>
                showSubscribe === ""
                  ? setShowSubscribe("active")
                  : setShowSubscribe("")
              }
              className={`subscribe__links-btn block text-[2rem] text-[#0d6efd] p-[1.2rem] bg-white rounded-full shadow-[4px_4px_8px_0px_rgba(34,60,80,0.08)] cursor-pointer transition-all duration-300 ${showSubscribe}`}
            >
              <FaPlus />
            </span>
            <span
              className={`subscribe__links block text-[2rem] text-[#0d6efd] p-[1.2rem] bg-white rounded-full shadow-[4px_4px_8px_0px_rgba(34,60,80,0.08)] cursor-pointer translate-x-[-2rem] opacity-0 transition-all duration-300 hover:translate-y-[-0.5rem] hover:translate-x-0 ${showSubscribe}`}
            >
              <FaInstagram />
            </span>
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;
