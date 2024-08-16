import {
  FaCartPlus,
  FaSearch,
  FaFacebookSquare,
  FaTwitter,
  FaLinkedinIn,
} from "react-icons/fa";
import Profile from "../assets/Profile-picture.png";
import SimilarJobs from "./SimilarJobs";
import JobSubmitForm from "./JobSubmitForm";
import { useState } from "react";
import { useJobDetails } from "../Services/Jobs/useDetailsjob";
import { useApplyJob } from "../Services/Candidate/useApplyJob";

import Loader from "./Loader";
import ErrorMsg from "./ErrorMsg";
import { useUserinfo } from "../Context/AuthContext";
import { useCandidateHistory } from "../Services/Candidate/useCandidateHistory";
import { BASE_URL, BASE_URL_IMG } from "../config/Config";
import { useJobBasket } from "../Services/Candidate/useJobBacket";
import { useParams } from "react-router-dom";

function JobDetails() {
  const { mutate: applyjob, isLoading: load } = useApplyJob();
  const [showModel, setshowModel] = useState(false);
  const { data, isLoading, status, isError } = useJobDetails();
  const { data: jobhistory } = useCandidateHistory();
  const {
    mutate: jobbasket,
    isLoading: basketload,
    isError: basketError,
  } = useJobBasket();

  // Check if the job has already been applied for
  const isApplied = jobhistory?.data?.data?.applications.some(
    (app) => app.job_id === data?.data?.id
  );
  const currenturl = window.location.href;
  console.log(currenturl);
  const shareOnFacebook = () => {
    const url = encodeURIComponent(currenturl); // The URL you want to share
    const fbShareUrl = `https://www.facebook.com/sharer/sharer.php?u=${url}`;

    window.open(fbShareUrl, "_blank", "width=600,height=400");
  };
  const shareOnTwitter = () => {
    const url = encodeURIComponent(currenturl); // The URL you want to share
    const text = encodeURIComponent("Check out this awesome post!"); // Optional text for the tweet
    const twitterShareUrl = `https://twitter.com/intent/tweet?url=${url}&text=${text}`;

    window.open(twitterShareUrl, "_blank", "width=600,height=400");
  };
  const shareOnLinkedIn = () => {
    const url = encodeURIComponent(currenturl); // The URL you want to share
    const linkedinShareUrl = `https://www.linkedin.com/sharing/share-offsite/?url=${url}`;

    window.open(linkedinShareUrl, "_blank", "width=600,height=400");
  };
  const { user_type } = useUserinfo();
  if (isLoading) return <Loader style="h-screen" />;
  if (isError)
    return (
      <ErrorMsg ErrorMsg="No Data is Available Please Try Agian later Thank You." />
    );

  return (
    <div className=" ">
      <div className="bg-btn-primary py-8 px-4   lg:py-20">
        <div className="mx-auto w-11/12">
          <div className="flex flex-col md:flex-row justify-between text-white">
            <div className="mb-8 lg:mb-0 py-6 border-b w-full">
              <h1 className="text-xl font-bold">Job Title</h1>
              <h2 className="text-4xl">{data?.data?.title} </h2>
            </div>
            <div className="flex flex-col items-center w-full lg:items-end uppercase mt-4 lg:mt-0">
              <p>Share this Job</p>
              <div className="flex mt-2 gap-4">
                <FaFacebookSquare
                  className="mr-2 text-4xl"
                  onClick={shareOnFacebook}
                />
                <FaTwitter onClick={shareOnTwitter} className="mr-2 text-4xl" />
                <FaLinkedinIn
                  className="mr-2 text-4xl"
                  onClick={shareOnLinkedIn}
                />
              </div>
            </div>
          </div>
          <div className="md:flex justify-between items-center leading-loose">
            <div className="text-white flex flex-col gap-6 text-lg lg:text-xl pt-4 lg:pt-12 xl:pt-20 lg:pr-16 xl:pr-20">
              <p>Position: {data?.data?.contract_type}</p>
              <p>Salary: {data?.data?.rate}</p>
              <p>
                Location:
                {data.data.remote_work
                  ? " Remote "
                  : data?.data?.addresses?.map((val, i) => (
                      <span key={i}> {val.city},</span>
                    ))}
              </p>
              <p>
                Work Eligibility:{" "}
                {data?.data?.work_authorization?.map((val, i) => (
                  <span key={i}> {val}</span>
                ))}
              </p>
              <p>Job ID: {data.data.id}</p>
            </div>
            {user_type === "candidate" && (
              <div className="mt-4 lg:mt-0 flex flex-col lg:gap-4">
                {!isApplied ? (
                  <>
                    <button
                      onClick={() => jobbasket(data.data.id)}
                      className="uppercase text-md flex items-center px-6 text-white bg-[#008000] font-semibold w-full rounded-md py-2 border border-black lg:mb-0 lg:mr-4"
                    >
                      <FaCartPlus className="mr-2" />
                      Add to job basket
                    </button>
                    <br className="lg:hidden" />
                    <button
                      onClick={() =>
                        applyjob({ id: data?.data?.id, method: "POST" })
                      }
                      className="uppercase text-md flex items-center px-6 text-white bg-[#008000] font-semibold rounded-md py-2 border border-black"
                    >
                      <FaSearch className="mr-2" />
                      Apply for this job
                    </button>
                  </>
                ) : (
                  <button
                    className="uppercase text-md flex items-center px-6 text-white bg-gray-500 font-semibold rounded-md py-2 border border-black"
                    disabled
                  >
                    <FaSearch className="mr-2" />
                    Already Applied
                  </button>
                )}
              </div>
            )}
          </div>
        </div>
      </div>
      <div className="py-8 px-4 md:px-6 mx-auto w-11/12">
        <h3>
          <span className="font-semibold">Required Skills</span>:{" "}
          {data?.data?.specializations_skills?.map((val, i) => (
            <span key={i}> {val} ,</span>
          ))}
        </h3>
      </div>
      <div className="border-t pt-8 pb-4 bg-purple-50"></div>
      <div className="bg-purple-50">
        <div className="flex  w-11/12 mx-auto  pb-20 flex-col md:flex-row gap-10">
          <div className=" flex-1">
            <div className="flex flex-col lg:flex-row px-6 py-12">
              <img
                src={
                  data.data.company_image
                    ? BASE_URL_IMG + data.data.company_image
                    : Profile
                }
                alt="/"
                width={150}
              />
              <div className="lg:w-3/4 px-8 mt-4 lg:mt-0 flex flex-col justify-center">
                <div className="font-semibold text-2xl mb-4">
                  {data.data.employer_name}
                </div>
                <div className="flex flex-col gap-2">
                  <p>
                    Candidates Applied on this job :{" "}
                    {data.data.applications_count}
                  </p>
                </div>
              </div>
            </div>
            <div className="border-t pt-8 pb-4"></div>
            <div className="flex flex-col gap-4">
              <div className="px-8 text-3xl font-semibold text-gray-900">
                <h4>Job Description</h4>
              </div>
              <div className="px-8">
                <p>{data.data.job_description}</p>
              </div>
            </div>
          </div>
          <div className="flex-1    flex md:justify-end ">
            <div className="  w-11/12 md:w-full   lg:w-2/3  mx-auto md:mx-0">
              <SimilarJobs />
            </div>
          </div>
        </div>
      </div>
      {showModel && <JobSubmitForm setshowModel={setshowModel} />}
    </div>
  );
}

export default JobDetails;
