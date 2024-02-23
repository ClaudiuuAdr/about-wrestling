import React from "react";
import { useSwiper } from "swiper/react";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";

function SwiperButton() {
  const swiper = useSwiper();
  return (
    <div className="flex justify-around gap-[290px] bll:justify-between bll:gap-[178px] blt:gap-[135px]">
      <button onClick={() => swiper.slidePrev()}>
        <IoIosArrowBack size={33} color="white" className="bll:ml-[-34px]" />
      </button>
      <button onClick={() => swiper.slideNext()}>
        <IoIosArrowForward size={33} color="white" />
      </button>
    </div>
  );
}

export default SwiperButton;
