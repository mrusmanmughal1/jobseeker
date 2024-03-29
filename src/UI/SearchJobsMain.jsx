import JobSearchbar from "./JobSearchbar";
import { useEffect, useState } from "react";

const SearchJobsMain = () => {
  const [isVisible, setIsVisible] = useState(false);

  // Set isVisible to true when the component mounts
  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <div className="py-12 px-8 main-banner flex flex-col gap-2 items-center">
      <p
        className={`text-2xl font-medium text-center ${
          isVisible ? "transition-transform transform translate-y-0 opacity-500" : "transition-transform transform -translate-y-full opacity-500"
        }`}
      >
        Join us & Explore Thousands of Jobs
      </p>
      <p
        className={`text-sm text-center ${
          isVisible ? "transition-transform transform translate-y-0 opacity-500" : "transition-transform transform -translate-y-full opacity-500"
        }`}
      >
        Select your industry and/or type your keyword, then click search to find your perfect job
      </p>
      <JobSearchbar />
    </div>
  );
};

export default SearchJobsMain;
