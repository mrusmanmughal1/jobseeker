import { NavLink } from "react-router-dom";
import { useUserinfo } from "../Context/Userinfo";
import { useLogout } from "../Services/Logout/useLogout";

const Sidebar = ({ baseurl, gap = "gap-5", showprofile }) => {
  const { user_type } = useUserinfo();
  const { mutate: logout } = useLogout();
  const handleClick = () => {
    logout();
    showprofile(false);
  };

  return (
    <div className="   mx-auto  w-full  ">
      <ul className={`flex flex-col   ${gap}`}>
        <li className="border-b w- border-t pb-5 pt-5">
          <NavLink to={`${baseurl}myaccount`}> My Account</NavLink>
        </li>
        {user_type == "employer" && (
          <li className="border-b pb-5 ">
            <NavLink to={`${baseurl}applied`}>Job Posting History </NavLink>
          </li>
        )}
        {user_type == "candidate" && (
          <li className="border-b pb-5   ">
            <NavLink to={`${baseurl}candidate-applied-job`}>
              Job Applied{" "}
            </NavLink>
          </li>
        )}
        <li className="border-b pb-5">
          <NavLink to={`${baseurl}profile`}> Manage Profile </NavLink>
        </li>
        {user_type == "candidate" && (
          <li className="border-b pb-5">
            <NavLink to={`${baseurl}jobs-basket`}>Jobs Basket</NavLink>
          </li>
        )}
        {user_type == "employer" && (
          <li className="border-b pb-5">
            <NavLink to={`${baseurl}new-post`}>New Post</NavLink>
          </li>
        )}

        <button className="border-b pb-5 text-start" onClick={handleClick}>
          Logout
        </button>
      </ul>
    </div>
  );
};

export default Sidebar;
