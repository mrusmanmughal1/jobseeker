import BrowseBySectors from "../../UI/BrowseBySectors";
import CvUpload from "../../UI/CvUpload";
import FeaturedJobs from "../../UI/FeaturedJobs";
import Job from "../Job";
import JobSearchbar from "../../UI/JobSearchbar";
import JobType from "../../UI/JobType";
import { Userinfo, useUserinfo } from "../../Context/Userinfo";

const JobsLayout = (data = []) => {
  const Jobs = data?.data?.data?.results;
const {user_type} = useUserinfo()
  return (
    <div className="flex lg:flex-row flex-col w-11/12 mx-auto ">
      <div className="pt-4 lg:w-[30%]  lg:order-none order-2">
      {user_type == 'candidates' &&  <CvUpload />}  
        <FeaturedJobs />
        <JobType />
      </div>

      <div className=" w-full   py-8 md:pt-4">
        <div className="   lg:w-3/4 mx-auto ">
          <JobSearchbar />
        </div>
        <div className=" lg:ps-8   mt-8">
          {Jobs?.map((val, i) => (
            <Job job={val} key={i} />
          ))}
        </div>
        <div className="mx-auto lg:w-11/12  ">
          <BrowseBySectors />
        </div>
      </div>
    </div>
  );
};

export default JobsLayout;
