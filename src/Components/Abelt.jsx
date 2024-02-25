import React from "react";
import Mania from "../assets/mania.webp";

function Abelt() {
  return (
    <>
      <section className="mx-auto my-10 max-w-[1500px]">
        <h2 className="mx-20 mb-10 border-b-[1px] border-black pb-3 text-center font-bold text-black bll:text-left bll:text-2xl md:text-4xl">
          <span className="text-slate-400">WRESTLEMANIA</span> the biggest show
          of the year
        </h2>
        <div className="relative flex flex-col">
          <div className="relative order-2 ">
            <img
              src={Mania}
              alt=""
              className="relative w-full px-7 blt:h-[330px] blt:object-cover blt:object-top blt:px-0 blt:opacity-15"
            />
          </div>
          <div className="order-1 blt:absolute">
            <p className=" mx-5 mb-6 border-x-[1px] border-black px-3 blt:mt-10 blt:px-10 blt:text-2xl">
              <span className="ml-6 ">After</span> Cody Rhodes made his return
              to WWE at WrestleMania 38 in April 2022, he declared he would
              finish his story by winning the WWE Championship, a title his
              father Dusty Rhodes never held. Also at WrestleMania 38, Roman
              Reigns became the Undisputed WWE Universal Champion by retaining
              the WWE Universal Championship and winning the WWE Championship.
              After Rhodes won the 2023 Royal Rumble match but failed to defeat
              Reigns for the undisputed title at WrestleMania 39, Rhodes again
              won the Royal Rumble match in 2024.
            </p>
          </div>
        </div>
        <div className="mx-20 border-b-[1px] border-black pb-4"></div>
      </section>
    </>
  );
}

export default Abelt;
