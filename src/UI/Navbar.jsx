import { useEffect, useState } from "react";
import Logo from "./Logo";
import { Link, NavLink } from "react-router-dom";
import Minicart from "../Reuseables/Minicart";
import MiniLogin from "./MiniLogin";
import { GiHamburgerMenu } from "react-icons/gi";
import { RxCross2 } from "react-icons/rx";
import Mobilenav from "./Mobilenav";
import loginicon from "../assets/login-icon.webp";
import { BsCart } from "react-icons/bs";
import { useUserinfo } from "../Context/Userinfo";
import Sidebar from "./Sidebar";
import JobsBasket from "../Feature/Accounts/JobsBasket";
import LoginForm from "./LoginForm";
import { FaUser } from "react-icons/fa";
const Navbar = () => {
  const [isSticky, setIsSticky] = useState(false);
  const [showLogin, setshow] = useState(false);
  const [showMblNav, setshowMblNav] = useState(false);
  const [profile, showprofile] = useState(false);
  const [cart, setcart] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      setIsSticky(window.scrollY > 60 && window.screen.width > 1000);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const { user } = useUserinfo();

  return (
    <section
      className={`${
        isSticky && "fixed top-0 bottom-0 shadow-sm  z-10 bg-white h-20"
      } md:px-16 flex justify-between   w-full  items-center shadow  `}
    >
      <div className="flex  px-4 md:px-0  w-full lg:w-auto   relative justify-between items-center  gap-10">
        <NavLink to="/">
          <Logo width={210} isSticky={isSticky} />
        </NavLink>
        <div className="lg:block hidden">
          <nav>
            <ul className="flex gap-4 items-center   text-lg  uppercase m">
              <li className=" ">
                <NavLink to="/">HOME</NavLink>
              </li>
              <li>
                <NavLink to="/jobs">JOBS</NavLink>
              </li>
              <li>
                <NavLink to="/candidate">Candidates</NavLink>
              </li>
            </ul>
          </nav>
        </div>
        <div className="lg:hidden text-2xl">
          {showMblNav ? (
            <RxCross2
              className="bg-[#4e007a] text-white p-1 "
              onClick={() => setshowMblNav(!showMblNav)}
            />
          ) : (
            <div className="flex gap-2">
              <GiHamburgerMenu
                className="font-bold bg-[#4e007a] text-white p-1"
                onClick={() => setshowMblNav(!showMblNav)}
              />
              {!user ? (
                <Link to="/login">
                  <FaUser className="font-bold bg-[#4e007a] text-white p-1" />
                </Link>
              ) : (
                <FaUser
                  className="font-bold bg-[#4e007a] text-white p-1"
                  onClick={() => showprofile(!profile)}
                />
              )}
            </div>
          )}
        </div>
      </div>
      <div className="lg:block hidden">
        <nav>
          {" "}
          <ul className="flex gap-2    uppercase text-lg  items-center">
            <li>
              <NavLink to="/about-us">ABOUT US</NavLink>
            </li>
            <li>
              <NavLink to="/contact-us">Contact US</NavLink>
            </li>
            {user && (
              <>
                <div onClick={() => showprofile(!profile)}>
                  <div className="flex items-center  cursor-pointer  mx-4 font-semibold gap-2">
                    <div className=" rounded-full">
                      <img
                        className="rounded-full w-7 h-7"
                        src="https://jobsshopper.com/wp-content/uploads/2024/03/530903-150x150.jpg"
                        alt=""
                      />
                    </div>
                    <p>USMAN</p>
                    <img src={loginicon} width={35} />
                  </div>
                </div>
                <div
                  className="relative cursor-pointer"
                  onClick={() => setcart(!cart)}
                >
                  <div className="  gap-4 flex items-center font-semibold">
                    <p>JOB CART</p>
                    <BsCart className="text-2xl" />
                  </div>

                  <div className="rounded-full border-2 absolute bottom-6 border-purple-950 px-1   text-sm left-28 ">
                    {9}
                  </div>
                </div>{" "}
              </>
            )}
            {!user && (
              <p
                className="font-semibold flex items-center  text-sm gap-4 cursor-pointer"
                onClick={() => setshow(true)}
              >
                {/* <NavLink to="/login"></NavLink> */}
                LOGIN/REGISTRATION
                <img src={loginicon} width={35} />
              </p>
            )}
          </ul>
        </nav>
      </div>

      {showMblNav && (
        <Minicart style={"w-full left-0  lg:hidden block shadow-lg p-6"}>
          <Mobilenav setMblNav={setshowMblNav} />
        </Minicart>
      )}

      {showLogin && !user && (
        <Minicart style={"p-8 right-16"} data={isSticky} set={setshow}>
          <MiniLogin set={setshow} />

          {/* <LoginForm/> */}
        </Minicart>
      )}
      {profile && (
        <Minicart
          style={"p-8  w-[75%] right-0  sm:w-[25%] sm:right-10"}
          data={isSticky}
          set={showprofile}
        >
          <Sidebar
            style={"text-sm"}
            baseurl="/dashboard/"
            set={showprofile}
            gap="gap-3 text-sm"
          />
        </Minicart>
      )}
      {cart && (
        <Minicart
          style={"p-8  w-[25%] overflow-auto right-10"}
          data={isSticky}
          set={setcart}
        >
          <JobsBasket />
        </Minicart>
      )}
    </section>
  );
};

export default Navbar;
