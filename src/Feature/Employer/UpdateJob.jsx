import { useUpdatejob } from "../../Services/Employer/useUpdatejob";
import { useJobDetails } from "../../Services/Jobs/useDetailsjob";
import { useFormik } from "formik";
import { JobPost } from "../../helpers/Schema/FormValidation";
import Select from "react-select";

import { useWorkAuthorization } from "../../Services/General/useWorkAuthorization";
import { useSpecialization } from "../../Services/General/useSpecialization";
import { IoIosAddCircle } from "react-icons/io";
import { IoIosRemoveCircle } from "react-icons/io";
import Loader from "../../UI/Loader";
import ErrorMsg from "../../UI/ErrorMsg";
import MiniLoader from "../../UI/MiniLoader";
import { RxCross2 } from "react-icons/rx";
import { useEffect, useState } from "react";
const UpdateJob = ({ edit, setupdateModel }) => {
  const [data, setdata] = useState();
  const {
    mutate: updatejob,
    isPending,
    isError: errorupdate,
  } = useUpdatejob(data?.id);
  const {
    data: workAuthData,
    isLoading: workLoading,
    isError: error,
  } = useWorkAuthorization();
  const {
    data: specialization,
    isLoading: load,
    status,
    isError,
  } = useSpecialization();

  const {
    title,
    contract_type,
    duration,
    minimum_experience,
    working_hours,
    skill_level,
    rate,
    job_description,
    addresses,
    work_authorization,
    other_work_authorization,
    specializations_skills,
    job_posting_deadline,
  } = data || {};
  const initialValues = {
    contract_type: contract_type,
    title: title,
    remote_work: false,
    addresses: addresses || [],

    duration: duration,
    minimum_experience: minimum_experience,
    working_hours: working_hours,
    skill_level: skill_level,
    rate: rate,
    job_description: job_description,
    work_authorization: work_authorization || [],

    other_work_authorization: other_work_authorization || null,
    specializations_skills: specializations_skills || [],
    job_posting_deadline: job_posting_deadline,
  };
  const {
    values,
    errors,
    touched,
    handleChange,
    handleSubmit,
    handleBlur,
    setFieldValue,
  } = useFormik({
    initialValues,
    onSubmit: async (values, action) => {
      console.log(errors);
      try {
        await updatejob(values);
        // Reset the form after successful job posting
      } catch (error) {
        console.log("first");
      }
    },
    validationSchema: JobPost,
  });

  useEffect(() => {
    if (edit) {
      setdata(edit);
      // Manually reset Formik values
      setFieldValue("contract_type", edit.contract_type || "");
      setFieldValue("title", edit.title || "");
      setFieldValue("remote_work", edit.remote_work || false);
      setFieldValue("addresses", edit.addresses || []);
      setFieldValue("duration", edit.duration || "");
      setFieldValue("minimum_experience", edit.minimum_experience || "");
      setFieldValue("working_hours", edit.working_hours || "");
      setFieldValue("skill_level", edit.skill_level || "");
      setFieldValue("rate", edit.rate || "");
      setFieldValue("job_description", edit.job_description || "");
      setFieldValue("work_authorization", edit.work_authorization || []);
      setFieldValue(
        "other_work_authorization",
        edit.other_work_authorization || ""
      );
      setFieldValue(
        "specializations_skills",
        edit.specializations_skills || []
      );
      setFieldValue("job_posting_deadline", edit.job_posting_deadline || "");
    }
  }, [edit, setFieldValue]);

  const handleAddressChange = (index, e) => {
    const { name, value } = e.target;
    const newAddresses = [...values.addresses];
    newAddresses[index] = { ...newAddresses[index], [name]: value };
    setFieldValue("addresses", newAddresses);
  };
  // Add a new address field
  const handleAddAddress = () => {
    setFieldValue("addresses", [
      ...values.addresses,
      { state: "", city: "", zip_code: "" },
    ]);
    console.log(initialValues);
  };

  // Remove an address field
  const handleRemoveAddress = (index) => {
    setFieldValue(
      "addresses",
      values.addresses.filter((_, i) => i !== index)
    );
  };

  // handle special change
  const handleSpecialChange = (SELECTED) => {
    console.log(SELECTED);
    const selectedValues = SELECTED
      ? SELECTED.map((option) => option.value)
      : [];
    setFieldValue("specializations_skills", selectedValues);
  };

  const handleWorkAuthChange = (SELECTED) => {
    console.log(SELECTED);
    const selectedValues = SELECTED
      ? SELECTED.map((option) => option.value)
      : [];
    setFieldValue("work_authorization", selectedValues);
  };
  if (ErrorMsg) return <ErrorMsg ErrorMsg={"Unable To Fetch Data "} />;
  return (
    <div className="w-full relative p-8 pb-32">
      <div className="text-end ab absolute right-0 -top-1  ">
        <button onClick={() => setupdateModel(false)} className="p-4  text-2xl">
          <RxCross2 />
        </button>
      </div>
      <p className="text-2xl uppercase font-semibold text-btn-primary">
        Update Job{" "}
      </p>

      <form onSubmit={handleSubmit}>
        <div className="flex w-full flex-col  space-y-2 mt-4">
          <p className="  ">Contact Type</p>
          <div className="md:flex grid  grid-cols-2  gap-4">
            <div className="div flex items-center gap-2">
              <input
                type="radio"
                name="contract_type"
                id="Contract"
                value="Contract"
                onChange={handleChange}
                onBlur={handleBlur}
                checked={values.contract_type === "Contract"}
              />
              <label htmlFor="Contract">Contract</label>
            </div>
            <div className="div flex items-center gap-2">
              <input
                type="radio"
                name="contract_type"
                id="ft"
                value="Full Time"
                onChange={handleChange}
                onBlur={handleBlur}
                checked={values.contract_type === "Full Time"}
              />
              <label htmlFor="ft">Full Time</label>
            </div>
            <div className="div flex items-center gap-2">
              <input
                type="radio"
                name="contract_type"
                id="int"
                value="Internship"
                onChange={handleChange}
                onBlur={handleBlur}
                checked={values.contract_type === "Internship"}
              />
              <label htmlFor="int">Internship</label>
            </div>
            <div className="div flex items-center gap-2">
              <input
                type="radio"
                name="contract_type"
                id="pt"
                value="Part Time"
                onChange={handleChange}
                onBlur={handleBlur}
                checked={values.contract_type === "Part Time"}
              />
              <label htmlFor="pt">Part Time</label>
            </div>
          </div>
          {errors.contract_type && touched.contract_type && (
            <p className="text-start px-1 text-sm font-semibold text-red-600">
              {errors.contract_type}
            </p>
          )}

          <div className="w-full space-y-2">
            <p>Job Title</p>
            <input
              type="text"
              className="w-full p-2 py-3 bg-gray-100"
              placeholder="Job Title"
              name="title"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.title}
            />
            {errors.title && touched.title && (
              <p className="text-start px-1 text-sm font-semibold text-red-600">
                {errors.title}
              </p>
            )}
          </div>

          <div className="py-2">
            <p>Remote Work</p>
            <div className="flex gap-4 items-center">
              <input
                type="checkbox"
                name="remote_work"
                id="remote_work"
                onChange={handleChange}
                onBlur={handleBlur}
                checked={values.remote_work}
              />
              <label htmlFor="remote_work">Yes</label>
            </div>
            {errors.remote_work && touched.remote_work && (
              <p className="text-start px-1 text-sm font-semibold text-red-600">
                {errors.remote_work}
              </p>
            )}
          </div>

          {/* Addresses */}
          {!values.remote_work && (
            <div className="space-y-4">
              <p>Job Address</p>
              {values.addresses.map((address, index) => (
                <div
                  key={index}
                  className="flex flex-col md:flex-row gap-2 items-end"
                >
                  {["state", "city", "zip_code"].map((field) => (
                    <div className="md:w-[32%]" key={field}>
                      <div className="flex flex-col gap-3">
                        <label htmlFor={`address-${field}-${index}`}>
                          {field.charAt(0).toUpperCase() + field.slice(1)}
                        </label>
                        <input
                          type="text"
                          id={`address-${field}-${index}`}
                          name={field}
                          className="border p-2 py-3 w-full bg-gray-100"
                          onChange={(e) => handleAddressChange(index, e)}
                          onBlur={handleBlur}
                          value={address[field]}
                        />
                        {touched.addresses?.[index]?.[field] &&
                          errors.addresses?.[index]?.[field] && (
                            <p className="text-start px-1 text-sm font-semibold text-red-600">
                              {errors.addresses[index][field]}
                            </p>
                          )}
                      </div>
                    </div>
                  ))}
                  <div className="flex items-center">
                    {values.addresses.length !== 1 && (
                      <button
                        type="button"
                        onClick={() => handleRemoveAddress(index)}
                        className="bg-red-500 text-white p-2 rounded"
                      >
                        <IoIosRemoveCircle />
                      </button>
                    )}
                  </div>
                </div>
              ))}
              <button
                type="button"
                onClick={handleAddAddress}
                className="bg-blue-500 flex gap-2 items-center text-white p-2 rounded"
              >
                <IoIosAddCircle /> Add More
              </button>
            </div>
          )}

          {/* other  */}

          <div className="flex flex-col gap-4">
            <div>
              <p>Working hours </p>
              <input
                type="text"
                className="w-full p-2 py-3 bg-gray-100"
                placeholder="Enter  working Hours "
                name="working_hours"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.working_hours}
              />
              {errors.working_hours && (
                <p className="text-start px-1 text-sm font-semibold text-red-600">
                  {errors.working_hours}
                </p>
              )}
            </div>
            <div>
              <p>Experience </p>
              <input
                type="text"
                className="w-full p-2 py-3 bg-gray-100"
                placeholder="Enter Your Experience "
                name="minimum_experience"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.minimum_experience}
              />
              {errors.minimum_experience && touched.minimum_experience && (
                <p className="text-start px-1 text-sm font-semibold text-red-600">
                  {errors.minimum_experience}
                </p>
              )}
            </div>
            <div className="w-full">
              <label className=" ">Skill Level</label>
              <select
                name="skill_level"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.skill_level}
                className="block w-full border p-3 bg-gray-100"
              >
                <option>Select Skill Level </option>
                <option value="Beginner">Beginner</option>
                <option value="Intermediate">Intermediate</option>
                <option value="Advance">Advance</option>

                <option value="Expert">Expert</option>
              </select>
              {errors.skill_level && touched.skill_level && (
                <p className="text-start px-1 text-sm font-semibold text-red-600">
                  {errors.skill_level}
                </p>
              )}
            </div>
            <div>
              <p>Duration</p>
              <input
                type="text"
                className="w-full p-2 py-3 bg-gray-100"
                placeholder="Duration"
                name="duration"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.duration}
              />
              {errors.duration && touched.duration && (
                <p className="text-start px-1 text-sm font-semibold text-red-600">
                  {errors.duration}
                </p>
              )}
            </div>
            <div>
              <p>Rate</p>
              <input
                type="number"
                className="w-full p-2 py-3 bg-gray-100"
                placeholder="Rate"
                name="rate"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.rate}
              />
              {errors.rate && touched.rate && (
                <p className="text-start px-1 text-sm font-semibold text-red-600">
                  {errors.rate}
                </p>
              )}
            </div>
            <div>
              <p>Job Description</p>
              <textarea
                cols={4}
                rows={4}
                className="w-full p-2 bg-gray-100"
                placeholder="Job Description"
                name="job_description"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.job_description}
              />
              {errors.job_description && touched.job_description && (
                <p className="text-start px-1 text-sm font-semibold text-red-600">
                  {errors.job_description}
                </p>
              )}
            </div>
            <div>
              <p>Work Authorization</p>

              <Select
                isMulti
                className=""
                onChange={handleWorkAuthChange}
                defaultValue={work_authorization?.map((option) => ({
                  value: option,
                  label: option,
                }))}
                options={workAuthData?.data?.work_authorizations?.map(
                  (option) => ({
                    value: option,
                    label: option,
                  })
                )}
              />

              {errors.work_authorization && touched.work_authorization && (
                <p className="text-start px-1 text-sm font-semibold text-red-600">
                  {errors.work_authorization}
                </p>
              )}
            </div>
            <div>
              <p>Other Work Authorization</p>
              <input
                type="text"
                className="w-full p-2 py-3 bg-gray-100"
                placeholder="Other Work Authorization"
                name="other_work_authorization"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.other_work_authorization}
              />
              {errors.other_work_authorization &&
                touched.other_work_authorization && (
                  <p className="text-start px-1 text-sm font-semibold text-red-600">
                    {errors.other_work_authorization}
                  </p>
                )}
            </div>
            <div>
              <p>Specializations & Skill</p>
              <Select
                isMulti
                className=""
                onChange={handleSpecialChange}
                defaultValue={specializations_skills?.map((option) => ({
                  value: option,
                  label: option,
                }))}
                options={specialization?.data?.specializations?.map(
                  (option) => ({
                    value: option,
                    label: option,
                  })
                )}
              />
              {errors.specializations_skills &&
                touched.specializations_skills && (
                  <p className="text-start px-1 text-sm font-semibold text-red-600">
                    {errors.specializations_skills}
                  </p>
                )}
            </div>
            <div>
              <p>Job Posting Deadline (MM/DD/YYYY)</p>
              <input
                type="date"
                className="w-full p-2 py-3 bg-gray-100"
                name="job_posting_deadline"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.job_posting_deadline}
              />
              {errors.job_posting_deadline && touched.job_posting_deadline && (
                <p className="text-start px-1 text-sm font-semibold text-red-600">
                  {errors.job_posting_deadline}
                </p>
              )}
            </div>
          </div>

          <div className="text-center">
            <button
              disabled={isPending}
              type="submit"
              className="px-8 py-4 rounded-md font-semibold text-white bg-btn-primary"
            >
              {isPending ? <MiniLoader /> : "UPDATE JOB"}
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default UpdateJob;
