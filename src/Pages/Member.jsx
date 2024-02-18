import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import Raw from "../assets/raw.svg";
import { IoShareOutline } from "react-icons/io5";
import { info } from "../date";
import { AiOutlineClose } from "react-icons/ai";
import { FaXTwitter } from "react-icons/fa6";

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
    <section className="mx-auto max-w-[1500px]">
      <div className="">
        {info
          .filter((wrestler) => wrestler.name === superstar)
          .map((wrestler) => (
            <div key={wrestler.id} className="relative">
              <div
                style={{ "--image-url": `url(${wrestler.backgound})` }}
                className="top-30 absolute left-0 block h-auto min-h-full w-full bg-[image:var(--image-url)] bg-cover bg-no-repeat opacity-[0.12]"
              ></div>
              <div className="relative flex flex-col px-5 py-3">
                <div className="order-2">
                  <img
                    src={Raw}
                    alt="Raw logo"
                    className="mb-7 mt-4 w-[130px]"
                  />
                </div>
                <div className="order-1 flex items-center justify-between  border-b-[1px] border-black pb-2">
                  <p className=" font-bold xxs:text-3xl md:text-5xl">
                    {wrestler.name}
                  </p>
                  <IoShareOutline className="text-2xl md:text-3xl" />
                </div>
              </div>
              <div className="relative xxs:flex xxs:justify-center md:block">
                <img
                  src={wrestler.img}
                  alt={wrestler.name}
                  className={`h-[full] object-contain duration-700 ease-in-out xxs:scale-100 md:mt-[-200px] md:w-[860px] ${stats ? "" : "lgg:ml-[-250px]"}`}
                />
              </div>
              <div onClick={() => setStats(!stats)} className="relative">
                {stats ? (
                  <button className="absolute w-full bg-[#EC1927] py-3 text-lg font-semibold text-white duration-300 ease-in-out hover:bg-[#EC1900]">
                    Superstar Stats
                  </button>
                ) : (
                  ""
                )}
              </div>
              <div
                className={`group absolute right-0 bg-[#232828] text-xl text-white transition-all duration-500 ease-in-out xxs:top-[-2px] xxs:w-full lgg:w-[80%] ${stats ? "invisible mr-[10opx] opacity-0 duration-700" : ""}`}
              >
                <div className="py-7">
                  <div className="flex flex-col justify-center px-3">
                    <div className="flex items-center justify-between">
                      <h2>Superstar Stats</h2>
                      <AiOutlineClose
                        onClick={() => handleClick()}
                        color="white"
                        size={25}
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
