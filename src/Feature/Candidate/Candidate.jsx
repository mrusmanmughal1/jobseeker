import { NavLink } from "react-router-dom";
import CandidateProfile from "../../UI/CandidateProfile";
import FeaturedJobs from "../../UI/FeaturedJobs";
import ImageBanner from "../../UI/ImageBanner";
import JobSearchbar from "../../UI/JobSearchbar";
import SearchFilter from "../../UI/SearchFilter";
import { useAllCandidates } from "../../Services/Candidate/useCandidateList";
import Loader from "../../UI/Loader";

const Candidate = () => {
  const { data, isLoading, status, isError } = useAllCandidates();
  if (isLoading) return <Loader />;
  return (
    <div className=" bg-purple-50">
      <ImageBanner text="Candidates List" />
      <div className="flex flex-col  lg:flex-row gap-10 mt-16 w-11/12 mx-auto  ">
        <div className="w-full lg:w-[30%] order-2 lg:order-none ">
          <SearchFilter />
          <FeaturedJobs />
        </div>
        <div className=" w-full lg:w-[70%]">
          <JobSearchbar />
          {data?.data?.data.map((val, i) => {
            return (
              <div key={i} className="my-4 w-full pt-5">
                <NavLink to="/Details">
                  <CandidateProfile candidateData={val} />
                </NavLink>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Candidate;
