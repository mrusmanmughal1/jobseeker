import React from 'react'
import { FaCalendarCheck } from 'react-icons/fa';
import { BsPersonWorkspace } from "react-icons/bs";
import { FaUserGraduate } from "react-icons/fa";
import { BsBriefcaseFill } from "react-icons/bs";
const AdminTopWidgets = () => {
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
  return (
    <div className="">
    <div className="flex  justify-between flex-col md:flex-row gap-8 flex-wrap   md:px-10  ">
      {Raw?.map((val, i) => {
        const { title, number, icons } = val;
        return (
          <div
            className="bg-white rounded-md p-8    hover:bg-purple-200 flex-col flex gap-3 font-semibold       shadow-lg border-purple-950"
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
  )
}

export default AdminTopWidgets