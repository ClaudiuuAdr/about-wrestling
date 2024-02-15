import React from "react";
import Raw from "../assets/raw.svg";
import Meci from "../assets/meci.jpg";
import { IoShareOutline } from "react-icons/io5";
import { FaPlay } from "react-icons/fa";
import { FaXTwitter, FaFacebookF } from "react-icons/fa6";

function Grind() {
  return (
    <div className="lgg:mx-auto max-w-[1490px] md:flex md:px-10 md:pt-7 ">
      <div className="relative bg-red-500 md:flex md:aspect-square md:h-[200px] md:w-[300px]">
        <img src={Raw} alt="raw" className=" mx-auto w-24 py-3 md:w-36" />
        <div className="mda absolute bottom-[-20px] h-[30px] w-[30px] bg-red-500 "></div>
        <div className="lgg:left-[85px] absolute bottom-[-60px] left-[55px] hidden gap-3 md:flex">
          <FaFacebookF
            size={22}
            className="cursor-pointer duration-300 ease-in-out hover:text-red-600 "
          />
          <FaXTwitter
            size={22}
            className="cursor-pointer duration-300 ease-in-out hover:text-red-600"
          />
          <IoShareOutline
            size={22}
            className="cursor-pointer duration-300 ease-in-out hover:text-red-600"
          />
        </div>
        <div className="md:line lgg:left-[82px] absolute bottom-[-75px] left-[52px]"></div>
      </div>

      <div className="lgg:flex lgg:relative bg-[#d7182a]">
        <div>
          <img
            src={Meci}
            alt="today"
            className="lgg:w-[678px] lgg:h-[312px] lgg:aspect-video"
          />
        </div>
        <div className="lgg:w-[450px] relative">
          <h2 className="lgg:p-4 lgg:mt-6 mx-5 py-5 text-sm font-bold text-white underline underline-offset-8 ">
            RAW RESULTS FOR 2/12
          </h2>
          <IoShareOutline
            color="white"
            size={27}
            className="absolute right-6 top-4 md:hidden"
          />
          <div className="relative">
            <div className="relative">
              <h3 className="lgg:ml-9 lgg:mt-3 mx-5 text-3xl font-bold text-white">
                The new day and Jey Uso join forces against Imperium
              </h3>
              <p className="lgg:ml-9 lgg:mt-3 mx-5 pb-4 pt-2 text-white">
                Monday at 8/7
              </p>
            </div>
            <div className="flex justify-between gap-1 align-middle ">
              <button className="w-full cursor-pointer bg-red-700 py-4 font-bold text-white duration-300 ease-in-out hover:bg-red-500 ">
                Preview
              </button>
              <button className="flex w-full cursor-pointer justify-center gap-3 bg-red-700 py-4 align-middle font-bold text-white duration-300 ease-in-out hover:bg-red-500">
                <span className="mt-1">
                  <FaPlay color="white" size={18} />
                </span>
                Watch Higlights
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Grind;
