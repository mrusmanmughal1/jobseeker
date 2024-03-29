import JobSearchbar from "./JobSearchbar";
import { Parallax } from "react-parallax";
import bgimp from "../assets/jobsshopper_banner.webp";
const SearchJobsMain = () => {
  const style = {
    backgroundSize: "cover", // Ensure the background image covers the entire container
    backgroundPosition: "center", // Center the background image
    height: "100vh",
  };
  return (
    <Parallax bgImage={bgimp} style={style} strength={90}>
      <div className=" py-20 px-8  main-banner  flex flex-col gap-2    items-center">
        <p className="text-2xl font-medium   text-center">
          Join us & Explore Thousands of Jobs
        </p>
        <p className="text-sm  text-center hidden sm:block  ">
          Select your industry and/or type your keyword, then click search to
          find your perfect job
        </p>
        <JobSearchbar />
      </div>
    </Parallax>
  );
};

export default SearchJobsMain;
