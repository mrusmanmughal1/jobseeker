import {
  BiSolidLeftArrowSquare,
  BiSolidRightArrowSquare,
} from "react-icons/bi";

import Job from "./Job";
import { useAllJobs } from "../Services/Jobs/useAllJobs";
import { NavLink } from "react-router-dom";
import Loader from "./Loader";
const RecentJObs = () => {
  const { data, isLoading, status, isError } = useAllJobs();
if (!data ) {
  return <Loader style="py-32"/>
}
  return (
    <div className=" w-full   mx-auto  ">
      <div className="flex items-center   justify-between     border-b-2">
        <div className="font-bold">Recent Jobs</div>
        <div className=" flex justify-between py-4 ">
          <span>
            <BiSolidLeftArrowSquare className="text-2xl text-purple-900" />
          </span>
          <span>
            <BiSolidRightArrowSquare className="text-2xl text-purple-900" />
          </span>
        </div>
      </div>
      <div className="border  mt-8">
        {data?.data?.results.slice(0, 5).map((val, i) => (
          <Job key={i} job={val} rec='res' />
        ))}
      </div>
      <div className="flex py-4  justify-end">
        <NavLink to={"/jobs"}  className="px-4 py-2 bg-purple-900 font-semibold rounded-md text-white">
          
        
          ALL JOBS
        </NavLink>
      </div>
    </div>
  );
};

export default RecentJObs;
