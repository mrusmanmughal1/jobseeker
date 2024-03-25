import { NavLink } from "react-router-dom";

const Sidebar = () => {
  return (
    <div className=" w-11/12 mx-auto md:w-1/4 ">
      <ul className="flex flex-col gap-8">
        <li className="border-b border-t py-5">
          <NavLink to="myaccount"> My Account</NavLink>
        </li>
        <li className="border-b pb-5">
          <NavLink to="applied">Application History </NavLink>
        </li>
        <li className="border-b pb-5">
          <NavLink to="profile"> Manage Profile </NavLink>
        </li>
        <li className="border-b pb-5">
          <NavLink to="jobs-basket ">Job Basket</NavLink>
        </li>

        <li className="border-b pb-5">Logout</li>
      </ul>
    </div>
  );
};

export default Sidebar;
