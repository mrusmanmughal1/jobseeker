import { FaEarthAmericas } from "react-icons/fa6";
import { FaCheck } from "react-icons/fa";
import { ImCross } from "react-icons/im";
const JobsBasket = () => {
  const data = [1, 2];

  return (
    <div className="rounded-md border ">
      <div className=" font-semibold  text-sm md:text-base   bg-gray-200 flex p-3 px-5 ">
        <div className=" w-1/2 md:w-full">Job Title </div>
        <div className="w-1/3 md:w-1/4 md:text-center"> Date Added </div>
        <div className="w-1/3 md:w-1/4 text-center">Action</div>
      </div>
      {data.map((val, i) => {
        return (
          <>
            <div
              key={i}
              className="flex items-center py-4     hover:bg-gray-100 border-b "
            >
              <div className="md:w-full w-1/2 flex md:flex-row  flex-col  md:items-center justify-between px-4">
                <div className="flex  text-sm   md:text-base flex-col gap-3">
                  <div className="font-semibold">React Js Developer</div>
                  <div className=" flex items-center gap-2 text-xs">
                    <FaEarthAmericas /> Lahore , Pakistan
                  </div>
                </div>
                <div className="time  hidden md:block  text-btn-primary text-xs md:text-sm">
                  part Time
                </div>
              </div>
              <div className="date w-1/4 md:w-1/4 text-center  text-sm  italic text-gray-400">
                March 12, 2024
              </div>
              <div className="status w-1/4 md:w-1/4 text-center flex gap-3">
                <button className="bg-green-500 md:px-6 px-2 text-white  text-sm py-2 rounded-md">
                  <FaCheck />
                </button>
                <button className="bg-red-500 md:px-6 px-2 text-white  text-sm py-2 rounded-md">
                  <ImCross />
                </button>
              </div>
            </div>
          </>
        );
      })}
    </div>
  );
};

export default JobsBasket;
