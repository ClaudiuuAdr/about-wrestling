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
            <div key={wrestler.id}>
              <div
                style={{ "--image-url": `url(${wrestler.backgound})` }}
                className="top-30 absolute left-0 block h-auto min-h-full w-full bg-[image:var(--image-url)] opacity-10 "
              ></div>
              <div className="relative flex flex-col px-5 py-3">
                <div className="order-2">
                  <img src={Raw} alt="Raw logo" className="mt-4 w-[130px]" />
                </div>
                <div className="order-1 flex items-center justify-between   border-b-[1px] border-black pb-2">
                  <p className=" text-5xl font-bold">{wrestler.name}</p>
                  <IoShareOutline className="text-3xl" />
                </div>
              </div>
            </div>
          ))}
      </div>
    </section>
  );
}

export default Memeber;
