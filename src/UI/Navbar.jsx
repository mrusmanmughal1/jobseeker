import { useEffect, useState } from "react";
import Logo from "./Logo";
import { Link, NavLink } from "react-router-dom";
import Minicart from "../Reuseables/Minicart";
import { GiHamburgerMenu } from "react-icons/gi";
import { RxCross2 } from "react-icons/rx";
import Mobilenav from "./Mobilenav";
import loginicon from "../assets/login-icon.webp";
import { BsCart } from "react-icons/bs";
import { useUserinfo } from "../Context/Userinfo";
import Sidebar from "./Sidebar";
import LoginForm from "./LoginForm";
import { FaUser } from "react-icons/fa";
import MiniJobsCart from "./MiniJobsCart";
const Navbar = () => {
  const [isSticky, setIsSticky] = useState(false);
  const [showLogin, setshow] = useState(false);
  const [showMblNav, setshowMblNav] = useState(false);
  const [profile, showprofile] = useState(false);
  const [cart, setcart] = useState(false);

  // sticky Navbar no scroll
  useEffect(() => {
    const handleScroll = () => {
      setIsSticky(window.scrollY > 60 && window.screen.width > 1000);
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const { auth, role } = useUserinfo();
  return (
    <section
      className={`${
        isSticky && "fixed top-0 bottom-0 shadow   w-full  z-10 bg-white h-20"
      }   shadow `}
    >
      <div className=" flex justify-between   w-11/12 mx-auto  items-center ">
        <div className="flex    w-full lg:w-auto  md:text-sm   relative justify-between items-center  gap-10">
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
                {role && (
                  <li>
                    <NavLink to="/candidate">Candidates</NavLink>
                  </li>
                )}
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
                {!auth ? (
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
            <ul className="flex gap-2    uppercase text-lg  items-center">
              <li>
                <NavLink to="/about-us">ABOUT US</NavLink>
              </li>
              <li>
                <NavLink to="/contact-us">Contact US</NavLink>
              </li>

              {auth && (
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
                      <p>{auth}</p>
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
                  </div>
                </>
              )}
              {!auth && (
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
      </div>

      {showMblNav && (
        <Minicart style={"w-full left-0   lg:hidden block shadow-lg p-6"}>
          <Mobilenav setMblNav={setshowMblNav} />
        </Minicart>
      )}

      {showLogin && !auth && (
        <Minicart style={" right-4"} data={isSticky} set={setshow}>
          <LoginForm
            set={setshow}
            paddingMain="lg:p-8"
            width="lg:w-full xl:w-full md:w-full"
            fontSize="text-xs"
          />
        </Minicart>
      )}
      {profile && (
        <Minicart
          style={"p-4 px-8  w-[75%] right-0  sm:w-[25%] sm:right-10"}
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
          <MiniJobsCart />
        </Minicart>
      )}
    </section>
  );
};

export default Navbar;
