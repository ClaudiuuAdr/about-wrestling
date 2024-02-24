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
        <div>
          <div className="max-w-[600px]">
            <img src={Mania} alt="" />
          </div>
        </div>
      </section>
    </>
  );
}

export default Abelt;
