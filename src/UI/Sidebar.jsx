import { NavLink } from "react-router-dom";

const Sidebar = () => {
  return (
    <div className="   mx-auto  w-full  ">
      <ul className="flex flex-col gap-8 ">
        <li className="border-b w- border-t py-5">
          <NavLink to="myaccount"> My Account</NavLink>
        </li>
        <li className="border-b pb-5 ">
          <NavLink to="applied">Application History </NavLink>
        </li>
        <li className="border-b pb-5">
          <NavLink to="profile"> Manage Profile </NavLink>
        </li>
        <li className="border-b pb-5">
          <NavLink to="jobs-basket">Job Baskry</NavLink>
        </li>
        <li className="border-b pb-5">
          <NavLink to="new-post">New Post</NavLink>
        </li>

        <li className="border-b pb-5">Logout</li>
      </ul>
    </div>
  );
};

export default Sidebar;
