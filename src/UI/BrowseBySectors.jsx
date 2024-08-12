import { NavLink } from "react-router-dom";
import Loader from "./Loader";
import ErrorMsg from "./ErrorMsg";
import { useSpecializationSkills } from "../Services/General/useSpecializationSkills";

const BrowseBySectors = ({ setKeyword, value }) => {
  const { data, isLoading, isError, status } = useSpecializationSkills();
  if (isLoading) return <Loader />;
  if (isError) return <ErrorMsg ErrorMsg="Try Again later .. " />;
  return (
    <div className="bg-white p-8 mx-0   shadow-md flex flex-col gap-4">
      <p className="text-2xl font-semibold mb-2">Browse More Jobs by Sector</p>
      <div className=" flex gap-4 flex-wrap  ">
        {data?.data?.specialization_skills?.map((val, i) => (
          <div
            key={val}
            onClick={() => setKeyword(val)}
            className={` py-2 px-3 rounded-full hover:cursor-pointer  hover:bg-btn-primary hover:text-white 
            ${value == val ? "bg-btn-primary  text-white " : "bg-slate-100"}`}
          >
            {val}
          </div>
        ))}
      </div>
      <div className="text-end"></div>
    </div>
  );
};

export default BrowseBySectors;
