import { FaDownload } from "react-icons/fa";
import { FaEarthAmericas } from "react-icons/fa6";
import { RxCross1 } from "react-icons/rx";
import { FaCheck } from "react-icons/fa";
import { Tooltip as ReactTooltip } from "react-tooltip";
import { FaVideo } from "react-icons/fa";
import { useCandidateAppect } from "../../Services/Employer/useCandidateAppect";
import MiniLoader from "../../UI/MiniLoader";

const AppliedCandidatesLIst = ({
  Head,
  Data,
  model,
  setmodel,
  setinterviewModel,
  interviewModel,
  setapplicantID,
}) => {
  const { mutate: approval, isLoading, isError } = useCandidateAppect();
  const handleinterview = (id) => {
    setinterviewModel(true);
    setapplicantID(id);
  };

  return (
    <div>
      <div className=" font-semibold  bg-slate-700   text-white justify-between  text-sm md:text-base  flex p-3 px-5 ">
        {Head?.map((val, i) => (
          <div className=" " key={i}>
            {val}
          </div>
        ))}
      </div>
      {/* //table */}

      <div className="h-96  overflow-y-auto">
        {Data?.applications_received.length == 0 ? (
          <div className="text-center pt-16 font-semibold text-btn-primary">
            No Application Received Yet
          </div>
        ) : (
          Data?.applications_received?.map((val, i) => {
            return (
              <div key={i} className="px-2 hover:bg-slate-50">
                <div className="flex items-center justify-between py-4  hover:bg-gray-100 border-b ">
                  <div className=" w-[40%] flex md:flex-row  flex-col  md:items-center justify-between px-4">
                    <div className="flex  text-sm  md:text-base flex-col gap-3">
                      <div className="font-semibold">
                        {val?.candidate_username}
                      </div>
                      <div className=" flex items-center gap-2 text-xs">
                        <FaEarthAmericas />
                        {val?.candidate_email}
                      </div>
                    </div>
                  </div>
                  <div className=" w-[20%] text-center cursor-pointer   hidden md:block  text-xs md:text-sm">
                    <a
                      href={val.candidate_resume}
                      download
                      className="text-btn-primary font-bold "
                    >
                      <FaDownload />
                    </a>
                  </div>

                  <div className="status   w-[20%]  text-center">
                    <span
                      className={`${
                        val.status == "rejected"
                          ? "bg-red-600"
                          : val?.status == "pending"
                          ? "bg-yellow-500 "
                          : "bg-green-500"
                      }  md:px-6 px-2 text-white  text-sm py-2 rounded-md`}
                    >
                      {isLoading ? <MiniLoader /> : val.status}
                    </span>
                  </div>
                  <div className=" w-[20%] text-end">
                    {val.status !== ("rejected" || "accepted") && (
                      <>
                        <button
                          data-tooltip-id="Accept"
                          disabled={val.status == ("rejected" || "accepted")}
                          onClick={() =>
                            approval({ id: val.id, status: "accepted" })
                          }
                          className="bg-green-500 font-semibold p-2 disabled:cursor-not-allowed rounded-md text-white me-2"
                        >
                          <FaCheck />
                        </button>
                        <button
                          data-tooltip-id="Reject"
                          disabled={val.status == ("rejected" || "accepted")}
                          onClick={() =>
                            approval({ id: val.id, status: "rejected" })
                          }
                          className="bg-red-500 font-semibold p-2 rounded-md text-white me-2  disabled:cursor-not-allowed"
                        >
                          <RxCross1 />
                        </button>
                        <button
                          onClick={() => handleinterview(val.id)}
                          data-tooltip-id="my-tooltip-1"
                          className="bg-btn-primary font-bold text-white p-2 rounded-md"
                        >
                          {" "}
                          <FaVideo className=" " />
                        </button>
                      </>
                    )}
                  </div>
                </div>
              </div>
            );
          })
        )}
      </div>

      <div className="bg-gray-200 px-4 py-3 text-right">
        <button
          onClick={setmodel}
          type="button"
          className="py-2 px-4 bg-gray-600 text-white rounded hover:bg-gray-700 mr-2"
        >
          <i className="fas fa-times"></i> Close
        </button>
      </div>

      <ReactTooltip
        id="my-tooltip-1"
        place="bottom"
        content="Schedule a Meeting"
      />
      <ReactTooltip id="Accept" place="bottom" content="Accept Candidate " />
      <ReactTooltip id="Reject" place="bottom" content="Reject Candidate " />
    </div>
  );
};

export default AppliedCandidatesLIst;
