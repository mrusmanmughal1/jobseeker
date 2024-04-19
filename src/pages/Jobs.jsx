import { useAllJobs } from "../Services/Jobs/useAllJobs";
import ImageBanner from "../UI/ImageBanner";
import JobsLayout from "../UI/Layouts/JobsLayout";
import Loader from "../UI/Loader";

const Jobs = () => {
  const { data, isLoading, status } = useAllJobs();

  if (isLoading) return <Loader />;
  if (!status) return <Loader />;

  return (
    <div className="bg-slate-50">
      <ImageBanner text={"JOBS"} />
      {data && <JobsLayout />}
    </div>
  );
};

export default Jobs;
