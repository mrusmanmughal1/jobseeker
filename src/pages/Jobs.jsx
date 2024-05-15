import { useAllJobs } from "../Services/Jobs/useAllJobs";
import ErrorMsg from "../UI/ErrorMsg";
import ImageBanner from "../UI/ImageBanner";
import JobsLayout from "../UI/Layouts/JobsLayout";
import Loader from "../UI/Loader";

const Jobs = () => {
  const { data, isLoading, status, isError } = useAllJobs();

  if (isLoading) return <Loader />;
  if (!status) return <Loader />;

  return (
    <div className="bg-slate-50">
      <ImageBanner text={"JOBS"} />
      {isError && (
        <ErrorMsg
          ErrorMsg={
            "Sorry ! Unable To Fetch Data at this Time Try Again Later ."
          }
        />
      )}
      {data && <JobsLayout />}
    </div>
  );
};

export default Jobs;
