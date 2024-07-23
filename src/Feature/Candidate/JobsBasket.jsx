import { FaEarthAmericas } from "react-icons/fa6";
import { FaCheck } from "react-icons/fa";
import { ImCross } from "react-icons/im";
import { useGetBasket } from "../../Services/Candidate/useGetBasket";
import ErrorMsg from "../../UI/ErrorMsg";
import Loader from "../../UI/Loader";
import { useApplyJob } from "../../Services/Candidate/useApplyJob";
const JobsBasket = () => {
  const { data, isLoading, isError } = useGetBasket();
  const { mutate: apply, isLoading: load } = useApplyJob();
  const reversedResults = data?.data?.results
    ? [...data.data.results].reverse()
    : [];

  if (isLoading) return <Loader style="h-screen py-20" />;
  if (isError)
    return (
      <ErrorMsg ErrorMsg="Sorry ! unable to fetch Data right now Please Try Again later " />
    );
  if (data.data.count == 0)
    return <ErrorMsg ErrorMsg=" No Job in the cart right now . . . " />;
  return (
    <div className="rounded-md border md:w-11/12  max-w-full mx-auto ">
      <div className=" font-semibold  text-sm md:text-sm  gap-2   justify-between bg-gray-200 flex   p-3  px-4  md:px-10 ">
        <div className=" ">Job Title </div>
        <div className=" "> Date Added </div>
        <div className=" ">Actions</div>
      </div>
      {reversedResults.map((val, i) => {
        return (
          <>
            <div
              key={i + 3}
              className="flex items-center py-4  justify-between md:text-xs   hover:bg-gray-100 border-b "
            >
              <div className="lg:max-w-full w-2/5 flex lg:flex-row  flex-col  lg:items-center justify-between ps-4">
                <div className="flex  text-sm   lg:text-base flex-col gap-3">
                  <div className="font-semibold">{val.title}</div>
                  <div className=" flex items-center gap-2 text-xs">
                    <FaEarthAmericas /> Lahore , Pakistan
                  </div>
                </div>
                <div className="      text-btn-primary text-xs lg:text-sm">
                  {val.contract_type}
                </div>
              </div>
              <div className="  w-1/4 md:w-[30%] text-center  text-sm  italic text-gray-400">
                {val.date_added}
              </div>
              <div className="  w-1/4 md:w-[30%]   flex justify-end md:justify-end pe-2 md:pe-4 gap-1 lg:gap-3">
                <button
                  onClick={() => apply({ id: val.id, method: "POST" })}
                  className="bg-green-500 lg:px-6 px-2 text-white  text-sm py-2 rounded-md"
                >
                  <FaCheck />
                </button>
                <button
                  onClick={() => apply({ id: val.id, method: "DELETE" })}
                  className="bg-red-500 lg:px-6 px-2 text-white  text-sm py-2 rounded-md"
                >
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
