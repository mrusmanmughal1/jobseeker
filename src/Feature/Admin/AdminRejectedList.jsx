import { BiWorld } from "react-icons/bi";
import { FaCheck } from "react-icons/fa";
import { NavLink } from "react-router-dom";
import { RxCross2 } from "react-icons/rx";
import Adminfilters from "./Adminfilters";
import Loader from "../../UI/Loader";
import ErrorMsg from "../../UI/ErrorMsg";
import { useAdminJobsLIsts } from "../../Services/admin/useAdminJobsLists";

const AdminRejectedList = () => {
  const { data, isLoading, isError } = useAdminJobsLIsts("rejected");

  //   const { mutate: JobApprove, isLoading: load } = useAdminJobApprove();
  if (isLoading) return <Loader style="h-screen  " />;
  if (data?.data?.results?.length == 0 || isError)
    return (
      <ErrorMsg ErrorMsg="No Data Availale Right Now Try Again Later . Thank You" />
    );
  return (
    <div className="flex flex-col gap-4">
      <div className="font-bold uppercase">
        {" "}
        Rejected Jobs{" "}
        <span className="text-btn-primary">({data?.data?.count})</span>{" "}
      </div>

      <Adminfilters />
      {data?.data?.results?.reverse().map((val) => (
        <div
          key={val.id + 2}
          className="flex flex-col md:flex-row gap-4 p-5 shadow-lg border-2 border-b
          hover:bg-slate-100 bg-white"
        >
          <div className="w-full md:w-1/3 flex flex-col gap-2">
            <p className="uppercase font-bold">{val.title}</p>

            {val.remote_work ? (
              <p className="text-xs font-semibold flex  items-center  gap-1">
                {" "}
                <BiWorld /> Remote{" "}
              </p>
            ) : (
              <p className="text-xs flex gap-2 items-center">
                <BiWorld />{" "}
                {val?.addresses?.map((v, id) => (
                  <span className="font-medium" key={id + "key"}>
                    {v.city},{" "}
                  </span>
                ))}
              </p>
            )}
            <div className="text-xs uppercase">
              status :{" "}
              <span className=" bg-red-600 px-1 text-white">{val.status}</span>
            </div>
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
            {/* <div className="flex gap-4">
              <button
                // onClick={() => JobApprove(val.id)}
                className="flex  bg-green-700 font-bold flex-col items-center
               px-6 rounded-md py-[0.30rem] border-2 border-green-700 text-white hover:bg-green-700"
              >
                <FaCheck />
              </button>
              <button className="bg-red-600 px-6 py-[0.30rem] font-bold text-white text-xl rounded-md">
                <RxCross2 />
              </button>
            </div> */}
            <NavLink to="/admin/view-jobs">
              <button
                className="text-xs font-semibold lg:px-2 xl:px-6 xl:py-3 px-6
               rounded-md py-3 border-2 border-purple-900 hover:text-white hover:bg-purple-900"
              >
                VIEW
              </button>
            </NavLink>
            <button
              className="text-xs font-semibold lg:px-2 xl:px-6 xl:py-3 px-6
               rounded-md py-3 border-2 bg-red-600 text-white  border-red-800 hover:text-white hover:bg-red-900"
            >
              Delete
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default AdminRejectedList;
