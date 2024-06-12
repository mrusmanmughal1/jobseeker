import { BiSolidRightArrowSquare } from "react-icons/bi";
import { BiSolidLeftArrowSquare } from "react-icons/bi";
import { IoLocation } from "react-icons/io5";
const FeaturedJobs = ({ width }) => {
  const url =
    "https://media.istockphoto.com/id/506351726/photo/recruiter-advertising-for-job-vacancies-searching-candidates-to-hire.jpg?s=1024x1024&w=0&k=20&c=9mZD15PyA2oV91sn442jCaNN1dR-72lRJbXXyv9d360=";
  return (
    <div className=" w-full mx-auto      ">
      <div className="flex items-center  justify-between border-b-2">
        <div className="font-bold">Featured Jobs</div>
        <div className=" flex justify-between py-4 ">
          <span>
            <BiSolidLeftArrowSquare className="text-2xl text-purple-900" />
          </span>
          <span>
            <BiSolidRightArrowSquare className="text-2xl text-purple-900" />
          </span>
        </div>
      </div>
      <div className="   shadow-sm pt-8">
        <div className=" relative">
          <span className="absolute right-0 px-2  text-lg md:text-xs py-1 text-white bg-red-800 rounded-sm ">
            Featured
          </span>
          <img src={url} alt="" className="w-full" />
        </div>
        <div className="border bg-white">
          <div className="flex flex-col gap-3 p-4 ">
            <p className="uppercase font-bold">QA Tester</p>
            <p className="flex gap-2 items-center">
               
              <IoLocation /> remote
            </p>
          </div>
          <div className=" border-t py-4 px-2 text-sm">
            This Job requires automation ..
          </div>
        </div>
      </div>
      <div className=" flex justify-end pt-4">
        <button className="border-2 border-purple-900  text-xs rounded-md font-bold text-purple-900 hover:text-white px-4 py-2 hover:bg-purple-900">
          VIEW MORE
        </button>
      </div>
    </div>
  );
};

export default FeaturedJobs;
