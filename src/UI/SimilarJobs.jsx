import { BiWorld } from "react-icons/bi";
import { CiClock2 } from "react-icons/ci";
import { useGetSimilarJobs } from "../Services/Jobs/useGetSimilarJobs";
import { NavLink, useParams } from "react-router-dom";
import Loader from "./Loader";
import ErrorMsg from "./ErrorMsg";

const SimilarJobs = () => {
  const { id } = useParams();
  const {
    data: similarJobs,
    isLoading: LoadSimilar,
    isError,
  } = useGetSimilarJobs(id);
  if (LoadSimilar) return <Loader />;
  if (isError || similarJobs.data.count)
    return (
      <div className="border">
        <ErrorMsg ErrorMsg="No Recommendations" />
      </div>
    );
  return (
    <div className="shadow py-8  bg-white rounded-md">
      <div className="text-2xl font-semibold pb-5 px-4">Similar Jobs</div>
      <div className=" border-b border-t">
        {similarJobs?.data?.data.legth == 0 ? (
          <ErrorMsg ErrorMsg="No Similar Job Available" />
        ) : (
          similarJobs?.data.data.results?.slice(0, 5).map((val, i) => {
            return (
              <NavLink to={`/job-Details/${val.id}`} key={val}>
                <div
                  className="flex flex-col hover:cursor-pointer gap-2 p-4 border-b hover:bg-purple-50 hover:border-t-2 hover:border-btn-primary hover:duration-700 hover:border-b-slate-300"
                  key={i}
                >
                  <p className="uppercase font-semibold text-black">
                    {val.title}
                  </p>
                  <div className="flex justify-between">
                    <div className=" text-sm flex  items-center gap-1 text-black">
                      <BiWorld />{" "}
                      {val?.addresses?.map((val) => (
                        <span>{val?.city}</span>
                      ))}
                    </div>
                    <div className=" text-btn-primary flex gap-1 items-center text-sm">
                      {" "}
                      <CiClock2 />
                      {val?.contract_type}
                    </div>
                  </div>
                  <div className="clamp-lines">
                    <p className="text-black clamp-lines">
                      {" "}
                      {val?.job_description}
                    </p>
                  </div>
                </div>
              </NavLink>
            );
          })
        )}
      </div>
      <div className="text-center pt-6">
        <NavLink
          to="/jobs"
          className="bg-btn-primary text-white font-semibold px-4  py-2 rounded-md"
        >
          VIEW MORE{" "}
        </NavLink>
      </div>
    </div>
  );
};

export default SimilarJobs;
