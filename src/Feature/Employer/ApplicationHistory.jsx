import { FaEarthAmericas } from "react-icons/fa6";
import { useJobHistoryEMp } from "../../Services/Employer/useJobHistoryEMp";
import { CiEdit } from "react-icons/ci";
import Loader from "../../UI/Loader";
import ErrorMsg from "../../UI/ErrorMsg";
import { MdDelete } from "react-icons/md";
import { useState } from "react";
import Model from "../../Reuseables/Model";
import { useDeleteJob } from "../../Services/Employer/useDeleteJob";
import AppliedCandidatesLIst from "./AppliedCandidatesLIst";
import InterviewMain from "../InterviewModule/InterviewMain";
import { NavLink } from "react-router-dom";
import UpdateJob from "./UpdateJob";
const ApplicationHistory = () => {
  const [model, setmodel] = useState(false);
  const [interviewModel, setinterviewModel] = useState(false);
  const [applicantID, setapplicantID] = useState(null);
  const [index, setindex] = useState(null);
  const [edit, setEdit] = useState(null);
  const [updateModel, setupdateModel] = useState(false);

  const { data, isLoading, isError } = useJobHistoryEMp();
  const toggleModal = (i) => {
    setindex(i);
    setmodel(!model);
  };
  const handlemodelclick = (val) => {
    setupdateModel(true);
    setEdit(val);
  };
  const { mutate: deleteJob } = useDeleteJob();
  const Head = ["Applications", "Download Cv ", "Status", "Action"];
  if (isLoading) return <Loader style="py-20" />;
  if (data?.data?.data?.length == 0)
    return (
      <ErrorMsg ErrorMsg="No Data Availale Right Now Try Again Later . Thank You" />
    );
  return (
    <div className="rounded-md border ">
      <div className=" font-semibold  text-sm md:text-base bg-gray-200 flex p-3 px-5 ">
        <div className="w-1/3 md:w-1/4 ">Job Title </div>
        <div className="w-1/3 md:w-1/4 md:text-center"> Aplications </div>
        <div className="w-1/3 md:w-1/4 text-center">Status</div>
        <div className="w-1/3 md:w-1/4 text-end"> Action</div>
      </div>
      {data?.data?.data?.map((val, i) => {
        return (
          <div key={i}>
            <div className="flex items-center justify-between py-4  hover:bg-gray-100 border-b ">
              <div className="md:w- w-1/2 flex md:flex-row  flex-col  md:items-center justify-between px-4">
                <div className="flex  text-sm  md:text-base flex-col gap-3">
                  <div className="font-semibold">
                    <NavLink to={`/job-Details/${val?.id}`}>
                      <div className="text-black">{val?.title}</div>
                    </NavLink>
                  </div>
                  <div className=" flex items-center gap-2 text-xs">
                    <FaEarthAmericas />{" "}
                    {val?.addresses?.map((val, i) => (
                      <span key={i}>{val?.state}</span>
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
                    val?.status === "rejected"
                      ? "bg-red-600"
                      : val?.status == "pending"
                      ? "bg-yellow-500 "
                      : "bg-green-500"
                  }  md:px-6 px-2 text-white  text-sm py-2 rounded-md`}
                >
                  {val.status}
                </span>
              </div>
              <div className="  w-1/4 md:w-1/4  text-end">
                <button
                  onClick={() => handlemodelclick(val)}
                  className="bg-green-500 font-semibold p-2 rounded-md text-white me-1"
                >
                  <CiEdit />
                </button>

                <button
                  onClick={() => deleteJob(val.id)}
                  className="bg-red-500 font-semibold p-2 rounded-md text-white me-4"
                >
                  <MdDelete />
                </button>
              </div>
            </div>
          </div>
        );
      })}
      <Model model={model} index="z-10">
        <AppliedCandidatesLIst
          Head={Head}
          Data={data?.data?.data?.at(index)}
          setmodel={toggleModal}
          setinterviewModel={setinterviewModel}
          setapplicantID={setapplicantID}
        />
      </Model>
      <Model model={interviewModel} index="z-20">
        <InterviewMain
          applicantID={applicantID}
          interviewModel={interviewModel}
          setinterviewModel={setinterviewModel}
        />
      </Model>
      <Model model={updateModel}>
        <UpdateJob edit={edit} setupdateModel={setupdateModel} />
      </Model>
    </div>
  );
};

export default ApplicationHistory;
