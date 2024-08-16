import React, { useState, useEffect } from "react";
import BrowseBySectors from "../../UI/BrowseBySectors";
import CvUpload from "../../UI/CvUpload";
import FeaturedJobs from "../../UI/FeaturedJobs";
import Job from "../Job";
import JobSearchbar from "../../UI/JobSearchbar";
import JobType from "../../UI/JobType";
import { useUserinfo } from "../../Context/AuthContext";
import { useSearchAPI } from "../../Services/General/useSearchAPI";
import Loader from "../Loader";
import { GrCaretNext, GrCaretPrevious } from "react-icons/gr";
import { useLocation } from "react-router-dom";
import { useCandidateDetails } from "../../Services/Candidate/useCandidateDetails";
import ErrorMsg from "../ErrorMsg";
const JobsLayout = (alljobs = []) => {
  const [clicked, setClicked] = useState(false);
  const [key, setKeyword] = useState("");
  const [searched, setsearch] = useState({
    title: "",
    location: "",
    isRemote: false,
    specializations_skills: "",
  });
  const { title, location, isRemote } = searched;
  const [page, setPage] = useState(1);

  const locationObj = useLocation();
  const queryParams = new URLSearchParams(locationObj.search);
  const titles = queryParams.get("title") || "";
  const locationParam = queryParams.get("location") || "";
  const specializations_skills =
    queryParams.get("specializations_skills") || "";
  const isRemotes = queryParams.get("isRemote") === "true" || false;

  useEffect(() => {
    setsearch({
      title: titles || "",
      location: locationParam || "",
      isRemote: isRemotes || "",
      specializations_skills: key || "",
    });
  }, [titles, locationParam, isRemotes, key, specializations_skills]);

  const handleChange = (e) => {
    setsearch({ ...searched, [e.target.name]: e.target.value });
  };
  const { user_type } = useUserinfo();

  const handleRemoteChange = (e) => {
    const { checked } = e.target;
    setsearch((prevSearch) => ({
      ...prevSearch,
      isRemote: checked,
    }));
  };
  const {
    data: SearchedData,
    isLoading: isSearch,
    isError: SearchError,
    hasNextPage,
    hasPreviousPage,
  } = useSearchAPI(searched, page);
  const handleNextPage = () => {
    if (hasNextPage) {
      setPage((prev) => prev + 1);
    }
  };

  const handlePreviousPage = () => {
    if (hasPreviousPage) {
      setPage((prev) => prev - 1);
    }
  };
  const { data: candidateCVUpdated } = useCandidateDetails();

  return (
    <div className="flex lg:flex-row flex-col w-11/12 mx-auto ">
      <div className="pt-4 lg:w-[30%]  lg:order-none order-2">
        {user_type === "candidate" &&
          !candidateCVUpdated?.data?.data?.cv_file && <CvUpload />}
        <FeaturedJobs />
        <JobType />
      </div>

      <div className=" w-full   py-8 md:pt-4">
        <div className="   lg:w-3/4 mx-auto ">
          <JobSearchbar
            title={title}
            location={location}
            isRemote={isRemote}
            handleChange={handleChange}
            setsearch={setsearch}
            handleRemoteChange={handleRemoteChange}
            seclicked={setClicked}
          />
        </div>
        <div className="flex items-center w-full justify-between">
          <p className="ps-8 font-semibold text-sm">
            Jobs Available ({SearchedData?.data?.results.length || 0})
          </p>
          <div className="flex gap-1">
            <button
              onClick={handlePreviousPage}
              disabled={!hasPreviousPage}
              className="bg-slate-200 rounded-full p-3 disabled:bg-slate-200 disabled:cursor-not-allowed hover:bg-btn-primary hover:text-white hover:cursor-pointer"
            >
              <GrCaretPrevious />
            </button>
            <button
              onClick={handleNextPage}
              disabled={!hasNextPage}
              className="bg-slate-200 rounded-full p-3 disabled:bg-slate-200 disabled:cursor-not-allowed hover:bg-btn-primary hover:text-white hover:cursor-pointer"
            >
              <GrCaretNext />
            </button>
          </div>
        </div>

        <div className=" lg:ps-8 mt-4">
          {isSearch ? (
            <Loader style="py-10" />
          ) : SearchError ? (
            <ErrorMsg ErrorMsg="Sorry, Unable to Fetch Data. Try Again Later" />
          ) : (
            <div>
              {SearchedData.data.count === 0 ? (
                <ErrorMsg ErrorMsg="No Data is Available Right Now . Try Again Later." />
              ) : (
                SearchedData?.data?.results?.map((val, i) => (
                  <Job job={val} key={i} />
                ))
              )}
            </div>
          )}
        </div>

        <div className="mx-auto lg:w-11/12">
          <BrowseBySectors setKeyword={setKeyword} value={key} />
        </div>
      </div>
    </div>
  );
};

export default JobsLayout;
