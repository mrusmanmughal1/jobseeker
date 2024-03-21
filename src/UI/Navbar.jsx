import { useEffect, useRef, useState } from "react";
import Logo from "./Logo";
import { NavLink } from "react-router-dom";
import Minicart from "../Reuseables/Minicart";
import MiniLogin from "./MiniLogin";
import { GiHamburgerMenu } from "react-icons/gi";
import { RxCross2 } from "react-icons/rx";
import Mobilenav from "./Mobilenav";
import loginicon from "../assets/login-icon.webp";
import { BsCart } from "react-icons/bs";
const Navbar = () => {
  const [isSticky, setIsSticky] = useState(false);
  const [show, setshow] = useState(false);
  const [showMblNav, setshowMblNav] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      setIsSticky(window.scrollY > 60 && window.screen.width > 1000);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <section
      className={`${
        isSticky && "fixed top-0 bottom-0 shadow-sm  z-10 bg-white h-20"
      } md:px-16 flex justify-between   w-full  items-center   `}
    >
      <div className="flex  px-6 md:px-0  w-full md:w-auto   relative justify-between items-center  gap-10">
        <NavLink to="/">
          <Logo width={210} isSticky={isSticky} />
        </NavLink>
        <div className="md:block hidden">
          <nav>
            <ul className="flex gap-6 items-center   text-lg  uppercase m">
              <li className=" ">
                <NavLink to="/">HOME</NavLink>
              </li>
              <li>
                <NavLink to="/jobs">JOBS</NavLink>
              </li>
            </ul>
          </nav>
        </div>
        <div
          className="md:hidden text-2xl"
          onClick={() => setshowMblNav(!showMblNav)}
        >
          {showMblNav ? (
            <div className="bg-[#4e007a] text-white p-1 ">
              <GiHamburgerMenu />
            </div>
          ) : (
            <RxCross2 className="font-bold " />
          )}
        </div>
      </div>
      <div className="md:block hidden">
        <nav>
          {" "}
          <ul className="flex gap-2    uppercase text-lg  items-center">
            <li>
              <NavLink to="/about-us">ABOUT US</NavLink>
            </li>
            <li>
              <NavLink to="/contact-us">Contact US</NavLink>
            </li>
            <li>
              <NavLink to="">
                <div className="flex items-center  font-bold gap-2">
                  <div className=" rounded-full   ">
                    <img
                      className="rounded-full w-7 h-7"
                      src="https://jobsshopper.com/wp-content/uploads/2024/03/530903-150x150.jpg"
                      alt=""
                    />
                  </div>
                  <p>USMAN</p>
                  <img src={loginicon} width={35} />
                </div>
              </NavLink>
            </li>
            <li>
              <NavLink to="">
                <div className=" flex items-center font-bold">
                  <p>JOB CART</p>
                  <BsCart />
                </div>
              </NavLink>
            </li>
            <p
              className="font-semibold flex items-center  text-sm gap-4 cursor-pointer"
              onClick={() => setshow(!show)}
            >
              {/* <NavLink to="/login"></NavLink> */}
              LOGIN/REGISTRATION
              <img src={loginicon} width={35} />
            </p>
          </ul>
        </nav>
      </div>

      {showMblNav && (
        <Minicart style={"w-full left-0  md:hidden block shadow-lg p-6"}>
          <Mobilenav />
        </Minicart>
      )}

      {show && (
        <Minicart style={"p-8 right-16"} data={isSticky} set={setshow}>
          <MiniLogin />
        </Minicart>
      )}
    </section>
  );
};

export default Navbar;
