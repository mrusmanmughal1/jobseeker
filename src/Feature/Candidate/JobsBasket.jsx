import { FaEarthAmericas } from "react-icons/fa6";
import { FaCheck } from "react-icons/fa";
import { ImCross } from "react-icons/im";
import { useGetBasket } from "../../Services/Candidate/useGetBasket";
import ErrorMsg from "../../UI/ErrorMsg";
import Loader from "../../UI/Loader";
import { useApplyJob } from "../../Services/Candidate/useApplyJob";
import { useClearJobBasket } from "../../Services/Candidate/useClearJobBasket";
import { useUserinfo } from "../../Context/AuthContext";
import MiniLoader from "../../UI/MiniLoader";
import { useState } from "react";
const JobsBasket = () => {
  const { user_type } = useUserinfo();
  const { data, isLoading, isError } = useGetBasket();
  const { mutate: apply, isPending } = useApplyJob();
  const { mutate: clear, isPending: loadclear } = useClearJobBasket();

  const [ApplyLoad, setApplyLoad] = useState();
  const [RejectLoad, setRejectLoad] = useState();
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

  const handleApply = (jobId) => {
    setLoadingJobId(jobId);
    apply({ id: jobId, method: "POST" }).finally(() => setLoadingJobId(null));
  };

  const handleClear = (jobId) => {
    setLoadingJobId(jobId);
    clear(jobId).finally(() => setLoadingJobId(null));
  };
  return (
    <div className="rounded-md border md:w-11/12  max-w-full mx-auto ">
      <div className=" font-semibold  text-sm md:text-sm  gap-2   justify-between bg-gray-200 flex   p-3  px-4  md:px-10 ">
        <div className=" ">Job Title </div>
        <div className=" "> Job Type </div>
        <div className=" "> Date Added </div>

        <div className=" ">Actions</div>
      </div>
      {reversedResults.map((val, i) => {
        const date = new Date(val.date_added);

        // Format date and time
        const formattedDate = date.toLocaleDateString();
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
                    <FaEarthAmericas />{" "}
                    {val.addresses.map((val, i) => (
                      <span>{val.city} ,</span>
                    ))}
                  </div>
                </div>
                <div className="      text-btn-primary text-xs lg:text-sm">
                  {val.contract_type}
                </div>
              </div>
              <div className="  w-1/4 md:w-[30%] text-end  text-sm  italic text-gray-400">
                {formattedDate}
              </div>
              <div className="  w-1/4 md:w-[30%]   flex justify-end md:justify-end pe-2 md:pe-4 gap-1 lg:gap-3">
                <button
                  onClick={() => {
                    setApplyLoad(val.id);
                    apply({ id: val.id, method: "POST" });
                  }}
                  disabled={isPending}
                  className="bg-green-500 lg:px-6 px-2 text-white  text-sm py-2 rounded-md"
                >
                  {isPending && ApplyLoad == val.id ? (
                    <MiniLoader color="bg-green-700" />
                  ) : (
                    <FaCheck />
                  )}
                </button>
                <button
                  disabled={loadclear}
                  onClick={() => {
                    setRejectLoad(val.id);
                    clear(val.id);
                  }}
                  className="bg-red-500 lg:px-6 px-2 text-white  text-sm py-2 rounded-md"
                >
                  {loadclear && RejectLoad == val.id ? (
                    <MiniLoader color="bg-red-700" />
                  ) : (
                    <ImCross />
                  )}
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
