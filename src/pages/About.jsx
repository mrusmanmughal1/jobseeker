import React from "react";
import ImageBanner from "../UI/ImageBanner";
import aboutMap from "../assets/Map.webp";
import icon6 from "../assets/About-Icon-6.png";
import icon5 from "../assets/About-Icon-5.webp";
import icon4 from "../assets/About-Icon-4.webp";
import icon3 from "../assets/About-Icon-3 .webp";
import icon2 from "../assets/About-Icon-2.webp";
import icon1 from "../assets/About-Icon-1.webp";
import countericon1 from "../assets/About-Counter-Icon1.webp";
import countericon2 from "../assets/About-Counter-Icon2.webp";
import countericon3 from "../assets/About-Counter-Icon3.webp";
import countericon4 from "../assets/About-Counter-Icon4.webp";

const About = () => {
  return (
    <div>
      <ImageBanner text={"About Us"} />
      <div className="w-full md:w-11/12 mx-auto flex flex-col md:flex-row items-center md:justify-between mt-8 md:mt-24">
        <div className="py-8 px-4 md:px-10 lg:px-20 flex flex-col gap-4 md:gap-8 md:w-1/2">
          <h1 className="text-4xl font-bold mt-10 md:mt-0 md:ml-0">
            About Recruitment Agency
          </h1>
          <h2 className="text-base md:text-lg lg:text-medium text-gray-800 mt-8">
            Helping people all around the world bag their dream job.
          </h2>
          <div className="mt-4">
            <p className="text-sm leading-loose">
              Welcome to Jobs Shopper, number one source for finding and posting
              job applications. We are dedicated to giving you the absolute best
              experience when it comes to job searching and posting, with a
              focus on simplicity, efficiency, ease of use, and uniqueness. We
              hope you enjoy our simple process as much as we enjoy offering it
              to you. If you have any questions or comments, please do not
              hesitate to contact us.
            </p>
          </div>
        </div>
        <div className="w-full md:w-1/2">
          <img
            src={aboutMap}
            alt="About Us"
            className="max-w-full h-auto mx-auto"
          />
        </div>
      </div>

      <div className=" w-[80%] mx-auto mt-16 ">
        <div className="flex flex-wrap mx-auto justify-center lg:justify-between  ">
          <div className="w-full md:w-1/2 lg:w-1/3 xl:w-1/4 mb-4 px-2">
            <div className="bg-white p-4 rounded-lg hover:shadow-md">
              <div className="flex items-center">
                <img src={icon6} alt="icon-6" />
                <div className="ml-4">
                  <h3 className="text-lg font-semibold text-[#4E007A]">
                    JOB POSTING
                  </h3>
                  <p className="text-sm">
                    Post job openings and find candidates within minutes
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="w-full md:w-1/2 lg:w-1/3 xl:w-1/4 mb-4 px-2">
            <div className="bg-white p-4 rounded-lg hover:shadow-md">
              <div className="flex items-center">
                <img src={icon5} alt="icon-6" />
                <div className="ml-4">
                  <h3 className="text-lg font-semibold text-[#4E007A]">
                    JOB APPLICATION
                  </h3>
                  <p className="text-sm">
                    Apply to multiple job applications that fit your skillset
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="w-full md:w-1/2 lg:w-1/3 xl:w-1/4 mb-4 px-2">
            <div className="bg-white p-4 rounded-lg hover:shadow-md">
              <div className="flex items-center">
                <img src={icon4} alt="icon-6" />
                <div className="ml-4">
                  <h3 className="text-lg font-semibold text-[#4E007A]">
                    CV UPLOAD
                  </h3>
                  <p className="text-sm">
                    Upload your resume to show your experiences and skillsets
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="flex flex-wrap justify-between lg:justify-between  ">
          <div className="w-full md:w-1/2 lg:w-1/3 xl:w-1/4 mb-4 px-2">
            <div className="bg-white p-4 rounded-lg hover:shadow-md">
              <div className="flex items-center">
                <img src={icon3} alt="icon-6" />
                <div className="ml-4">
                  <h3 className="text-lg font-semibold text-[#4E007A]">
                    PROFILES
                  </h3>
                  <p className="text-sm">
                    Set your profile to market your career.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="w-full md:w-1/2 lg:w-1/3 xl:w-1/4 mb-4 px-2">
            <div className="bg-white p-4 rounded-lg hover:shadow-md">
              <div className="flex items-center">
                <img src={icon2} alt="icon-6" />
                <div className="ml-4">
                  <h3 className="text-lg font-semibold text-[#4E007A]">
                    FIND JOBS
                  </h3>
                  <p className="text-sm">
                    Find endless opportunities just a click away.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="w-full md:w-1/2 lg:w-1/3 xl:w-1/4 mb-4 px-2">
            <div className="bg-white p-4 rounded-lg hover:shadow-md">
              <div className="flex items-center">
                <img src={icon1} alt="icon-6" />
                <div className="ml-4">
                  <h3 className="text-lg font-semibold text-[#4E007A]">
                    INDUSTRY SEARCH
                  </h3>
                  <p className="text-sm">
                    Search industry wide for greater results .
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-gray-200 mt-8 md:mt-20 mb-16">
        <div className="bg-gray-200 min-h-[30vh] flex flex-wrap items-center justify-center w-11/12 mx-auto md:p-8">
          <div className="flex w-full items-center md:w-1/2 lg:w-1/3 xl:w-1/4 px-2">
            <div>
              <img
                src={countericon3}
                alt="/"
                className="bg-white rounded-full"
              />
            </div>
            <div className="ml-4">
              <h2 className="text-4xl font-bold text-[#4E007A]">1875</h2>
              <p className="text-gray-700 font-semibold">Candidates</p>
            </div>
          </div>

          <div className="flex w-full items-center md:w-1/2 lg:w-1/3 xl:w-1/4 px-2">
            <div>
              <img
                src={countericon2}
                alt="/"
                className="bg-white rounded-full"
              />
            </div>
            <div className="ml-4">
              <h2 className="text-4xl font-bold text-[#4E007A]">2500</h2>
              <p className="text-gray-700 font-semibold">Applications</p>
            </div>
          </div>

          <div className="flex w-full  items-center md:w-1/2 lg:w-1/3 xl:w-1/4 px-2">
            <div>
              <img
                src={countericon1}
                alt="/"
                className="bg-white rounded-full"
              />
            </div>
            <div className="ml-4">
              <h2 className="text-4xl font-bold text-[#4E007A]">1500</h2>
              <p className="text-gray-700 font-semibold">Job Posted</p>
            </div>
          </div>

          <div className="flex w-full items-center  md:w-1/2 lg:w-1/3 xl:w-1/4 px-2">
            <div>
              <img
                src={countericon4}
                alt="/"
                className="bg-white rounded-full"
              />
            </div>
            <div className="ml-4">
              <h2 className="text-4xl font-bold text-[#4E007A]">12500</h2>
              <p className="text-gray-700 font-semibold">Employed</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
