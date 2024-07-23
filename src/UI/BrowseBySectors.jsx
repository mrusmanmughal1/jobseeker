import { NavLink } from "react-router-dom";
import { useSpecialization } from "../Services/General/useSpecialization";
import Loader from "./Loader";
import ErrorMsg from "./ErrorMsg";

const BrowseBySectors = () => {
  const { data, isLoading, isError, status } = useSpecialization();
  if (isLoading) return <Loader />;
  if (isError) return <ErrorMsg ErrorMsg="Try Again later .. " />;
  return (
    <div className="bg-white p-8 mx-0   shadow-md flex flex-col gap-4">
      <p className="text-2xl font-semibold mb-2">Browse More Jobs by Sector</p>
      <div className=" flex gap-4 flex-wrap  ">
        {data?.data?.specializations?.map((val, i) => (
          <div key={i} className="bg-slate-200 py-2 px-3 rounded-full ">
            {val}
          </div>
        ))}
      </div>
      <div className="text-end">
        <NavLink
          to="/jobs-by-sector"
          className="bg-btn-primary text-white py-2  px-4 rounded-md"
        >
          VIEW ALL SECTORS
        </NavLink>
      </div>
    </div>
  );
};

export default BrowseBySectors;
