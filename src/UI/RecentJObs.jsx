import {
  BiSolidLeftArrowSquare,
  BiSolidRightArrowSquare,
} from "react-icons/bi";

import Job from "./Job";
import { useAllJobs } from "../Services/Jobs/useAllJobs";
import { NavLink } from "react-router-dom";
import Loader from "./Loader";
import ErrorMsg from "./ErrorMsg";
const RecentJObs = () => {
  const { data, isLoading, isError } = useAllJobs();
  if (isLoading) return <Loader />;
  if (data?.data?.count == 0 || isError) {
    return (
      <div className="w-full">
        <ErrorMsg
          ErrorMsg={"  No Job is  Available  Right Now !  Try Later ."}
        />
      </div>
    );
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
          <Job key={i} job={val} rec="res" />
        ))}
      </div>
      <div className="flex py-4  justify-end">
        <NavLink
          to={"/jobs"}
          className="px-4 py-2 bg-purple-900 font-semibold rounded-md text-white"
        >
          ALL JOBS
        </NavLink>
      </div>
    </div>
  );
};

export default RecentJObs;
