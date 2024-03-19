import { FaFacebookF } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa6";
import { FaLinkedinIn } from "react-icons/fa";
const Annoucmentbar = () => {
  return (
    <div className="md:px-16 md:py-4 px-4 bg-[#f5f5f5] py-3 flex justify-between">
      <div className="text-xs">info@jobsshopper.com</div>
      <div className="flex gap-8">
        <FaFacebookF />
        <FaTwitter />
        <FaLinkedinIn />
      </div>
    </div>
  );
};

export default Annoucmentbar;
