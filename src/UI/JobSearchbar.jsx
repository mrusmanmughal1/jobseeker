import { FaSearch } from "react-icons/fa";
import { useEffect, useState } from "react";

const JobSearchbar = () => {
  const [isVisible, setIsVisible] = useState(false);

  // Set isVisible to true when the component mounts
  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <div
      className={`flex-col rounded-sm md:flex sm:flex-row pt-3 px-2 pb-2 md:gap-4 bg-blurr-bg ${
        isVisible
          ? "transition-transform transform translate-y-0 duration-500 ease-out"
          : "transition-transform transform translate-y-full duration-500 ease-in"
      }`}
    >
      <div className="text-sm w-full">
        <p className="text-white"> Job Title </p>
        <div className="flex items-center rounded-md bg-white px-2">
          <FaSearch className="text-btn-primary" />
          <input
            type="text rounded-md"
            className="p-5 pe-16 outline-none w-full rounded-md"
            placeholder="Key Word / Job Title"
          />
        </div>
      </div>
      <div className="text-sm w-full">
        <p className="text-white">Where</p>
        <div className="">
          <input
            type="text   "
            className="p-5 outline-none rounded-md border px-10 w-full"
            placeholder="Location"
          />
        </div>
      </div>
      <div className=" flex flex-col sm:gap-0   gap-4">
        <div className="flex gap-1  items-center mt-2 sm:mt-0 ">
          <input type="checkbox" className="text-black" name="" id="remote" />
          <label htmlFor="remote" className="text-sm text-white">
            Remote Only
          </label>
        </div>
        <button className="px-10 text-sm rounded-md font-bold text-white py-6 bg-[#4e007a]">
          Search
        </button>
      </div>
    </div>
  );
};

export default JobSearchbar;
