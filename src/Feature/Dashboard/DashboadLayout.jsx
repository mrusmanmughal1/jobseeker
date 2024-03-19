import { Outlet } from "react-router-dom";
import ImageBanner from "../../UI/ImageBanner";
import Sidebar from "../../UI/Sidebar";

const DashboadLayout = () => {
  return (
    <div>
      <div className="flex md:gap-24   md:w-11/12 mx-auto py-10 md:flex-row flex-col gap-8">
        <Sidebar />
        <div className="w-11/12 mx-auto "> {<Outlet />}</div>
      </div>
    </div>
  );
};

export default DashboadLayout;
