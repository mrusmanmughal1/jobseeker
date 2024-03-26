import CandidateProfile from "../../UI/CandidateProfile";
import FeaturedJobs from "../../UI/FeaturedJobs";
import ImageBanner from "../../UI/ImageBanner";
import JobSearchbar from "../../UI/JobSearchbar";
import SearchFilter from "../../UI/SearchFilter";
import SearchJobsMain from "../../UI/SearchJobsMain";
const arr = [1, 1, 1, 1, 1, 1, 1];
const Candidate = () => {
  return (
    <div>
      <ImageBanner text="Candiatte" />
      <div className="flex gap-20 mt-16 w-11/12 mx-auto">
        <div className="w-1/4">
          <SearchFilter />
          <FeaturedJobs />
        </div>
        <div className=" w-3/4">
          <JobSearchbar />
          {arr.map((val, i) => {
            return (
              <div key={i} className="my-4 w-full">
                <CandidateProfile />
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Candidate;
