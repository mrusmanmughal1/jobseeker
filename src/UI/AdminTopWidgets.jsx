import React from "react";
import { FaCalendarCheck } from "react-icons/fa";
import { BsPersonWorkspace } from "react-icons/bs";
import { FaUserGraduate } from "react-icons/fa";
import { BsBriefcaseFill } from "react-icons/bs";
const AdminTopWidgets = () => {
  const Raw = [
    { title: "Total Jobs Posted", number: 9000, icons: <BsBriefcaseFill /> },
    { title: "Total  Employeers", number: 7700, icons: <BsPersonWorkspace /> },
    { title: "Total  Candidates", number: 9080, icons: <FaUserGraduate /> },
    {
      title: "Pending Approvals ",
      number: 9080,
      icons: <FaCalendarCheck />,
    },
  ];
  return (
    <div className="">
      <div className="flex  justify-between flex-col md:flex-row gap-8       ">
        {Raw?.map((val, i) => {
          const { title, number, icons } = val;
          return (
            <div
              className="bg-white   rounded-md p-8 transition-all duration-500 hover:border-purple-400  border-2 hover:bg-purple-300 flex-col flex gap-3 font-semibold   shadow-lg  "
              key={i}
            >
              <p className="font-bold uppercase   text-center text-lg">
                {title}
              </p>
              <p className="text-btn-primary  text-2xl   2xl:text-4xl font-bold flex  justify-center gap-4">
                {number} {icons}
              </p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default AdminTopWidgets;
