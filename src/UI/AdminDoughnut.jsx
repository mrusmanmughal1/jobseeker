import React from "react";
import { Doughnut } from "react-chartjs-2";

const AdminDoughnut = () => {
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
  const DoughnutOptions = {
    responsive: true,
    plugins: {
      legend: {
        position: "bottom",
      },
    },
  };
  return (
    <div className="w-full h-80  bg-white rounded-md shadow-lg   flex justify-center ">
      <Doughnut
        options={DoughnutOptions}
        data={{
          labels: SourceData.map((data) => data.label),
          datasets: [
            {
              label: "Count",
              data: SourceData.map((data) => data.value),
              backgroundColor: [
                "rgba(43, 63, 229, 1)",
                "rgba(250, 192, 19, 1)",
                "rgba(253, 135, 135, 1)",
              ],
              borderColor: [
                "rgba(43, 63, 229, 1)",
                "rgba(250, 192, 19, 1)",
                "rgba(253, 135, 135, 1)",
              ],
            },
          ],
          position: "bottom",
        }}
      />
    </div>
  );
};

export default AdminDoughnut;
