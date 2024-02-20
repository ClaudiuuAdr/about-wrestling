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
      <News />
    </>
  );
}

export default Hero;
