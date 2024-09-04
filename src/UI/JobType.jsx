import { useState } from "react";

const JobType = ({ setsearch, posted_in_last, alljobs }) => {
  return (
    <div className="pb-10">
      <p className="text-purple-900 font-semibold uppercase   ">
        Employment Type
      </p>
      <div className="pb-2 text-black">
        <div className="flex gap-6 pt-1">
          <div className="">
            <input
              type="radio"
              name="a"
              id="contract"
              onChange={() =>
                setsearch({
                  contract_type: "Contract",
                })
              }
            />
          </div>
          <div className="">
            <label htmlFor="contract" name="a" className="text-purple-900">
              Contract ({alljobs.alljobs.data?.contract_type?.Contract})
            </label>
          </div>
        </div>
        <div className="flex gap-6 ">
          <div className="">
            <input
              type="radio"
              id="fulltime"
              name="a"
              onChange={() =>
                setsearch({
                  contract_type: "Full_Time",
                })
              }
            />
          </div>
          <div className="">
            <label htmlFor="fulltime" className="text-purple-900">
              Full Time ({alljobs.alljobs.data?.contract_type?.Full_Time})
            </label>
          </div>
        </div>
        <div className="flex gap-6 ">
          <input
            type="radio"
            id="Internship"
            name="a"
            onChange={() =>
              setsearch({
                contract_type: "Internship",
              })
            }
          />

          <label htmlFor="Internship" name="a" className="text-purple-900">
            Internship ({alljobs.alljobs.data?.contract_type?.Internship})
          </label>
        </div>
        <div className="flex gap-6 ">
          <input
            type="radio"
            id="parttime"
            name="a"
            onChange={() =>
              setsearch({
                contract_type: "Part_Time",
              })
            }
          />

          <label htmlFor="parttime" className="text-purple-900">
            Part Time ({alljobs.alljobs.data?.contract_type?.Part_Time})
          </label>
        </div>
      </div>
      <hr />

      <hr />
      <div className="py-3">
        <p className="text-purple-900 font-semibold  pb-1  ">POSTED DATE</p>
        <div className="text-btn-primary space-y-2 cursor-pointer">
          <div
            className={`${
              posted_in_last == 1 && `border-l-purple-950`
            } border-l-4 ps-3`}
            onClick={() => setsearch({ posted_in_last: 1 })}
          >
            Today
          </div>
          <div
            className={`${
              posted_in_last == 7 && `border-l-purple-950 cursor-pointer`
            } border-l-4 ps-3`}
            onClick={() => setsearch({ posted_in_last: 7 })}
          >
            7 Days Ago
          </div>
          <div
            className={`${
              posted_in_last == 10 && `border-l-purple-950 cursor-pointer`
            } border-l-4 ps-3`}
            onClick={() => setsearch({ posted_in_last: 10 })}
          >
            10 Days Ago
          </div>
        </div>
      </div>
      <hr />
    </div>
  );
};

export default JobType;
