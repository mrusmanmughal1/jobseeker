import React from 'react'
import { FaEarthAmericas } from "react-icons/fa6";
// const {data} = useJobHistoryEMp()

const CandidateAppliedJob = () => {
  return (
    <></>
//     <div className="rounded-md border ">
//     <div className=" font-semibold  text-sm md:text-base bg-gray-200 flex p-3 px-5 ">
//       <div className=" w-1/2 md:w-full">Job Title </div>
//       <div className="w-1/3 md:w-1/4 md:text-center"> Date Applied </div>
//       <div className="w-1/3 md:w-1/4 text-end">Status</div>
//     </div>
//     {data?.data?.results.map((val , i) => {
//       return (
//         <div key={i}>
//           <div className="flex items-center py-4  hover:bg-gray-100 border-b ">
//             <div className="md:w-full w-1/2 flex md:flex-row  flex-col  md:items-center justify-between px-4">
//               <div className="flex  text-sm  md:text-base flex-col gap-3">
//                 <div className="font-semibold">{val?.title}</div>
//                 <div className=" flex items-center gap-2 text-xs">
//                   <FaEarthAmericas /> {val?.addresses?.map((val)=> <span>{val.state}</span>)}
//                 </div>
//               </div>
//               <div className="time  hidden md:block  text-btn-primary text-xs md:text-sm">
//               {val.contract_type}
//               </div>
//             </div>
//             <div className="date w-1/4 md:w-1/4 text-center  text-sm  italic text-gray-400">
//               {val.job_posting_deadline}
//             </div>
//             <div className="status w-1/4 md:w-1/4 text-center">
//               <button className="bg-yellow-500 md:px-6 px-2 text-white  text-sm py-2 rounded-md">
//                 {val.status}
//               </button>
//             </div>
//           </div>
//         </div>
//       );
//     })}
//   </div>
  )
}

export default CandidateAppliedJob