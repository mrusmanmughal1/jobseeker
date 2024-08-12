import { useState } from "react";
import InterViewOnCall from "./InterViewOnCall";
import InterviewInPerson from "./InterviewInPerson";
import InterviewOnVideo from "./InterviewOnVideo";
import InterviewSelectMode from "./InterviewSelectMode";
import "react-datetime-picker/dist/DateTimePicker.css";
import "react-calendar/dist/Calendar.css";
import "react-clock/dist/Clock.css";
import { ImCross } from "react-icons/im";
const InterviewMain = ({ setinterviewModel, interviewModel, applicantID }) => {
  const [type, settype] = useState("");

  return (
    <div className="p-10 px-14 min-h-[30rem] flex flex-col justify-between   relative ">
      <button
        className="absolute right-10 hover:text-btn-primary"
        onClick={() => setinterviewModel(!interviewModel)}
      >
        <ImCross />
      </button>
      <div className="">
        <InterviewSelectMode settype={settype} />

        {type == "audio_call" && (
          <InterViewOnCall
            applicantID={applicantID}
            type={type}
            setinterviewModel={setinterviewModel}
          />
        )}
        {type == "video_call" && (
          <InterviewOnVideo
            applicantID={applicantID}
            type={type}
            setinterviewModel={setinterviewModel}
          />
        )}
        {type == "in_person" && (
          <InterviewInPerson
            applicantID={applicantID}
            type={type}
            setinterviewModel={setinterviewModel}
          />
        )}
      </div>
    </div>
  );
};

export default InterviewMain;
