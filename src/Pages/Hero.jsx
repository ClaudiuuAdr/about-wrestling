import { useEffect } from "react";
import Video from "../assets/video.mp4";
import News from "../Components/News";

function Hero() {
  useEffect(() => {
    document.title = "Wrestling";
  });
  return (
    <>
      <section className="">
        <div className=" mnm">
          <p className="text-3xl font-semibold md:text-5xl md:font-bold">
            Now, Then, Forever!
          </p>
          <video
            src={Video}
            autoPlay
            loop
            muted
            className=" absolute z-[-1] h-[100vh] w-screen object-cover object-center "
          ></video>
        </div>
      </section>
      <h3 className=" mb-[120px] mt-[-50px] flex flex-col items-center justify-center text-3xl font-bold md:text-5xl">
        <span className="border-b border-slate-500 pb-3">
          {" "}
          News about the shows{" "}
        </span>
        <span className=" px-10 text-sm">
          (attention if you click on news the links will take you to the raw
          page respectively smackdown)
        </span>
      </h3>
      <News />
    </>
  );
}

export default Hero;
