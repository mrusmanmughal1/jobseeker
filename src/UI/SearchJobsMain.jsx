// import bgimg from "../assets";
import JobSearchbar from "./JobSearchbar";
const SearchJobsMain = () => {
  return (
    <div className=" py-12 px-8  main-banner  flex flex-col gap-2    items-center">
      <p className="text-2xl font-medium   text-center">
        Join us & Explore Thousands of Jobs
      </p>
      <p className="text-sm  text-center  ">
        Select your industry and/or type your keyword, then click search to find
        your perfect job
      </p>
      <JobSearchbar />
    </div>
  );
};

export default SearchJobsMain;
