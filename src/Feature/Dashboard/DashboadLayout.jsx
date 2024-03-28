import { Outlet } from "react-router-dom";
import Sidebar from "../../UI/Sidebar";
import Minicart from "../../Reuseables/Minicart";

const DashboadLayout = () => {
  return (
    <div>
      <div className="flex md:gap-24     md:w-11/12 mx-auto py-10 md:flex-row flex-col gap-8">
        <div className="w-full px-4 md:w-1/4">
          <Sidebar baseurl="" />
        </div>
        <div className="w-full mx-auto "> {<Outlet />}</div>
      </div>
    </div>
  );
};

export default DashboadLayout;
