import { NavLink } from "react-router-dom";
import { useUserinfo } from "../Context/Userinfo";
import { MdDashboardCustomize } from "react-icons/md";
import { FaThList } from "react-icons/fa";
import { BsPersonWorkspace } from "react-icons/bs";
import { FaNetworkWired } from "react-icons/fa";
import { BiLogOutCircle } from "react-icons/bi";

const AdminSideBar = ({ baseurl, set, setSidebarStatus, gap = "gap-5" }) => {
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
  ];
  return (
    <div className="relative">
      <div className="    mx-auto          ">
        <ul className={`flex flex-col   ${gap}`}>
          <li className="  w-   pb-5 pt-5 "></li>
          {AdminNavLinks.map((val, i) => {
            return (
              <li key={i} className=" py-5">
                <NavLink to={val.to} className="flex gap-2 items-center">
                 {val.icon} {val.title}
                </NavLink>
              </li>
            );
          })}

          <button
            className="  flex gap-2 items-center pb-5 text-start"
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
