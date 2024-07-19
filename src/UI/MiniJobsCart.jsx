import { IoCartSharp } from "react-icons/io5";
import { FaTelegramPlane } from "react-icons/fa";
import { useGetBasket } from "../Services/Candidate/useGetBasket";
import { BsStopwatch } from "react-icons/bs";
import MiniLoader from "./MiniLoader";
import { FiMapPin } from "react-icons/fi";
import { SlBasket } from "react-icons/sl";
import { NavLink } from "react-router-dom";
const MiniJobsCart = () => {
  const { data, isLoading, isError } = useGetBasket();
  if (isLoading) return <MiniLoader />;
  const reversedResults = data?.data?.results
    ? [...data.data.results].reverse()
    : [];
  if (data?.data?.results?.length == 0)
    return (
      <div className="font-semibold pb-4">
        {" "}
        <p>Jobs Cart</p>
        <p className="bg-gray-50 p-2 flex gap-2 text-blackx">
          <SlBasket /> No jobs in cart
        </p>
      </div>
    );
  if (isError)
    return (
      <div className="font-semibold pb-4">
        {" "}
        <p>Jobs Cart</p>
        <p className="bg-gray-50 p-2 flex gap-2 text-blackx">
          <SlBasket /> Try Later..{" "}
        </p>
      </div>
    );
  return (
    <div>
      <div className=" ">
        <div className="font-semibold pb-4  "> JOBS IN YOUR CART</div>
        <div className="h-60 overflow-y-scroll">
          {reversedResults.map((val) => {
            return (
              <div className=" flex flex-col gap-1 bg-slate-100 p-2 ps-4 mb-2">
                <p className="uppercase font-semibold font-sm ">{val?.title}</p>
                <p className="text-xs text-black flex items-center gap-2">
                  <FiMapPin />{" "}
                  {val?.addresses?.map((val) => (
                    <span>{val.city} , </span>
                  ))}
                </p>
                <p className="text-xs">
                  {val?.remote_work && <span>Remote</span>}
                </p>
                <p className="text-xs flex gap-2 text-btn-primary font-medium">
                  <BsStopwatch /> Contract
                </p>
              </div>
            );
          })}
        </div>
        <div className="flex justify-around text-white py-4 uppercase font-semibold">
          <NavLink
            to="dashboard/jobs-basket"
            className="bg-btn-primary  text-white px-4 py-3 rounded-md uppercase  flex items-center gap-3"
          >
            <IoCartSharp /> Basket
          </NavLink>
          <button className="bg-btn-primary px-4 py-3 rounded-md flex items-center uppercase gap-3">
            <FaTelegramPlane /> Clear
          </button>
        </div>
      </div>
    </div>
  );
};

export default MiniJobsCart;
