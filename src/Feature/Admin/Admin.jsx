import {
  ArcElement,
  Chart as ChartJS,
  Legend,
  Tooltip,
  defaults,
  plugins,
} from "chart.js/auto";
import { Bar, Doughnut, Line } from "react-chartjs-2";
import { BsPersonWorkspace } from "react-icons/bs";
import { FaUserGraduate } from "react-icons/fa";
import { FaCalendarCheck } from "react-icons/fa";
import { BsBriefcaseFill } from "react-icons/bs";
ChartJS.register(ArcElement, Tooltip, Legend);
const Admin = () => {
  const Raw = [
    { title: "Total Jobs Posted", number: 9000, icons: <BsBriefcaseFill /> },
    { title: "Total  Employeers", number: 7700, icons: <BsPersonWorkspace /> },
    { title: "Total  Candidates", number: 9080, icons: <FaUserGraduate /> },
    {
      title: "Pending  Jobs Approvals ",
      number: 9080,
      icons: <FaCalendarCheck />,
    },
  ];
  const rev = [
    {
      label: "Jan",
      Employees: 64854,
      Candidates: 32652,
      Jobs: 9090,
    },
    {
      label: "Feb",
      Employees: 54628,
      Candidates: 42393,
      Jobs: 9090,
    },
    {
      label: "Mar",
      Employees: 117238,
      Candidates: 50262,
      Jobs: 9090,
    },
    {
      label: "Apr",
      Employees: 82830,
      Candidates: 64731,
      Jobs: 9090,
    },
    {
      label: "May",
      Employees: 91208,
      Candidates: 41893,
      Jobs: 90910,
    },
    {
      label: "Jun",
      Employees: 103609,
      Candidates: 83809,
      Jobs: 90190,
    },
    {
      label: "Jul",
      Employees: 90974,
      Candidates: 44772,
      Jobs: 9090,
    },
    {
      label: "Aug",
      Employees: 82919,
      Candidates: 37590,
      Jobs: 9090,
    },
    {
      label: "Sep",
      Employees: 62407,
      Candidates: 43349,
      Jobs: 91090,
    },
    {
      label: "Oct",
      Employees: 82528,
      Candidates: 45324,
      Jobs: 19090,
    },
    {
      label: "Nov",
      Employees: 56979,
      Candidates: 47978,
      Jobs: 9090,
    },
    {
      label: "Dec",
      Employees: 87436,
      Candidates: 39175,
      Jobs: 9090,
    },
  ];

  const PieData = {
    labels: ["Emploeers", "Jobs Posted", "Candidates"],
    Datasets: [
      { data: [200, 400, 500], backgroundColor: ["red", "green", "blue"] },
    ],
  };

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
    <div>
      <div className="">
        <p className=" pb-4 font-semibold uppercase text-2xl text-center  md:text-start">
          Dashboard
        </p>
      </div>
      {/* Widgets added  */}
      <div className="">
        <div className="flex  justify-between flex-col md:flex-row gap-8   md:px-10  ">
          {Raw?.map((val, i) => {
            const { title, number, icons } = val;
            return (
              <div
                className="bg-white rounded-md p-8  flex-col flex gap-3 font-semibold       shadow-lg border-purple-950"
                key={i}
              >
                <p className="font-bold uppercase text-center text-lg">
                  {title}
                </p>
                <p className="text-btn-primary text-4xl font-bold flex  justify-center gap-4">
                  {number} {icons}
                </p>
              </div>
            );
          })}
        </div>
      </div>

      {/* Chart js   */}

      <div className=" flex flex-col md:flex-row  gap-14 py-14  ">
        <div className=" w-full h-80  flex justify-center bg-white rounded-md shadow-lg p-8 ">
          {/* bar chart  */}
          <Bar
            data={{
              labels: SourceData.map((data) => data.label),
              datasets: [
                {
                  label: "Count",
                  data: SourceData.map((data) => data.value),
                  backgroundColor: [
                    "rgba(43, 63, 229, 0.8)",
                    "rgba(250, 192, 19, 0.8)",
                    "rgba(253, 135, 135, 0.8)",
                  ],
                  borderRadius: 5,
                },
              ],
            }}
            options={{
              plugins: {
                title: {
                  text: "Employees Source",
                },
              },
            }}
          />
        </div>

        {/* / Doughnut */}

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
                    "rgba(43, 63, 229, 0.8)",
                    "rgba(250, 192, 19, 0.8)",
                    "rgba(253, 135, 135, 0.8)",
                  ],
                  borderColor: [
                    "rgba(43, 63, 229, 0.8)",
                    "rgba(250, 192, 19, 0.8)",
                    "rgba(253, 135, 135, 0.8)",
                  ],
                },
              ],
              position: "bottom",
            }}
          />
        </div>
      </div>
      <div className="  bg-white rounded-md shadow-lg  p-8  h-80 flex  ">
        <Line
          data={{
            labels: rev.map((data) => data.label),
            datasets: [
              {
                label: "Employees",
                data: rev.map((data) => data.Employees),
                backgroundColor: "#064FF0",
                borderColor: "#064FF0",
              },
              {
                label: "Candidates",
                data: rev.map((data) => data.Candidates),
                backgroundColor: "#FF3030",
                borderColor: "#FF3030",
              },
              {
                label: "Jobs Posted",
                data: rev.map((data) => data.Jobs),
                backgroundColor: "#FF3030",
                borderColor: "#FF3030",
              },
            ],
          }}
          options={{
            elements: {
              line: {
                tension: 0.5,
              },
            },
            plugins: {
              title: {
                text: "Monthly Employees & Candidates",
              },
            },
          }}
        />
      </div>
    </div>
  );
};

export default Admin;
