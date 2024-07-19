import { BiWorld } from "react-icons/bi";
import { NavLink } from "react-router-dom";
import { useAllEmployer } from "../../Services/admin/useAllEmployer";
import Loader from "../../UI/Loader";
import ErrorMsg from "../../UI/ErrorMsg";

const AdminEmployeerList = () => {
  const { data, isLoading } = useAllEmployer();
  if (isLoading) return <Loader style="h-screen py-20" />;

  if (data.data.results.length == 0)
    return (
      <ErrorMsg ErrorMsg="No Data Availale Right Now Try Again Later . Thank You" />
    );
  const img =
    "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_640.png";
  console.log(data);
  return (
    <div className="flex flex-col gap-4">
      {data?.data?.results.map((v, i) => (
        <div
          key={i}
          className="flex flex-col md:flex-row gap-4 p-5 shadow-lg border-2 border-b 
          hover:bg-slate-100 bg-white"
        >
          <div className="w-full md:w-4/3 flex flex-col gap-4">
            <div className="flex gap-6 items-center">
              <div className=" overflow-hidden">
                <img src={v?.avatar_image || img} className="w-16 " alt="" />
              </div>
              <div className="">
                <p className="uppercase font-bold">
                  {v?.username}  
                </p>
                <p className="text-xs flex gap-2 items-center">
                  <span className="font-semibold">Date Joined </span>:{" "}
                  {v?.date_joined}
                </p>
              </div>
            </div>
          </div>

          <div className="w-full flex justify-end gap-4 md:flex-row md:items-center text-purple-900">
            <NavLink to="/admin/view-employeer-profile">
              <button
                className="text-xs font-semibold lg:px-2 xl:px-6 xl:py-3 px-6
               rounded-md py-3 border-2 border-primary-green hover:text-white hover:bg-primary-green"
              >
                VIEW PROFILE
              </button>
            </NavLink>
            <button
              className="text-xs bg-red-500  lg:px-2 xl:px-6 xl:py-3 px-6
               rounded-md py-3 border-2 text-white hover:bg-red-800"
            >
              DELETE PROFILE
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default AdminEmployeerList;
