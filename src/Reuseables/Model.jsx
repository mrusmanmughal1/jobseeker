import { FaDownload } from "react-icons/fa";
import { FaEarthAmericas } from "react-icons/fa6";
import { RxCross1 } from "react-icons/rx";
import { FaCheck } from "react-icons/fa";
const Model = ({ Data, Head, setmodel, model }) => {
  console.log(Data);
  return (
    <div
      class={`fixed z-10   top-0 w-full left-0 ${model ? "block" : "hidden"}`}
      id="modal"
    >
      <div class="flex items-center justify-center   pt-4 px-4 pb-20 text-center sm:block sm:p-0">
        <div class="fixed inset-0 transition-opacity">
          <div class="absolute inset-0 bg-gray-900 opacity-75" />
        </div>
        <span class="hidden sm:inline-block sm:align-middle sm:h-screen">
          &#8203;
        </span>
        <div
          class="inline-block align-center   bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle  md:w-1/2  sm:w-full"
          role="dialog"
          aria-modal="true"
          aria-labelledby="modal-headline"
        >
          {/* //table */}
          <div className=" font-semibold  justify-between  text-sm md:text-base bg-white flex p-3 px-5 ">
            {Head.map((val, i) => (
              <div className=" ">{val}</div>
            ))}
          </div>
          <div className="h-96  overflow-y-auto">
            {Data?.data?.jobs_posted?.applications_received?.map((val, i) => {
              return (
                <div key={i}>
                  <div className="flex items-center justify-between py-4  hover:bg-gray-100 border-b ">
                    <div className=" w-full flex md:flex-row  flex-col  md:items-center justify-between px-4">
                      <div className="flex  text-sm  md:text-base flex-col gap-3">
                        <div className="font-semibold">{val?.title}</div>
                        <div className=" flex items-center gap-2 text-xs">
                          <FaEarthAmericas />{" "}
                          {val?.addresses?.map((val) => (
                            <span>{val?.state}</span>
                          ))}
                        </div>
                      </div>
                    </div>
                    <div className=" w-full text-center cursor-pointer   hidden md:block  text-xs md:text-sm">
                      <button className="text-btn-primary font-bold ">
                        <FaDownload />
                      </button>
                    </div>

                    <div className="status w-full text-center">
                      <span
                        className={`${
                          val?.status == "pending"
                            ? "bg-yellow-500 "
                            : "bg-green-500"
                        }  md:px-6 px-2 text-white  text-sm py-2 rounded-md`}
                      >
                        {val.status}
                      </span>
                    </div>
                    <div className="w-full text-end">
                      <button className="bg-green-500 font-semibold p-2 rounded-md text-white me-2">
                        <FaCheck />
                      </button>
                      <button className="bg-red-500 font-semibold p-2 rounded-md text-white me-2 ">
                        <RxCross1 />
                      </button>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          <div class="bg-gray-200 px-4 py-3 text-right">
            <button
              onClick={setmodel}
              type="button"
              class="py-2 px-4 bg-gray-500 text-white rounded hover:bg-gray-700 mr-2"
            >
              <i class="fas fa-times"></i> Close
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Model;
