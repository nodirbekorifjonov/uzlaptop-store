import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/thumbs";

import "./style.css";

// import required modules
import { FreeMode, Navigation, Thumbs } from "swiper/modules";

const DetailsCarousel = ({ productImages }) => {
  const [thumbsSwiper, setThumbsSwiper] = useState(null);

  return (
    <>
      <Swiper
        style={{
          "--swiper-navigation-color": "#fff",
          "--swiper-pagination-color": "#fff",
        }}
        loop={true}
        spaceBetween={10}
        navigation={false}
        thumbs={{ swiper: thumbsSwiper }}
        modules={[FreeMode, Navigation, Thumbs]}
        className="mySwiper2 details-swiper mb-[2rem] max-[450px]:m-0"
      >
        {productImages &&
          productImages.length > 0 &&
          productImages.map((img, index) => {
            return (
              <SwiperSlide
                key={index}
                className="details-carousel p-[1.6rem] border-[1px] border-[#DEE2E7] bg-white rounded-[0.6rem] w-full h-[38rem] max-[450px]:p-0 max-[450px]:border-none"
              >
                <img src={img} className="max-[450px]:w-full" />
              </SwiperSlide>
            );
          })}
      </Swiper>
      <Swiper
        onSwiper={setThumbsSwiper}
        loop={true}
        spaceBetween={9}
        slidesPerView={6}
        freeMode={true}
        watchSlidesProgress={true}
        modules={[FreeMode, Navigation, Thumbs]}
        className="mySwiper details-swiper max-[450px]:hidden"
      >
        {/*  */}
        {productImages &&
          productImages.length > 0 &&
          productImages.map((img, index) => {
            return (
              <SwiperSlide
                key={index}
                className="border-[1px] border-[#DEE2E7] p-[0.4rem] rounded-[0.4rem] w-[5.6rem] h-[5.6rem] cursor-pointer"
              >
                <img src={img} />
              </SwiperSlide>
            );
          })}
      </Swiper>
    </>
  );
};

export default DetailsCarousel;
