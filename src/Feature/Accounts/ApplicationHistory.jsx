import { FaEarthAmericas } from "react-icons/fa6";
import { useJobHistoryEMp } from "../../Services/Employer/useJobHistoryEMp";
import { CiEdit } from "react-icons/ci";
const ApplicationHistory = () => {
  const { data } = useJobHistoryEMp();
  return (
    <div className="rounded-md border ">
      <div className=" font-semibold  text-sm md:text-base bg-gray-200 flex p-3 px-5 ">
        <div className="w-1/3 md:w-1/4 ">Job Title </div>
        <div className="w-1/3 md:w-1/4 md:text-center"> Aplications </div>
        <div className="w-1/3 md:w-1/4 text-end">Status</div>
        <div className="w-1/3 md:w-1/4 text-end"> Action</div>
      </div>
      {data?.data?.results.map((val, i) => {
        return (
          <div key={i}>
            <div className="flex items-center justify-between py-4  hover:bg-gray-100 border-b ">
              <div className="md:w- w-1/2 flex md:flex-row  flex-col  md:items-center justify-between px-4">
                <div className="flex  text-sm  md:text-base flex-col gap-3">
                  <div className="font-semibold">{val?.title}</div>
                  <div className=" flex items-center gap-2 text-xs">
                    <FaEarthAmericas />{" "}
                    {val?.addresses?.map((val) => (
                      <span>{val.state}</span>
                    ))}
                  </div>
                </div>
                <div className="   hidden md:block  text-xs md:text-sm">
                  View Applications{" "}
                  <span className="text-btn-primary ">
                    {" "}
                    ( {val.contract_type} )
                  </span>
                </div>
              </div>

              <div className="status w-1/4 md:w-1/4 text-center">
                <span
                  className={`${
                    val.status == "pending" ? "bg-yellow-500 " : "bg-green-500"
                  }  md:px-6 px-2 text-white  text-sm py-2 rounded-md`}
                >
                  {val.status}
                </span>
              </div>
              <div className="">
                <button className="bg-green-500 font-semibold p-2 rounded-md text-white me-4">
                  <CiEdit />
                </button>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default ApplicationHistory;
