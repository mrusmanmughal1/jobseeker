/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
import React from "react";
import { FaCheck } from "react-icons/fa";
import { RxCross1 } from "react-icons/rx";

const AdminViewJobs = () => {
  return (
    <div className="bg-btn-primary py-8 px-4 lg:py-20">
      <div className="mx-auto w-11/12">
        <div className="flex flex-col md:flex-row justify-between text-white">
          <div className="mb-8 lg:mb-0 py-6 border-b w-full">
            <h1 className="text-xl font-bold">Job Title</h1>
            <h2 className="text-4xl">UI designer</h2>
          </div>
          <div className="flex flex-col items-center w-full lg:items-end uppercase mt-4 lg:mt-0"></div>
        </div>
        <div className="md:flex justify-between items-center leading-loose">
          <div className="text-white flex flex-col gap-6 text-lg lg:text-xl pt-4 lg:pt-12 xl:pt-20 lg:pr-16 xl:pr-20">
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe
              magnam quae facilis eaque vel, praesentium delectus ex, esse illo
              dolorum aut error earum adipisci voluptatum maxime voluptatibus
              cum! Doloribus, laborum.
            </p>
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eos,
              corrupti culpa fuga voluptas voluptates aspernatur laboriosam
              numquam modi dolor facilis id, amet repudiandae tempore debitis
              molestias eaque tempora consectetur commodi.
            </p>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
          </div>
          <div className="mt-4 lg:mt-0 flex flex-col lg:gap-4">
            <button className="uppercase bg-[#008000] w-60 py-2 flex items-center font-bold text-white rounded-md mb-4 lg:mb-0">
              <FaCheck className=" mr-6" />
              Approve the job
            </button>
            <button
              onClick={() => setshowModel(true)}
              className="uppercase bg-[#008000] flex items-center w-60 font-bold text-white rounded-md py-2 "
            >
              <RxCross1 className=" font-bold mr-6" />
              Reject the job
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminViewJobs;
