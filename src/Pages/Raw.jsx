import { useEffect } from "react";
import Star from "../assets/sperr.jpg";
import { info } from "../date";
import { Link } from "react-router-dom";

function Raww() {
  useEffect(() => {
    document.title = "Raw";
  });

  useEffect(() => {
    document.getElementById("imag").setAttribute("preload", "true");
  }, []);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const box = "bg-black cursor-pointer relative aspect-square";
  return (
    <>
      <section className="relative bg-white">
        <div className="relative py-8">
          <img src={Star} alt="" className="w-[100%] " />
        </div>
        <div>
          <h2 className=" mb-10 text-center text-3xl font-bold text-black">
            Current raw roster
          </h2>
          <div className="mx-auto grid max-w-[1500px] grid-cols-2 grid-rows-5 gap-5 px-3 pb-10 md:grid-cols-4 md:px-[3rem]">
            {info.map((info) => (
              <div
                key={info.id}
                className={`${box} ${
                  info.id === 3 || info.id === 10
                    ? "row-span-2 hidden h-full md:col-span-2 md:block  "
                    : ""
                } ${
                  info.id === 3 || info.id === 10 ? " pointer-events-none" : ""
                }`}
              >
                <Link to={`/raw/${info.name}`}>
                  <img
                    src={info.img}
                    className=" relative h-full w-full object-cover object-top "
                    id="imag"
                  />
                  <p className="absolute bottom-3 left-3 font-semibold text-white sm:font-medium md:text-base  lg:text-2xl">
                    {info.name}
                  </p>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

export default Raww;
