import { FaDownload } from "react-icons/fa";
import { FaEarthAmericas } from "react-icons/fa6";
import { RxCross1 } from "react-icons/rx";
import { FaCheck } from "react-icons/fa";
import { Tooltip as ReactTooltip } from "react-tooltip";
import { FaVideo } from "react-icons/fa";
import { useGetScheduledInterview } from "../../Services/Employer/useGetScheduledInterviews";
import Loader from "../../UI/Loader";
import ErrorMsg from "../../UI/ErrorMsg";

const EmpInterviewList = ({
  Head,
  Data,
  model,
  setmodel,
  setinterviewModel,
  interviewModel,
  setapplicantID,
}) => {
  const { data, isLoading, status, isError } = useGetScheduledInterview();
  console.log(data);
  const handleinterview = (id) => {
    // setinterviewModel(true);
    // setapplicantID(id);
  };

  if (isLoading) return <Loader style="py-20" />;
  if (data?.data?.data?.length == 0)
    return (
      <ErrorMsg ErrorMsg="No Data Availale Right Now Try Again Later . Thank You" />
    );
  return (
    <div>
      <div className="">
        <div className="w-full capitalize p-2 font-semibold bg-gray-200 rounded-t-md flex justify-between px-4">
          <div className="">name</div>
          <div className=""> type</div>
          <div className=""> Interviewer</div>
          <div className="">Date / Time</div>
        </div>

        <div className="w-full ">
          {data.data.data.map((val, i) => {
            const date = new Date(val.date_time_start);

            // Format date and time
            const formattedDate = date.toLocaleDateString();
            return (
              <div
                className="flex justify-between w-full p-3 bg-gray-100"
                key={i}
              >
                <div className="">{val.candidate_username}</div>
                <div className=""> {val.interview_type}</div>
                <div className="div"> {val.interviewer_name}</div>
                <div className="">{formattedDate}</div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default EmpInterviewList;
