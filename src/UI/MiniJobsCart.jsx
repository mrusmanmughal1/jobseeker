import { IoCartSharp } from "react-icons/io5";
import { FaTelegramPlane } from "react-icons/fa";
const MiniJobsCart = () => {
  return (
    <div>
      <div className="">
        <div className="font-semibold pb-4 text-xl"> JOBS IN YOUR CART</div>

        <div className=" flex flex-col gap-1 bg-slate-50 py-2">
          <p className="uppercase font-semibold font-sm ">
            JAVASCRIPT DEVELOPER{" "}
          </p>
          <p className="text-xs">Remote</p>
          <p className="text-xs">Contract</p>
        </div>
        <div className="flex justify-around text-white py-4 uppercase font-semibold">
          <button className="bg-btn-primary px-4 py-3 rounded-md uppercase  flex items-center gap-3">
            <IoCartSharp /> Basket
          </button>
          <button className="bg-btn-primary px-4 py-3 rounded-md flex items-center uppercase gap-3">
            <FaTelegramPlane /> Clear
          </button>
        </div>
      </div>
    </div>
  );
};

export default MiniJobsCart;
