import {
  BiSolidLeftArrowSquare,
  BiSolidRightArrowSquare,
} from "react-icons/bi";

import Job from "./Job";
const RecentJObs = () => {
  const job = [1, 1, 1, 1, 1, 1];
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
        {job.map((val, i) => (
          <Job key={i} />
        ))}
      </div>
      <div className="flex py-4  justify-end">
        <button className="px-4 py-2 bg-purple-900 rounded-md text-white">
          {" "}
          ALL JOBS
        </button>
      </div>
    </div>
  );
};

export default RecentJObs;
