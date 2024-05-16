import {
  ArcElement,
  Chart as ChartJS,
  Legend,
  Tooltip,
  defaults,
  plugins,
} from "chart.js/auto";

import AdminBarGraph from "../../UI/AdminBarGraph";
import AdminDoughnut from "../../UI/AdminDoughnut";
import AdminLineGraph from "../../UI/AdminLineGraph";
import AdminTopWidgets from "../../UI/AdminTopWidgets";
ChartJS.register(ArcElement, Tooltip, Legend);
const Admin = () => {
  const SourceData = [
    {
      label: "Candidates",
      value: 32,
    },
    {
      label: "Jobs Posted",
      value: 45,
    },
    {
      label: "Employeers",
      value: 23,
    },
  ];

  return (
    <div>
      <div className="">
        <p className=" pb-4 font-semibold uppercase text-2xl text-center  md:text-start">
          Dashboard
        </p>
      </div>
      {/* Widgets added  */}
      <AdminTopWidgets />

      {/* Chart js   */}
      <div className=" flex flex-col    md:flex-row md:gap-2 gap-8    lg:gap-14 py-14  ">
        <AdminBarGraph />
        {/* / Doughnut */}
        <AdminDoughnut />
      </div>
      <div className="">
      <AdminLineGraph />
      </div>
    </div>
  );
};

export default Admin;
