import { NavLink } from "react-router-dom";
import { useUserinfo } from "../Context/Userinfo";
import { MdDashboardCustomize } from "react-icons/md";
import { FaThList } from "react-icons/fa";
import { BsPersonWorkspace } from "react-icons/bs";
import { FaNetworkWired } from "react-icons/fa";
import { BiLogOutCircle } from "react-icons/bi";
import { IoSettingsSharp } from "react-icons/io5";
const AdminSideBar = () => {
  const { dispatch } = useUserinfo();
  const handleClick = () => {
    dispatch({ type: "logout" });
  };

  const AdminNavLinks = [
    {
      title: "Dashboard",
      to: `/admin/dashboard`,
      icon: <MdDashboardCustomize />,
    },
    { title: "Candidates Lists", to: `/admin/candidates`, icon: <FaThList /> },

    { title: "Jobs List", to: `/admin/jobs`, icon: <FaNetworkWired /> },

    {
      title: "Employeer List",
      to: `/admin/employeers`,
      icon: <BsPersonWorkspace />,
    },
    {
      title: "Settings",
      to: "/admin/settings",
      icon: <IoSettingsSharp />,
    },
  ];
  return (
    <div className="relative">
      <div className="    mx-auto          ">
        <ul className={`flex flex-col    gap-5`}>
          <li className="  w-   pb-5 pt-5 "></li>
          {AdminNavLinks.map((NavValue, i) => {
            const { title, icon, to } = NavValue;
            return (
              <li key={i} className=" py-4">
                <NavLink to={to} className="flex admin gap-2 items-center">
                  {icon} {title}
                </NavLink>
              </li>
            );
          })}

          <button
            className="  flex gap-2 items-center py-5 text-start"
            onClick={handleClick}
          >
            <BiLogOutCircle /> Logout
          </button>
        </ul>
      </div>
    </div>
  );
};

export default AdminSideBar;
