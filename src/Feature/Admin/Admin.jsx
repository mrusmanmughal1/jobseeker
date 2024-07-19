import { ArcElement, Chart as ChartJS, Legend, Tooltip } from "chart.js/auto";

import AdminBarGraph from "../../UI/AdminBarGraph";
import AdminDoughnut from "../../UI/AdminDoughnut";
import AdminLineGraph from "../../UI/AdminLineGraph";
import AdminTopWidgets from "../../UI/AdminTopWidgets";
import { useAllCandidates } from "../../Services/Candidate/useCandidateList";
import { useAdminPendingJobs } from "../../Services/admin/useAdminPendingJobs";
import { useAllEmployer } from "../../Services/admin/useAllEmployer";
import Loader from "../../UI/Loader";
import { useJAdminobsList } from "../../Services/admin/useJAdminobsList";

ChartJS.register(ArcElement, Tooltip, Legend);

const Admin = () => {
  const { data: candidates, isLoading: candidatesLoading } = useAllCandidates();
  const { data: pending, isLoading: pendingLoading } = useAdminPendingJobs();
  const { data: allJObs, isLoading: loadingAlljobs } = useJAdminobsList();
  const { data: emp, isLoading: loadingEmployers } = useAllEmployer();
  if (candidatesLoading && pendingLoading && loadingAlljobs && loadingEmployers)
    return <Loader style="h-screen py-20" />;
  return (
    <div>
      <div className="">
        <p className=" pb-4 font-semibold uppercase text-2xl text-center  md:text-start">
          Dashboard
        </p>
      </div>
      {/* Widgets added  */}
      <AdminTopWidgets
        candidates={candidates}
        allJObs={allJObs}
        employer={emp}
        pending={pending}
      />

      {/* Chart js   */}
      <div className=" flex flex-col    md:flex-row md:gap-2 gap-8    lg:gap-14 py-14  ">
        <AdminBarGraph
          candidates={candidates}
          allJObs={allJObs}
          employer={emp}
        />
        {/* / Doughnut */}
        <AdminDoughnut
          candidates={candidates}
          allJObs={allJObs}
          employer={emp}
        />
      </div>
      <div className="">
        <AdminLineGraph
          candidates={candidates}
          allJObs={allJObs}
          employer={emp}
        />
      </div>
    </div>
  );
};

export default Admin;
