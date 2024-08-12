import { NavLink } from "react-router-dom";
import { useUserinfo } from "../Context/AuthContext";
import { useLogout } from "../Services/Logout/useLogout";
import { useEmployerDetails } from "../Services/Employer/useEmployerDetails";

const Sidebar = ({ baseurl, gap = "gap-5", showprofile }) => {
  const { user_type } = useUserinfo();
  const { mutate: logout } = useLogout();
  const handleClick = () => {
    logout();
    showprofile(false);
  };
  const { data } = useEmployerDetails();
  const { license_number, specialisms, country, email } =
    data?.data?.data || [];
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
            <NavLink to={`${baseurl}jobs-basket`}>Jobs cart</NavLink>
          </li>
        )}
        {user_type === "employer" &&
          license_number &&
          specialisms &&
          country &&
          email && (
            <>
              <li className="border-b pb-5">
                <NavLink to={`${baseurl}new-post`}>New Post</NavLink>
              </li>
              <li className="border-b pb-5">
                <NavLink to={`${baseurl}scheduled-interviews`}>
                  Scheduled Interviews
                </NavLink>
              </li>
            </>
          )}

        <button className="border-b pb-5 text-start" onClick={handleClick}>
          Logout
        </button>
      </ul>
    </div>
  );
};

export default Sidebar;
