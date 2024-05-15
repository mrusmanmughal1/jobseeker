/* eslint-disable no-unused-vars */
import React from "react";
import ImageBanner from "./ImageBanner";

const JobsBySector = () => {
  const alphabets = [
    "a",
    "b",
    "c",
    "d",
    "e",
    "f",
    "g",
    "h",
    "i",
    "j",
    "k",
    "l",
    "m",
    "n",
    "o",
    "p",
    "q",
    "r",
    "s",
    "t",
    "u",
    "v",
    "w",
    "x",
    "y",
    "z",
  ];

  const arb = [
    { alb: "A", title: "Accounting", num: 990, age: 0 },
    { alb: "B", title: "Banking", num: 909 },
    { alb: "C", title: "Cyber Security Analyst", num: 90 },
    { alb: "D", title: "Design", num: 90 },
    { alb: "E", title: "Education", num: 90 },
    { alb: "F", title: "Finance", num: 90 },
    { alb: "G", title: "Graduate", num: 90 },
    { alb: "H", title: "Human Resource Manager", num: 90 },
    { alb: "I", title: "IT", num: 90 },
    { alb: "J", title: "Journalist", num: 90 },
    { alb: "K", title: "Kitchen Assistant", num: 90 },
    { alb: "L", title: "Legal", num: 90 },
    { alb: "M", title: "Manufacturing", num: 90 },
    { alb: "N", title: "Network Engineer", num: 90 },
    { alb: "O", title: "Office Manager", num: 90 },
    { alb: "P", title: "Public Sector", num: 90 },
    { alb: "R", title: "Retail", num: 90 },
    { alb: "S", title: "Sales", num: 90 },
    { alb: "T", title: "Technical Specialist", num: 90 },
    { alb: "U", title: "Utilities Manager", num: 90 },
    { alb: "V", title: "Validation Engineer", num: 90 },
    { alb: "W", title: "Web Content writer", num: 90 },
    { alb: "X", title: "X-ray Engineer", num: 90 },
    { alb: "Y", title: "Yard Engineer", num: 90 },
    { alb: "Z", title: "Zoologist", num: 90 },
  ];

  alphabets.map((v, i) => {
    return v, i;
  });

  return (
    <div>
      <ImageBanner text="Specialisms List" />
      <div className="flex md:gap-8 gap-3 flex-wrap px-10 justify-center pt-20 pb-8">
        {alphabets.map((v, i) => {
          return (
            <p
              key={i}
              className="uppercase text-btn-primary
            "
            >
              {v}
            </p>
          );
        })}
      </div>
      <div className="md:w-3/4 w-11/12 mx-auto pb-12">
        {arb.map((v, i) => {
          return (
            <div className="font-sm text-sm" key={i}>
              <div>
                <span className="bg-btn-primary text-2xl font-semibold p-1 px-3 rounded-md text-white">
                  {v.alb}
                </span>
                <div className="flex py-4">
                  <p className="text-btn-primary">{v.title}</p>({v.num})
                  positions
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default JobsBySector;
