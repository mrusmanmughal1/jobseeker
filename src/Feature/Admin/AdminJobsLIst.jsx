import { BiWorld } from "react-icons/bi";
import { FaCheck } from "react-icons/fa";
import { NavLink } from "react-router-dom";
import { RxCross2 } from "react-icons/rx";
import Adminfilters from "./Adminfilters";
import { useJAdminobsList } from "../../Services/admin/useJAdminobsList";
import Loader from "../../UI/Loader";

const AdminJobsList = () => {
  const { data, isLoading, status, isError } = useJAdminobsList();

  if (isLoading) return <Loader style="h-screen" />;
  return (
    <div className="flex flex-col gap-4">
      <Adminfilters />
      {data?.data?.results.map((val, i) => (
        <div
          key={i}
          className="flex flex-col md:flex-row gap-4 p-5 shadow-lg border-2 border-b
          hover:bg-slate-100 bg-white"
        >
          <div className="w-full md:w-1/3 flex flex-col gap-4">
            <p className="uppercase font-bold">{val.title}</p>
            <p className="text-xs flex gap-2 items-center">
              <BiWorld /> {val.addresses.map((v) => <span  className="font-medium" key={i}>{v.city},  </span>)}
            </p>
          </div>
          <div className="w-full md:w-1/3 text-sm p-2 font-bold">
            <p>
              Salary : <span className="text-sm font-medium">{val.rate}</span>{" "}
            </p>
            <p>
              Job Type : <span className="font-medium">{val.contract_type}</span>
            </p>
          </div>
          <div className="md:w-1/3 w-full flex justify-end gap-4 md:flex-row md:items-center text-purple-900">
            <div className="flex gap-4">
              <button
                className="flex text-xs bg-green-700 font-bold flex-col items-center
               px-6 rounded-md py-[0.30rem] border-2 border-green-700 text-white hover:bg-green-700"
              >
                <FaCheck />
              </button>
              <button className="bg-red-600 px-6 py-[0.30rem] font-bold text-white text-xl rounded-md">
                <RxCross2 />
              </button>
            </div>
            <NavLink to="/admin/view-jobs">
              <button
                className="text-xs font-semibold lg:px-2 xl:px-6 xl:py-3 px-6
               rounded-md py-3 border-2 border-purple-900 hover:text-white hover:bg-purple-900"
              >
                VIEW
              </button>
            </NavLink>
          </div>
        </div>
      ))}
    </div>
  );
};

export default AdminJobsList;
