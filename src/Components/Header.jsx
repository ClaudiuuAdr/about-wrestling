import { useState } from "react";
import { MdStadium } from "react-icons/md";
import { GiMuscleUp } from "react-icons/gi";
import { FaHome } from "react-icons/fa";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import { NavLink, Outlet } from "react-router-dom";

function Header() {
  const [navi, setNavi] = useState(true);
  const nav = [
    { title: "HOME", icon: <FaHome />, page: "homepage" },
    { title: "RAW", icon: <GiMuscleUp />, page: "raw" },
    { title: "SMACKDOWN", icon: <GiMuscleUp />, page: "smackdown" },
    { title: "CHAMPIONS", icon: <MdStadium />, page: "champions" },
  ];
  return (
    <>
      <section className="relative z-[10] w-full bg-[url('assets/ring.jpg')] bg-center opacity-90 md:h-full">
        <nav className="mx-5 items-center justify-between py-5 md:flex ">
          <h2 className=" cursor-pointer text-2xl font-bold text-white md:text-4xl">
            Wrestling
          </h2>
          <button
            className=" absolute right-6 top-[1.60rem] md:hidden "
            onClick={() => setNavi(!navi)}
          >
            {navi ? (
              <AiOutlineMenu color="white" size={24} />
            ) : (
              <AiOutlineClose color="white" size={24} />
            )}
          </button>

          <ul className="gap-5 md:flex">
            {nav.map((item, index) => (
              <li
                className=" group text-xl text-white transition-all duration-500 ease-in-out hover:text-yellow-500"
                key={index}
              >
                <NavLink
                  to={item.page}
                  className={`mt-6 flex max-w-[150px] items-center gap-3 bg-gradient-to-r from-red-500 to-blue-500 bg-[length:0%_2px] bg-left-bottom bg-no-repeat transition-all duration-500 ease-out group-hover:bg-[length:100%_2px] md:mt-0 md:justify-center ${
                    navi ? "ml-[-499px] mt-[-30px] md:ml-0 md:mt-0" : ""
                  } `}
                >
                  {" "}
                  <span className="md:hidden">{item.icon}</span>
                  {item.title}
                </NavLink>
              </li>
            ))}
          </ul>
        </nav>
      </section>
      <Outlet />
    </>
  );
}

export default Header;
