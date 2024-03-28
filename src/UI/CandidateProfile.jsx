import React from "react";

const CandidateProfile = () => {
  return (
    <div className="shadow-md  bg-white p-10 w-full">
      <div className="border p-8">
        <div className="flex gap-4 items-center">
          <img
            src="https://secure.gravatar.com/avatar/9df97e1b07976bb5e16487c03e80976f?s=96&d=mm&r=g"
            alt=""
            className="w-20 h-10 object-cover"
          />
          <div className="flex  items-center gap-5">
            <div className="">
              <p className="font-semibold text-2xl">Usman</p>
              <p>USA</p>
            </div>
            <p>IT</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CandidateProfile;
