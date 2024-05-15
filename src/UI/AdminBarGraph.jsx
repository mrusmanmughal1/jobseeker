import { Bar, Doughnut, Line } from "react-chartjs-2";


const AdminBarGraph = () => {
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
    <div className=" w-full h-80  flex justify-center bg-white rounded-md shadow-lg p-8 ">
    {/* bar chart  */}
    <Bar
      data={{
        labels: SourceData.map((data) => data.label),
        datasets: [
          {
            label: "Total Count Graph ",
            data: SourceData.map((data) => data.value),
            backgroundColor: [
              "rgba(43, 63, 229, 99)",
              "rgba(250, 192, 19, 10)",
              "rgba(253, 135, 135, 1)",
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
  )
}
 
export default AdminBarGraph