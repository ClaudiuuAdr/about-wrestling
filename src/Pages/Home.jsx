import { useEffect } from "react";
import Seth from "../assets/rolllins.jpg";
import Roman from "../assets/romann.jpg";
import Raw from "../assets/raw.svg";
import Smack from "../assets/smack.svg";
import { Link } from "react-router-dom";
import News from "../Components/News";

function Test() {
  useEffect(() => {
    document.getElementById("sth").setAttribute("preload", "true");
  }, []);
  return (
    <>
      <section className="grid justify-center bg-black md:grid-cols-2">
        <div className=" relative cursor-pointer contrast-125 transition-opacity duration-700 ease-in-out hover:opacity-95 md:opacity-60  ">
          <Link to={"/raw"}>
            <img src={Seth} alt="" className="h-full w-full " id="sth" />

            <img
              src={Raw}
              alt=""
              className="absolute left-1/2 top-1/2 h-auto w-1/2 -translate-x-1/2 -translate-y-1/2 scale-100 transform duration-300 ease-in-out hover:scale-110  "
            />
          </Link>
        </div>
        <div className="relative cursor-pointer contrast-125 transition-opacity duration-700 ease-in-out hover:opacity-95 md:opacity-60">
          <Link to={"/smackdown"}>
            <img src={Roman} alt="" className="h-full w-full " />
            <img
              src={Smack}
              alt=""
              className="absolute left-1/2 top-1/2 h-auto w-1/2 -translate-x-1/2 -translate-y-1/2 scale-100 transform duration-300 ease-in-out hover:scale-125"
            />
          </Link>
        </div>
      </section>
      <News />
    </>
  );
}

export default Test;
