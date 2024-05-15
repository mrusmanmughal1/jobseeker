import { Outlet } from "react-router-dom";
import AdminSideBar from "../AdminSideBar";

const AdminDashboard = () => {
  return (
    <div>
      <div className="flex         mx-auto   md:flex-row flex-col  ">
        <div className="w-full flex  py-10 ps-10  bg-purple-950 text-white px-4   md:w-1/4">
          <AdminSideBar />
        </div>
        <div className="md:w-11/12 mx-auto bg-purple-100 p-10 pb-20">
          {" "}
          {<Outlet />}
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;
