import { BiWorld } from "react-icons/bi";
import { CiClock2 } from "react-icons/ci";
import { FaCartPlus } from "react-icons/fa";
import { GiLetterBomb } from "react-icons/gi";
import { NavLink } from "react-router-dom";

const Job = ({ job = [], rec }) => {
  return (
    <div
      className={`${
        !rec && "shadow-lg  my-4   border-2 "
      } border-b hover:bg-slate-100 bg-white `}
    >
      <div className=" flex flex-col md:flex-row gap-4 p-5  ">
        <div className=" w-full   md:w-1/3 flex flex-col gap-4">
          <p className="uppercase font-bold">{job.title}</p>
          <p className="text-xs flex gap-2 items-center">
            <BiWorld /> {job.addresses.map((val,i)=><span key={i}>{val.city}</span>)}
          </p>
        </div>
        <div className=" w-full md:w-1/3 text-sm p-2">
          <p className="flex gap-2 items-center text-btn-primary ">
            <CiClock2 className="font-extrabold  " /> {job.contract_type}
          </p>
          <div>
            <p className="flex items-start gap-1">
              {" "}
              <GiLetterBomb className="text-gray-500 pt-1 text-lg " /> Salary
              &nbsp;
              {job.rate} Eligibility: {job.work_authorization.map((val,i)=> <span key={i}>{val}</span>)}
            </p>
          </div>
        </div>
        <div className="md:w-1/3  w-full flex  justify-end gap-4  md:flex-row  md: items-center text-purple-900">
          <button className="flex text-xs   font-semibold flex-col items-center px-6 rounded-md py-[0.30rem] border-2 border-purple-900 hover:text-white hover:bg-purple-900">
            <FaCartPlus />
            ADD
          </button>
          <NavLink to={`/job-Details/${job.id}`}>
            <button className=" text-xs    font-semibold lg:px-2  xl:px-6   xl:py-3 px-6 rounded-md py-3 border-2 border-purple-900  hover:text-white hover:bg-purple-900">
              VIEW MORE
            </button>
          </NavLink>
        </div>
      </div>
    </div>
  );
};

export default Job;
