import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import { belts } from "../date";

// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import required modules
import { FreeMode, Pagination } from "swiper/modules";

function Belts() {
  return (
    <>
      <Swiper
        breakpoints={{
          350: {
            slidesPerView: 1,
            navigation: true,
            freeMode: true,
            slidesPerGroup: 1,
          },
          666: {
            slidesPerView: 2,
            navigation: true,
            freeMode: true,
            slidesPerGroup: 2,
          },
          930: {
            slidesPerView: 3,
            navigation: true,
            freeMode: false,
            slidesPerGroup: 3,
          },
        }}
        pagination={{
          clickable: true,
        }}
        modules={[FreeMode, Pagination]}
        className=" "
      >
        {belts.map((items) => (
          <SwiperSlide
            key={items.id}
            className="mt-[3rem] border-solid bg-[#3a4242] pb-[4rem] pt-[1rem]"
          >
            <div className="flex justify-center">
              <img
                src={items.img}
                alt=""
                className="cursor-pointer px-[2.5rem] duration-500 ease-in-out hover:scale-105"
              />
            </div>
            <p className="text-center text-2xl font-bold text-white xxs:text-xl md:h-[60px]">
              {items.title}
            </p>
            <p className="text-center text-2xl font-bold text-white xxs:text-xl">
              {items.date}
            </p>
          </SwiperSlide>
        ))}
      </Swiper>
      <div>test sa vad</div>
    </>
  );
}

export default Belts;
