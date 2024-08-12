import JobSearchbar from "./JobSearchbar";
import { Parallax } from "react-parallax";
import bgimp from "../assets/jobsshopper_banner.webp";
import { useEffect, useState } from "react";
import MainSearchBox from "./MainSearchBox";
const SearchJobsMain = () => {
  const style = {
    backgroundSize: "cover", // Ensure the background image covers the entire container
    backgroundPosition: "center", // Center the background image
    height: "100vh",
  };

  const [isVisible, setIsVisible] = useState(false);

  // Set isVisible to true when the component mounts
  useEffect(() => {
    setIsVisible(true);
  }, []);
  return (
    <div className="search-Main">
      <Parallax
        bgImage={bgimp}
        style={style}
        strength={90}
        className="main-banner"
      >
        <div className=" py-20 px-8   flex flex-col gap-2    items-center">
          <p className="text-2xl font-medium   text-center">
            Join us & Explore Thousands of Jobs
          </p>
          <p className="text-sm  text-center hidden sm:block  ">
            Select your industry and/or type your keyword, then click search to
            find your perfect job
          </p>
          <div
            className={`
          
          ${
            isVisible
              ? "transition-transform transform translate-y-0 duration-1000 ease-out"
              : "transition-transform transform translate-y-full duration-500 ease-in"
          }
          
          `}
          >
            <MainSearchBox />
          </div>
        </div>
      </Parallax>
    </div>
  );
};

export default SearchJobsMain;
