import { NavLink } from "react-router-dom";
import { useUserinfo } from "../Context/Userinfo";

const Sidebar = ({ baseurl, set, setSidebarStatus }) => {
  const { dispatch } = useUserinfo();
  const handleClick = () => {
    set(false);
    dispatch({ type: "logout" });
  };
  return (
    <div className="   mx-auto  w-full  ">
      <ul className="flex flex-col gap-8 ">
        <li className="border-b w- border-t py-5" onClick={() => set(false)}>
          <NavLink to={`${baseurl}myaccount`}> My Account</NavLink>
        </li>
        <li className="border-b pb-5 " onClick={() => set(false)}>
          <NavLink to={`${baseurl}applied`}>Application History </NavLink>
        </li>
        <li className="border-b pb-5" onClick={() => set(false)}>
          <NavLink to={`${baseurl}profile`}> Manage Profile </NavLink>
        </li>
        <li className="border-b pb-5" onClick={() => set(false)}>
          <NavLink to={`${baseurl}jobs-basket`}>Job Baskry</NavLink>
        </li>
        <li className="border-b pb-5" onClick={() => set(false)}>
          <NavLink to={`${baseurl}new-post`}>New Post</NavLink>
        </li>

        <button className="border-b pb-5 text-start" onClick={handleClick}>
          Logout
        </button>
      </ul>
    </div>
  );
};

export default Sidebar;
