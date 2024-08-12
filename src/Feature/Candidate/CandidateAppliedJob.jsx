import React from "react";
import { FaEarthAmericas } from "react-icons/fa6";
import { useCandidateHistory } from "../../Services/Candidate/useCandidateHistory";
import Loader from "../../UI/Loader";
import ErrorMsg from "../../UI/ErrorMsg";
const CandidateAppliedJob = () => {
  const { data, isloading, isError } = useCandidateHistory();
  if (isloading) return <Loader style="h-screen py-20" />;
  if (isError)
    return <ErrorMsg ErrorMsg="Try Again Later Unable To fetch Data !" />;
  if (data?.data?.data?.length == 0)
    return (
      <ErrorMsg ErrorMsg="Sorry ! You Haven't Applied Yet . Find Jobs that best Matches You . " />
    );
  if (data?.data?.data?.applications == 0)
    return <ErrorMsg ErrorMsg="No Data Available . Apply for jobs First" />;
  return (
    <div className="rounded-md border ">
      <div className=" font-semibold  text-sm md:text-base bg-gray-200 flex p-3 px-5 ">
        <div className=" w-1/2 md:w-full">Job Title </div>
        <div className="w-1/3 md:w-1/4 text-center">Job Type</div>
        <div className="w-1/3 md:w-1/4 md:text-center"> Date Applied </div>

        <div className="w-1/3 md:w-1/4 text-center">Status</div>
      </div>
      {data?.data?.data?.applications?.map((val, i) => {
        const date = new Date(val.applied_at);

        // Format date and time
        const formattedDate = date.toLocaleDateString();
        return (
          <div key={i}>
            <div className="flex items-center py-4  hover:bg-gray-100 border-b ">
              <div className="md:w-full w-1/2 flex md:flex-row  flex-col  md:items-center justify-between px-4">
                <div className="flex  text-sm  md:text-base flex-col gap-3">
                  <div className="font-semibold">{val?.title}</div>
                  <div className=" flex items-center gap-2 text-xs">
                    <FaEarthAmericas />{" "}
                    {val?.addresses?.map((val) => (
                      <span>{val?.state}</span>
                    ))}
                  </div>
                </div>
                <div className="time  hidden md:block  text-btn-primary text-xs md:text-sm">
                  {val?.contract_type}
                </div>
              </div>
              <div className="date w-1/4 md:w-1/4 text-center  text-sm  italic text-gray-500">
                {formattedDate}
              </div>
              <div className="status w-1/4 md:w-1/4 text-center">
                <button
                  className={`${
                    val?.app_status == "pending"
                      ? "bg-yellow-500 "
                      : "bg-green-500"
                  } md:px-6 px-2 text-white  text-sm py-2 rounded-md `}
                >
                  {val?.app_status}
                </button>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default CandidateAppliedJob;
