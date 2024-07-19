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
import { IoIosArrowDown } from "react-icons/io";
import { useGetBasket } from "../Services/Candidate/useGetBasket";
const Navbar = () => {
  const [isSticky, setIsSticky] = useState(false);
  const [showLogin, setshow] = useState(false);
  const [showMblNav, setshowMblNav] = useState(false);
  const [profile, showprofile] = useState(false);
  const [cart, setcart] = useState(false);
  const { auth, user_type, avatar  , username} = useUserinfo();
  const {data} = useGetBasket()
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

  const imgurl = `http://170.187.136.161:8010${avatar}`;
const profileimg = 'https://static.vecteezy.com/system/resources/thumbnails/005/545/335/small/user-sign-icon-person-symbol-human-avatar-isolated-on-white-backogrund-vector.jpg'
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
                {user_type == "employer" && (
                  <li>
                    <NavLink to="/candidates">Candidates</NavLink>
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
            <ul className="flex gap-4    uppercase text-lg  items-center">
              <li>
                <NavLink to="/about-us">ABOUT US</NavLink>
              </li>
              <li>
                <NavLink to="/contact-us">Contact US</NavLink>
              </li>

              {auth && (
                <>
                  <div onClick={() => showprofile(!profile)}>
                    <div className="flex items-center  cursor-pointer   font-semibold gap-2">
                      <div className=" rounded-full border  overflow-hidden w-12 h-12 ">
                        <img className="   h-12  object-cover " src={ profileimg || imgurl} alt="Image" />
                      </div>
                      <p>{username}</p>
                      <IoIosArrowDown className="text-3xl hover:text-btn-primary"/>
                    </div>
                  </div>
                  {user_type == "candidate" && (
                    <div
                      className="relative cursor-pointer hover:text-btn-primary"
                      onClick={() => setcart(!cart)}
                    >
                      <div className="  gap-4 flex items-center font-semibold">
                        <BsCart className="text-2xl" />
                      </div>

                      <div className="rounded-full border-2 absolute bottom-6 border-purple-950  p-1 px-2   text-sm left-0 ">
                        {data?.data?.count } 
                      </div>
                    </div>
                  )}
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
            showprofile={showprofile}
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
