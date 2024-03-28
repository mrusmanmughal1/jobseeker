import { GrLogin } from "react-icons/gr";
import { NavLink } from "react-router-dom";

const Mobilenav = () => {
  return (
    <div>
      <ul className="flex  w-full  flex-col gap-4   font-semibold uppercase m">
        <li className="  border-b pb-2">
          <NavLink to="/">HOME</NavLink>
        </li>
        <li className="  border-b pb-2">
          <NavLink to="/jobs">JOBS</NavLink>
        </li>
        <li className="  border-b pb-2">
          <NavLink to="/about-us">ABOUT US</NavLink>
        </li>
        <li className="  border-b pb-2">
          <NavLink to="/contact-us">Contact US</NavLink>
        </li>
        <li className="font-bold ">
          <NavLink
            to="/login"
            className="flex items-center gap-4 cursor-pointer"
          >
            LOGIN/REGISTRATION
            <GrLogin />
          </NavLink>
        </li>
      </ul>
    </div>
  );
};

export default Mobilenav;
