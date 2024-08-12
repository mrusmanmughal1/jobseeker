import { useFormik } from "formik";
import { useScheduleInterview } from "../../Services/Interview/useScheduleInterview";
import { useState } from "react";
import DateTimePicker from "react-datetime-picker";
import { IntervireOnsite } from "../../helpers/Schema/FormValidation";

const InterviewPerson = ({ type = "", applicantID, setinterviewModel }) => {
  const [value, onChange] = useState(new Date());
  const [end, onChangeend] = useState(new Date());

  const initialValues = {
    job_application: applicantID,
    interview_type: type,
    interviewer_name: "",
    interviewer_phone: "",
    location: "",
    date_time_start: value,
    date_time_end: end,
  };
  const { mutate: interview, isLoading, isError } = useScheduleInterview();
  const { values, errors, touched, handleChange, handleSubmit, handleBlur } =
    useFormik({
      initialValues,
      onSubmit: (values, actions) => {
        interview(values, {
          onSuccess: () => {
            setinterviewModel(false);
          },
        });
      }, // validationSchema: IntervireOnsite,
    });
  console.log(applicantID, type);
  return (
    <form onSubmit={handleSubmit} className="py-8 space-y-4">
      <div className="">
        <label className="font-semibold ">
          Interviewer Name
          <span className="text-sm px-2 font-normal">
            Enter Interviewer Name
          </span>
        </label>
        <input
          type="text"
          placeholder="Interviewer Name"
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
          Phone
          <span className="text-sm px-2 font-normal">Enter Phone Number</span>
        </label>
        <input
          type="text"
          placeholder="Enter Phone Number"
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
      <div className="">
        <label className="font-semibold ">
          Location
          <span className="text-sm px-2 font-normal">Enter Location </span>
        </label>
        <input
          type="text"
          placeholder="Enter Location  "
          name="location"
          onChange={handleChange}
          onBlur={handleBlur}
          value={values.location}
          className="py-3 bg-gray-100 px-6 outline-none w-full"
        />
        {errors.location && touched.location && (
          <p className="text-start px-1 text-sm font-semibold text-red-600">
            {errors.location}
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
        <p className="font-semibold ">Interview End Date and time</p>
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
          className="text-white bg-btn-primary px-12 uppercase py-4 rounded-md "
        >
          Confirm{" "}
        </button>
      </div>
    </form>
  );
};

export default InterviewPerson;
