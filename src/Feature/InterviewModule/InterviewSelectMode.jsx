import React from "react";

const InterviewSelectMode = ({ settype }) => {
  return (
    <div className="">
      <div className="space-y-2 ">
        <p className="text-2xl font-semibold text-btn-primary   ">
          Schedule interview
        </p>
        <p className="text-xs">
          Choose the type of interview you want to conduct with this candidate
        </p>
      </div>
      <div className="mt-6">
        <div className="w-full">
          <label className="font-semibold  ">
            Choose your mode of interview
            <span className="text-sm px-2 font-normal">
              Select Interview Mode.
            </span>
          </label>
          <select
            name="gender"
            onChange={(e) => settype(e.target.value)}
            className="block w-full border p-3 px-5  bg-gray-100"
          >
            <option value="" disabled selected>
              Select mode
            </option>
            <option value="audio_call">Interview on Phone Call</option>
            <option value="video_call">Interview on Video Call</option>
            <option value="in_person">In person Interview</option>
          </select>
        </div>
      </div>
    </div>
  );
};

export default InterviewSelectMode;
