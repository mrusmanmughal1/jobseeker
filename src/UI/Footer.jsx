import { useRef } from "react";
import FooterBottom from "./FooterBottom";
import { CiMail } from "react-icons/ci";
import { FaInstagram } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { NavLink } from "react-router-dom";
import { useUserinfo } from "../Context/AuthContext";

const Footer = () => {
  const { role } = useUserinfo();

  return (
    <div className=" border-t">
      {role !== "admin" && <FooterMain />}
      <FooterBottom />
    </div>
  );
};

export const FooterMain = () => {
  return (
    <div className="flex md:flex-row flex-wrap    gap-12  md:gap-4    flex-col px-6   sm:px-24   py-20">
      <div className="flex flex-col flex-1 items-center  ">
        <p className="font-bold text-[#4e007a] pb-4">JOBS</p>
        <ul className="flex flex-col gap-2">
          <li>Browse Jobs</li>
          <li>Manage Profile</li>
        </ul>
      </div>
      <div className="flex flex-col  flex-1  items-center  ">
        <p className="font-bold text-[#4e007a] pb-4">OTHER</p>
        <ul className="flex flex-col gap-2 items-center">
          <li>
            <NavLink to="/">Home</NavLink>
          </li>
          <li>
            <NavLink to="/about-us">About Us </NavLink>
          </li>
          <li>
            <NavLink to="/contact-us">Contact Us</NavLink>
          </li>
          <li>
            <NavLink to="/privacy-policy">Privacy Policy </NavLink>
          </li>
        </ul>
      </div>
      <div className="flex flex-col  items-center flex-1 sm:text-center  ">
        <p className="font-bold text-[#4e007a]  pb-4">CONTACT US</p>
        <div className="flex justify-center">
          <ul className="flex flex-col gap-2 ">
            <li className="flex items-center gap-2 ">
              <span className="bg-blue-900 p-2 rounded-full">
                <CiMail className="  text-white " />{" "}
              </span>
              info@jobseeker.com
            </li>
            <li className="flex items-center  gap-2">
              <span className="bg-red-500 p-2 rounded-full">
                <FaInstagram className="text-white" />
              </span>
              Instagram
            </li>
            <li className="flex items-center gap-2">
              <span className="bg-blue-900 p-2 rounded-full">
                <FaFacebook className="text-white" />
              </span>{" "}
              Facebook
            </li>
            <li className="flex items-center gap-2">
              <span className="bg-blue-900 p-2 rounded-full">
                <FaTwitter className="text-white" />
              </span>
              Twitter
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Footer;
