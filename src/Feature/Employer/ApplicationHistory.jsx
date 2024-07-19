import { FaEarthAmericas } from "react-icons/fa6";
import { useJobHistoryEMp } from "../../Services/Employer/useJobHistoryEMp";
import { CiEdit } from "react-icons/ci";
import Loader from "../../UI/Loader";
import { useAppliedCandidatesCv } from "../../Services/Employer/useAppliedCandidatesCv";
import ErrorMsg from "../../UI/ErrorMsg";
import { useState } from "react";
import Model from "../../Reuseables/Model";
const ApplicationHistory = () => {
  const [model, setmodel] = useState(false);
  const [index, setindex] = useState(null);
  const { data, isLoading, isError } = useJobHistoryEMp();
  const toggleModal = (i) => {
    setindex(i);
    setmodel(!model);
  };

  const Head = ["Applications", "Download Cv ", "Status", "Action"];
  const { data: historyData, isLoading: history } = useAppliedCandidatesCv();
  if (isLoading || history) return <Loader style="py-20" />;
  if (data?.data?.jobs_posted?.length == 0)
    return (
      <ErrorMsg ErrorMsg="No Data Availale Right Now Try Again Later . Thank You" />
    );
  return (
    <div className="rounded-md border ">
      <div className=" font-semibold  text-sm md:text-base bg-gray-200 flex p-3 px-5 ">
        <div className="w-1/3 md:w-1/4 ">Job Title </div>
        <div className="w-1/3 md:w-1/4 md:text-center"> Aplications </div>
        <div className="w-1/3 md:w-1/4 text-end">Status</div>
        <div className="w-1/3 md:w-1/4 text-end"> Action</div>
      </div>
      {data?.data?.jobs_posted.map((val, i) => {
        return (
          <div key={i}>
            <div className="flex items-center justify-between py-4  hover:bg-gray-100 border-b ">
              <div className="md:w- w-1/2 flex md:flex-row  flex-col  md:items-center justify-between px-4">
                <div className="flex  text-sm  md:text-base flex-col gap-3">
                  <div className="font-semibold">{val?.title}</div>
                  <div className=" flex items-center gap-2 text-xs">
                    <FaEarthAmericas />{" "}
                    {val?.addresses?.map((val) => (
                      <span>{val?.state}</span>
                    ))}
                  </div>
                </div>

                <div
                  onClick={() => toggleModal(i)}
                  className=" cursor-pointer   hidden md:block  text-xs md:text-sm"
                >
                  View Applications{" "}
                  <span className="text-btn-primary font-bold ">
                    ({val?.applications_count})
                  </span>
                </div>
              </div>

              <div className="status w-1/4 md:w-1/4 text-center">
                <span
                  className={`${
                    val?.status == "pending" ? "bg-yellow-500 " : "bg-green-500"
                  }  md:px-6 px-2 text-white  text-sm py-2 rounded-md`}
                >
                  {val.status}
                </span>
              </div>
              <div className="">
                <button className="bg-green-500 font-semibold p-2 rounded-md text-white me-4">
                  <CiEdit />
                </button>
              </div>
            </div>
          </div>
        );
      })}
      <Model
        Head={Head}
        Data={data.data.jobs_posted.at(index)}
        model={model}
        setmodel={toggleModal}
      />
    </div>
  );
};

export default ApplicationHistory;
