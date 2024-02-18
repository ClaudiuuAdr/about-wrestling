import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import Raw from "../assets/raw.svg";
import { IoShareOutline } from "react-icons/io5";
import { info } from "../date";
import { AiOutlineClose } from "react-icons/ai";
import { FaXTwitter, FaFacebookF } from "react-icons/fa6";

function Memeber() {
  const { superstar } = useParams();
  const [stats, setStats] = useState(true);

  const handleClick = () => {
    setStats(true);
  };

  useEffect(() => {
    document.title = `${superstar}`;
  });

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <section className=" ins mx-auto mt-10 max-w-[1750px]">
      <div className="">
        {info
          .filter((wrestler) => wrestler.name === superstar)
          .map((wrestler) => (
            <div key={wrestler.id} className="relative">
              <div
                style={{ "--image-url": `url(${wrestler.backgound})` }}
                className="top-30 absolute left-0 block h-auto min-h-full w-full  bg-[image:var(--image-url)] bg-cover bg-no-repeat opacity-[0.12]"
              ></div>
              <div className="relative flex flex-col px-5 py-3">
                <div
                  className={`order-2 duration-700 ease-in-out md:right-28 md:order-1  md:ml-[15rem] md:flex md:justify-center lgg:ml-[14rem] ${stats ? "" : "lgg:ml-[-300px]"}`}
                >
                  <img
                    src={Raw}
                    alt="Raw logo"
                    className="mb-7 mt-4 w-[130px] md:w-[200px]"
                  />
                </div>
                <div
                  className={`${stats ? "" : "lgg:ml-[-300px]"} order-1 flex items-center justify-between border-b-[1px] border-black pb-2 duration-700 ease-in-out md:ml-[15rem] md:flex md:flex-col md:justify-center md:gap-3 md:border-none  md:py-3 lgg:ml-[14rem] `}
                >
                  <p className=" z-[100] font-bold xxs:text-3xl md:text-4xl">
                    {wrestler.name}
                  </p>
                  <IoShareOutline className="text-2xl md:hidden md:text-3xl" />
                </div>
              </div>
              <div
                className={`gap-5 duration-700 ease-in-out xxs:hidden md:ml-[14rem] md:mt-3 md:flex md:justify-center ${stats ? "" : "lgg:ml-[-300px]"}`}
              >
                <FaFacebookF size={25} className="z-[100] cursor-pointer" />
                <FaXTwitter size={25} className="z-[100] cursor-pointer" />
                <IoShareOutline size={25} className="z-[100] cursor-pointer" />
              </div>
              <div className="relative xxs:flex xxs:justify-center md:block">
                <img
                  src={wrestler.img}
                  alt={wrestler.name}
                  className={`h-[full] object-contain duration-700 ease-in-out xxs:scale-100 md:ml-[-200px] md:mt-[-200px] md:w-[860px] lgg:ml-0 ${stats ? "" : "lgg:ml-[-300px]"}`}
                />
              </div>
              <div onClick={() => setStats(!stats)} className="relative">
                {stats ? (
                  <button className="absolute w-full bg-[#EC1927] py-3 text-lg font-semibold text-white duration-300 ease-in-out hover:bg-[#EC1900] md:right-[-100px] md:top-[-400px] md:w-[250px] md:rotate-90">
                    <p> Superstar Stats</p>
                  </button>
                ) : (
                  ""
                )}
              </div>
              <div
                className={`group absolute right-0 z-[200] w-[700px] bg-[#232828] text-xl text-white transition-all duration-500 ease-in-out xxs:top-[-40px] xxs:w-full lgg:w-[80%] ${stats ? " invisible absolute indent-[200px] opacity-0 duration-700" : ""}`}
              >
                <div className="py-7">
                  <div className="flex flex-col justify-center px-3">
                    <div className="flex items-center justify-between">
                      <h2>Superstar Stats</h2>
                      <AiOutlineClose
                        onClick={() => handleClick()}
                        color="white"
                        size={25}
                        className=" cursor-pointer"
                      />
                    </div>
                    <div className=" border-b-[1px] border-white pb-5">
                      <h3 className="py-6 text-[3rem] font-bold">
                        {wrestler.name}
                      </h3>
                      <p className="flex items-center gap-4">
                        Follow <FaXTwitter />
                      </p>
                    </div>
                  </div>
                  <div className="px-3 py-7">
                    <h2 className="mb-3">Height</h2>
                    <h3 className="border-b-[1px] border-white pb-10 text-[2.7rem] font-bold">
                      {wrestler.height}
                    </h3>
                  </div>
                  <div className="px-3">
                    <h2>Hometowon</h2>
                    <h3 className=" border-b-[1px] border-white py-2 pb-10 text-[1.7rem] font-bold">
                      {wrestler.birth}
                    </h3>
                  </div>
                  <div className="px-3 py-7">
                    <h2>Signature Move</h2>
                    <h3 className=" border-b-[1px] border-white py-2 pb-10 text-[1.7rem] font-bold">
                      {wrestler.move}
                    </h3>
                  </div>
                  <div className="px-3">
                    <h2>Career Highlights</h2>
                    <h3 className="border-b-[1px] border-white py-2 pb-10 text-[1.5rem] font-bold">
                      {wrestler.carrer}
                    </h3>
                  </div>
                </div>
              </div>
            </div>
          ))}
      </div>
    </section>
  );
}

export default Memeber;
