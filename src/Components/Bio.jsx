import React from "react";
import { info } from "../date";
import { useParams } from "react-router-dom";

function Bio() {
  const { superstar } = useParams();
  return (
    <section>
      <div className="mx-3 mt-[60px] lgg:px-20">
        {info
          .filter((wrestler) => wrestler.name === superstar)
          .map((wrestler) => (
            <div key={wrestler.id} className="relative">
              <h3 className=" text-3xl text-slate-400">
                {wrestler.name}:{" "}
                <span className="font-bold text-black">Bio</span>
              </h3>
              <p className="my-7 border-slate-400 pr-10 text-xl text-slate-700 lgg:max-w-[800px] lgg:border-r-2 lgg:text-justify">
                {wrestler.details}
              </p>
            </div>
          ))}
      </div>
    </section>
  );
}

export default Bio;
