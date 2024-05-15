import Logo from "./Logo";
import image from "../assets/bg-page-top.jpg";
import { IoMdLogOut } from "react-icons/io";
const AdminNavbar = () => {
  return (
    <div className="shadow-sm">
      <div className="w-11/12 mx-auto">
        <div>
          <div className="flex   justify-between items-center">
            <Logo />{" "}
            <div className="flex items-center gap-6">
              <div className="flex gap-2 bg-btn-primary text-white  p-4 rounded-md ">
                <div className="rounded-full overflow-hidden">
                  <img src={image} alt="" className="w-10 h-10 " />
                </div>{" "}
                <div className="  ">
                  <p className="font-semibold">Muhammad Usman</p>
                  <p className="text-sm">Adminitator</p>
                </div>
              </div>
              <div className="">
                <p className="text-2xl hover:border-purple-700 border   transition-all duration-500  hover:border hover:shadow-lg shadow-md p-2 rounded-md hover:text-btn-primary cursor-pointer">
                  {" "}
                  <IoMdLogOut />
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminNavbar;
