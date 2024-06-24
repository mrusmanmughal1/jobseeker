import { BiWorld } from "react-icons/bi";
import { NavLink } from "react-router-dom";
import Adminfilters from "./Adminfilters";
import { useAllCandidates } from "../../Services/Candidate/useCandidateList";
import Loader from "../../UI/Loader";

const AdminCandidateList = () => {
  const { data, isLoading, status, isError } = useAllCandidates();
  if (isLoading) return <Loader style="h-screen py-20" />;

  return (
    <div className="flex flex-col gap-4">
      <Adminfilters />
      {data?.data.data?.map((v, i) => (
        <div
          key={i}
          className="flex flex-col md:flex-row gap-4 p-5 shadow-lg border-2 border-b
          hover:bg-slate-100 bg-white"
        >
          <div className="w-full md:w-1/3 flex flex-col gap-4">
            <p className="uppercase font-bold">{v.username}</p>
            <p className="text-xs flex gap-2 items-center">
              <BiWorld /> Lahore , Pakistansasda
            </p>
          </div>

          <div className="w-full flex justify-end gap-4 md:flex-row md:items-center text-purple-900">
            <NavLink to="/admin/view-candidate-profile">
              <button
                className="text-xs font-semibold lg:px-2 xl:px-6 xl:py-3 px-6
               rounded-md py-3 border-2 border-primary-green hover:text-white hover:bg-primary-green"
              >
                VIEW PROFILEs
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

export default AdminCandidateList;
