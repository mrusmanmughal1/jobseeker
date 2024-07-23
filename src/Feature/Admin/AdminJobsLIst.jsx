import { BiWorld } from "react-icons/bi";
import { NavLink } from "react-router-dom";
import Adminfilters from "./Adminfilters";
import Loader from "../../UI/Loader";
import ErrorMsg from "../../UI/ErrorMsg";
import { useAdminJobsLIsts } from "../../Services/admin/useAdminJobsLists";
const AdminJobsList = () => {
  const { data, isLoading, isError } = useAdminJobsLIsts("accepted");

  if (isLoading) return <Loader style="h-screen py-20" />;
  if (data.data.results.length == 0 || isError)
    return (
      <ErrorMsg ErrorMsg="No Data Availale Right Now Try Again Later . Thank You" />
    );
  return (
    <div className="flex flex-col gap-4">
      <div className="font-bold">APPROVED JOBS <span className="text-btn-primary">({data?.data?.count})</span> </div>
      <Adminfilters />
      {data?.data?.results.map((val, i) => (
        <div
          key={val.id}
          className="flex flex-col md:flex-row gap-4 p-5 shadow-lg border-2 border-b
          hover:bg-slate-100 bg-white"
        >
          <div className="w-full md:w-1/3 flex flex-col gap-4">
            <p className="uppercase font-bold">{val.title}</p>
            <p className="text-xs flex gap-2 items-center">
              <BiWorld />{" "}
              {val?.addresses?.map((v) => (
                <span className="font-medium" key={v.id}>
                  {v.city},{" "}
                </span>
              ))}
            </p>
          </div>
          <div className="w-full md:w-1/3 text-sm p-2 font-bold">
            <p>
              Salary : <span className="text-sm font-medium">{val.rate}</span>{" "}
            </p>
            <p>
              Job Type :{" "}
              <span className="font-medium">{val.contract_type}</span>
            </p>
          </div>
          <div className="md:w-1/3 w-full flex justify-end gap-4 md:flex-row md:items-center text-purple-900">
            <div className="flex gap-2 font-medium">
              Status :
              <span className="bg-btn-primary text-white p-2 rounded-sm uppercase text-xs font-semibold">
                {val?.status}
              </span>
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
