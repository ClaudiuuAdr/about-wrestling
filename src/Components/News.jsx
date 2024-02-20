import React from "react";
import Raw from "../assets/raw.svg";
import Smackdown from "../assets/smack.svg";
import { rwnws, smnws } from "../date";
import { IoShareOutline } from "react-icons/io5";
import { FaPlay } from "react-icons/fa";
import { FaXTwitter, FaFacebookF } from "react-icons/fa6";

function Grind() {
  return (
    <>
      {rwnws.map((news) => (
        <article
          className="mt-[-100px] max-w-[1490px] md:flex md:px-10 md:pt-7 lgg:mx-auto"
          key={news.id}
        >
          <div className="relative bg-red-500 md:flex md:aspect-square md:h-[200px] md:w-[300px]">
            <img src={Raw} alt="raw" className=" mx-auto w-24 py-3 md:w-36" />
            <div className="mda absolute bottom-[-20px] h-[30px] w-[30px] bg-red-500 "></div>
            <div className="absolute bottom-[-60px] left-[55px] hidden gap-3 md:flex lgg:left-[85px]">
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
            <div className="md:line absolute bottom-[-75px] left-[52px] lgg:left-[82px]"></div>
          </div>

          <div className="bg-[#d7182a] lgg:relative lgg:flex">
            <div>
              <img
                src={news.img}
                alt="today"
                className="lgg:aspect-video lgg:h-[312px] lgg:w-[678px]"
              />
            </div>
            <div className="relative lgg:w-[450px]">
              <h2 className="mx-5 py-5 text-sm font-bold text-white underline underline-offset-8 lgg:mt-6 lgg:p-4 ">
                RAW RESULTS FOR {news.date}
              </h2>
              <IoShareOutline
                color="white"
                size={27}
                className="absolute right-6 top-4 md:hidden"
              />
              <div className="relative">
                <div className="relative">
                  <h3 className="mx-5 text-3xl font-bold text-white lgg:ml-9 lgg:mt-3">
                    {news.title}
                  </h3>
                  <p className="mx-5 pb-4 pt-2 text-white lgg:ml-9 lgg:mt-3">
                    Monday at {news.hour}
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
        </article>
      ))}
      {smnws.map((news) => (
        <article
          className="mb-[20px] mt-[20px] max-w-[1490px] md:flex md:px-10 md:pt-7 lgg:mx-auto"
          key={news.id}
        >
          <div className="relative bg-[#3b30fe] md:flex md:aspect-square md:h-[200px] lgg:w-[300px]">
            <img
              src={Smackdown}
              alt="raw"
              className=" mx-auto w-44 py-3 md:w-36"
            />
            <div className="mda absolute bottom-[-20px] h-[30px] w-[30px] bg-[#3b30fe]"></div>
            <div className="absolute bottom-[-60px] left-[55px] hidden gap-3 md:flex lgg:left-[85px]">
              <FaFacebookF
                size={22}
                className="cursor-pointer duration-300 ease-in-out hover:text-[#3b30fe]  "
              />
              <FaXTwitter
                size={22}
                className="cursor-pointer duration-300 ease-in-out hover:text-[#3b30fe] "
              />
              <IoShareOutline
                size={22}
                className="cursor-pointer duration-300 ease-in-out hover:text-[#3b30fe] "
              />
            </div>
            <div className="md:line absolute bottom-[-75px] left-[52px] lgg:left-[82px]"></div>
          </div>

          <div className="bg-[#3b30fe]  lgg:relative lgg:flex">
            <div>
              <img
                src={news.img}
                alt="today"
                className="lgg:aspect-video lgg:h-[312px] lgg:w-[678px]"
              />
            </div>
            <div className="relative lgg:w-[450px]">
              <h2 className="mx-5 py-5 text-sm font-bold text-white underline underline-offset-8 lgg:mt-6 lgg:p-4 ">
                SMACKDOWN RESULTS FOR {news.date}
              </h2>
              <IoShareOutline
                color="white"
                size={27}
                className="absolute right-6 top-4 md:hidden"
              />
              <div className="relative">
                <div className="relative">
                  <h3 className="mx-5 text-3xl font-bold text-white lgg:ml-9 lgg:mt-3">
                    {news.title}
                  </h3>
                  <p className="mx-5 pb-4 pt-2 text-white lgg:ml-9 lgg:mt-3">
                    Monday at {news.hour}
                  </p>
                </div>
                <div className=" flex justify-between gap-1 align-middle  ">
                  <button className="w-full cursor-pointer bg-[#3b00fe] py-4 font-bold text-white duration-300 ease-in-out hover:bg-[#3b70fe] ">
                    Preview
                  </button>
                  <button className="flex w-full cursor-pointer justify-center gap-3 bg-[#3b300fe] py-4 align-middle font-bold text-white duration-300 ease-in-out hover:bg-[#3b70fe]">
                    <span className="mt-1">
                      <FaPlay color="white" size={18} />
                    </span>
                    Watch Higlights
                  </button>
                </div>
              </div>
            </div>
          </div>
        </article>
      ))}
    </>
  );
}

export default Grind;
