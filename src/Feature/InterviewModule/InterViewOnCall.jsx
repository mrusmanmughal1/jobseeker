import { useFormik } from "formik";
import { IntervireOnCall } from "../../helpers/Schema/FormValidation";
import DateTimePicker from "react-datetime-picker";
import { useState } from "react";
import { useScheduleInterview } from "../../Services/Interview/useScheduleInterview";

const InterViewOnCall = ({ type, applicantID }) => {
  const [value, onChange] = useState(new Date());
  const [end, onChangeend] = useState(new Date());

  const initialValues = {
    job_application: applicantID,
    interview_type: type,
    interviewer_name: "",
    interviewer_phone: "",
    date_time_start: value,
    date_time_end: end,
  };
  const { mutate: interview, isLoading, isError } = useScheduleInterview();
  const { values, errors, touched, handleChange, handleSubmit, handleBlur } =
    useFormik({
      initialValues,
      onSubmit: (values, action) => {
        interview(values, {
          onSuccess: () => {
            setinterviewModel(false);
          },
        });
      },
      validationSchema: IntervireOnCall,
    });

  return (
    <form onSubmit={handleSubmit} className="py-6 space-y-5">
      <div className=" ">
        <label className="font-semibold ">
          Interviewer name
          <span className="text-sm px-2 font-normal">
            Enter Interviewer name
          </span>
        </label>
        <input
          type="text"
          placeholder=" Interviewer Name"
          name="interviewer_name"
          onChange={handleChange}
          onBlur={handleBlur}
          value={values.interviewer_name}
          className="py-3 bg-gray-100 px-6 outline-none w-full"
        />
        {errors.interviewer_name && touched.interviewer_name && (
          <p className="text-start px-1 text-sm font-semibold text-red-600">
            {errors.interviewer_name}
          </p>
        )}
      </div>
      <div className="">
        <label className="font-semibold ">
          Phone Number
          <span className="text-sm px-2 font-normal">Enter Phone Number</span>
        </label>
        <input
          type="text"
          placeholder="Phone Number"
          name="interviewer_phone"
          onChange={handleChange}
          onBlur={handleBlur}
          value={values.interviewer_phone}
          className="py-3 bg-gray-100 px-6 outline-none w-full"
        />
        {errors.interviewer_phone && touched.interviewer_phone && (
          <p className="text-start px-1 text-sm font-semibold text-red-600">
            {errors.interviewer_phone}
          </p>
        )}
      </div>

      <div className="w-full">
        <p className="font-semibold ">Interview Start Date and time</p>
        <DateTimePicker
          className="w-full bg-gray-100 my-1"
          name="date_time_start"
          onChange={onChange}
          value={value}
        />
      </div>
      <div className="w-full">
        <p className="font-semibold ">Interview Start Date and time</p>
        <DateTimePicker
          className="w-full bg-gray-100 my-1"
          name="date_time_start"
          onChange={onChangeend}
          value={end}
        />
      </div>
      <div className="text-center">
        <button
          type="submit"
          className="bg-btn-primary text-white  px-12 uppercase py-4 rounded-md"
        >
          Confirm
        </button>
      </div>
    </form>
  );
};

export default InterViewOnCall;
