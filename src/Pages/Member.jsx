import { useParams } from "react-router-dom";
import { useEffect } from "react";
import Raw from "../assets/raw.svg";
import { IoShareOutline } from "react-icons/io5";
import { info } from "../date";

function Memeber() {
  const { superstar } = useParams();

  useEffect(() => {
    document.title = `${superstar}`;
  });
  return (
    <section>
      <div>
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
                  className="h-[full] object-contain xxs:scale-100 md:h-[450px] md:scale-100"
                />
              </div>
              <div>
                <button className="absolute w-full bg-[#EC1927] py-3 text-lg font-semibold text-white duration-300 ease-in-out hover:bg-[#EC1900]">
                  Superstar Stats
                </button>
              </div>
            </div>
          ))}
      </div>
    </section>
  );
}

export default Memeber;
