import BrowseBySectors from "../UI/BrowseBySectors";
import CvUpload from "../UI/CvUpload";
import FeaturedJobs from "../UI/FeaturedJobs";
import ImageBanner from "../UI/ImageBanner";
import Job from "../UI/Job";
import JobSearchbar from "../UI/JobSearchbar";
import JobType from "../UI/JobType";

const Jobs = () => {
  const job = [1, 1, 1, 1, 1, 1];
  return (
    <div>
      <ImageBanner text={"JOBS"} />
      <div className="flex lg:flex-row flex-col w-11/12 mx-auto bg-slate-50">
        <div className="pt-4  md:order-none order-2">
          <CvUpload />
          <FeaturedJobs />
          <JobType />
        </div>

        <div className=" w-full   py-8 md:pt-4">
          <div className="   md:w-3/4 mx-auto ">
            <JobSearchbar />
          </div>
          <div className=" md:px-8   mt-8">
            {job.map((val, i) => (
              <Job jobs={true} key={i} />
            ))}
          </div>
          <BrowseBySectors />
        </div>
      </div>
    </div>
  );
};

export default Jobs;
