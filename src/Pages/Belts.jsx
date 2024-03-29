import React, { useEffect } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import { belts } from "../date";

// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import required modules
import { FreeMode, Pagination, A11y, Navigation } from "swiper/modules";
import SwiperButton from "../Components/SwiperButton";
import Abelt from "../Components/Abelt";

function Belts() {
  useEffect(() => {
    document.title = "Belts";
  });
  return (
    <>
      <div className=" mx-auto max-w-[1500px] bg-[#3a4242]">
        <div className="border-b-[1px] border-white px-10 py-3 pb-3">
          <h1 className="font-bold text-white">WWE</h1>
          <h2 className="mt-[-7px] text-3xl text-white">CHAMPIONSHIP</h2>
        </div>
        <Swiper
          breakpoints={{
            350: {
              slidesPerView: 1,
              freeMode: true,
              slidesPerGroup: 1,
              keyboard: true,
              A11y,
            },
            600: {
              slidesPerView: 2,
              freeMode: true,
              slidesPerGroup: 2,
              keyboard: true,
              A11y,
            },
            930: {
              slidesPerView: 3,
              freeMode: true,
              slidesPerGroup: 3,
              keyboard: true,
              A11y,
            },
          }}
          pagination={{
            clickable: true,
            el: ".swiper-pagination",
          }}
          keyboard
          modules={[FreeMode, Pagination, A11y]}
          className="mySwiper"
        >
          {belts.map((items) => (
            <SwiperSlide
              key={items.id}
              className="mt-[3rem] border-solid pb-[4rem] pt-[1rem]"
            >
              <div className="flex justify-center">
                <img
                  src={items.img}
                  alt=""
                  className="cursor-pointer px-[2.3rem] duration-500 ease-in-out hover:scale-105"
                />
              </div>

              <p className="text-center text-2xl font-bold text-white xxs:text-xl">
                {items.title}
              </p>
              <p className="text-center text-2xl font-bold text-white xxs:text-xl">
                {items.date}
              </p>
            </SwiperSlide>
          ))}
          <div className=" relative mx-auto mb-10 w-[300px] rounded-2xl border-black  bg-black bll:mb-7 bll:block bll:max-w-[180px] bll:border blt:max-w-[135px]">
            <SwiperButton />
            <div className="swiper-pagination"></div>
          </div>
        </Swiper>
      </div>
      <Abelt />
    </>
  );
}

export default Belts;
