import { Outlet } from "react-router-dom";
import Sidebar from "../../UI/Sidebar";
import ImageBanner from "../../UI/ImageBanner";
import { useState } from "react";

const DashboadLayout = () => {
  const [SidebarStatus, setSidebarStatus] = useState();
  
  return (
    <div>
      <ImageBanner text={SidebarStatus} />

      <div className="flex md:gap-24     w-11/12 mx-auto py-10 md:flex-row flex-col gap-8">
        <div className="w-full   md:w-1/4">
          <Sidebar baseurl="" setSidebarStatus={setSidebarStatus} />
        </div>
        <div className="w-full mx-auto "> {<Outlet />}</div>
      </div>
    </div>
  );
};

export default DashboadLayout;
