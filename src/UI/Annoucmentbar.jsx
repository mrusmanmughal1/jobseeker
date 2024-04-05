import { FaFacebookF } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa6";
import { FaLinkedinIn } from "react-icons/fa";
const Annoucmentbar = () => {
  return (
    <div className="bg-[#f5f5f5]">
      <div className="w-11/12 mx-auto md:py-4    py-3 flex justify-between">
        <div className="text-xs">info@jobsshopper.com</div>
        <div className="flex md:gap-8 gap-4 ">
          <FaFacebookF />
          <FaTwitter />
          <FaLinkedinIn />
        </div>
      </div>
    </div>
  );
};

export default Annoucmentbar;
