import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

import "./style.css";

// import required modules
import { Pagination, Autoplay } from "swiper/modules";
import { Link } from "react-router-dom";

const HeroCarousel = () => {
  return (
    <>
      <Swiper
        pagination={true}
        modules={[Pagination, Autoplay]}
        autoplay={{
          delay: 4000,
          disableOnInteraction: false,
        }}
        className="mySwiper"
      >
        <SwiperSlide
          style={{
            background: "url('./images/jpg/hero-img.jpg')",
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
          }}
          className="flex flex-col justify-start items-start pt-[5.6rem] pl-[4.4rem] text-start text-[#1C1C1C] rounded-[0.6rem] max-[565px]:p-[2.6rem]"
        >
          <h3 className="text-[2.8rem] max-[565px]:text-[1.8rem]">
            Latest trending
          </h3>
          <h2 className="text-[3.2rem] font-bold mb-[1.7rem] max-[565px]:text-[1.8rem] max-[565px]:font-semibold">
            Electronic items
          </h2>
          <Link className="block py-[1rem] px-[1.6rem] bg-white shadow-[0px_1px_2px_0px_rgba(56,56,56,0.08)] rounded-[0.6rem] text-[1.6rem] font-medium max-[565px]:text-[#0D6EFD] max-[565px]:text-[1.3rem]">
            Learn more
          </Link>
        </SwiperSlide>
        <SwiperSlide
          style={{
            background: "url('./images/jpg/hero-img.jpg')",
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
          }}
          className="flex flex-col justify-start items-start pt-[5.6rem] pl-[4.4rem] text-start text-[#1C1C1C] rounded-[0.6rem] max-[565px]:p-[2.6rem]"
        >
          <h3 className="text-[2.8rem] max-[565px]:text-[1.8rem]">
            Latest trending
          </h3>
          <h2 className="text-[3.2rem] font-bold mb-[1.7rem] max-[565px]:text-[1.8rem] max-[565px]:font-semibold">
            Electronic items
          </h2>
          <Link className="block py-[1rem] px-[1.6rem] bg-white shadow-[0px_1px_2px_0px_rgba(56,56,56,0.08)] rounded-[0.6rem] text-[1.6rem] font-medium max-[565px]:text-[#0D6EFD] max-[565px]:text-[1.3rem]">
            Learn more
          </Link>
        </SwiperSlide>
        <SwiperSlide
          style={{
            background: "url('./images/jpg/hero-img.jpg')",
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
          }}
          className="flex flex-col justify-start items-start pt-[5.6rem] pl-[4.4rem] text-start text-[#1C1C1C] rounded-[0.6rem] max-[565px]:p-[2.6rem]"
        >
          <h3 className="text-[2.8rem] max-[565px]:text-[1.8rem]">
            Latest trending
          </h3>
          <h2 className="text-[3.2rem] font-bold mb-[1.7rem] max-[565px]:text-[1.8rem] max-[565px]:font-semibold">
            Electronic items
          </h2>
          <Link className="block py-[1rem] px-[1.6rem] bg-white shadow-[0px_1px_2px_0px_rgba(56,56,56,0.08)] rounded-[0.6rem] text-[1.6rem] font-medium max-[565px]:text-[#0D6EFD] max-[565px]:text-[1.3rem]">
            Learn more
          </Link>
        </SwiperSlide>
      </Swiper>
    </>
  );
};

export default HeroCarousel;
