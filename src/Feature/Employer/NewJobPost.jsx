import { useFormik } from "formik";
import { JobPost } from "../../helpers/Schema/FormValidation";
import { useJobPost } from "../../Services/JobPost/useJobPost";
import Select from "react-select";

import { useWorkAuthorization } from "../../Services/General/useWorkAuthorization";
import { useSpecialization } from "../../Services/General/useSpecialization";
import { IoIosAddCircle } from "react-icons/io";
import { IoIosRemoveCircle } from "react-icons/io";
import Loader from "../../UI/Loader";
import ErrorMsg from "../../UI/ErrorMsg";
import MiniLoader from "../../UI/MiniLoader";

const NewPost = () => {
  const initialValues = {
    contract_type: "",
    title: "",
    remote_work: false,
    addresses: [
      {
        state: "",
        city: "",
        zip_code: "",
      },
    ],
    duration: "",
    rate: "",
    job_description: "",
    work_authorization: [],
    other_work_authorization: "",
    specializations_skills: [],
    job_posting_deadline: "",
  };

  
  

  const { mutate: PostJob, isLoading } = useJobPost();

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
    onSubmit: (values, action) => {
      console.log(values);
      PostJob(values);
    },
    validationSchema: JobPost,
  });
  const {
    data,
    isLoading: workLoading,
    isError: error,
  } = useWorkAuthorization();
  const {
    data: specialization,
    isLoading: load,
    status,
    isError,
  } = useSpecialization();

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

  if (load || workLoading) return <Loader style="py-20" />;
  if (isError || error)
    return <ErrorMsg ErrorMsg="Sorry Unable to fetch Data Try Again Later !" />;
  return (
    <div className="w-full md:w-3/5">
      <form onSubmit={handleSubmit}>
        <div className="flex w-full flex-col gap-4">
          <p className="mb-4 font-semibold uppercase text-2xl">Contact Type</p>
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
          {/* <div className="">
            <div className="flex flex-col items-center md:flex-row gap-2">
              <div className="md:w-[32%]">
                <div className="flex flex-col gap-3">
                  <label htmlFor="addresses">Job Address</label>
                  <input
                    type="text"
                    className="border p-2 py-3 w-full bg-gray-100"
                    onChange={(e) => handleChanging(e)}
                    onBlur={handleBlur}
                    name="state"
                    value={state}
                  />
                  {errors.addresses && touched.addresses && (
                    <p className="text-start px-1 text-sm font-semibold text-red-600">
                      {errors.addresses}
                    </p>
                  )}
                </div>
              </div>
              <div className="md:w-[32%]">
                <div className="flex flex-col gap-3">
                  <label htmlFor="JobCity">City</label>
                  <input
                    name="city"
                    value={city}
                    type="text"
                    className="border p-2 py-3 w-full bg-gray-100"
                    onChange={(e) => handleChanging(e)}
                    onBlur={handleBlur}
                  />
                  {errors.JobCity && touched.JobCity && (
                    <p className="text-start px-1 text-sm font-semibold text-red-600">
                      {errors.JobCity}
                    </p>
                  )}
                </div>
              </div>
              <div className="md:w-[32%]">
                <div className="flex flex-col gap-3">
                  <label htmlFor="ZipCode">Zip Code</label>
                  <input
                    type="text"
                    className="border p-2 py-3 w-full bg-gray-100"
                    name="zip_code"
                    onChange={(e) => handleChanging(e)}
                    onBlur={handleBlur}
                    value={zip_code}
                  />
                  {errors.zip_code && touched.zip_code && (
                    <p className="text-start px-1 text-sm font-semibold text-red-600">
                      {errors.zip_code}
                    </p>
                  )}
                </div>
              </div>
              
            </div>

            
          </div> */}
          <div className="space-y-4">
            <p>Job Address</p>
            {values?.addresses?.map((address, index) => (
              <div
                key={index}
                className="flex flex-col md:flex-row   gap-2 items-end"
              >
                <div className="md:w-[32%]">
                  <div className="flex flex-col  gap-3">
                    <label htmlFor={`address-state-${index}`}>State</label>
                    <input
                      type="text"
                      id={`address-state-${index}`}
                      name="state"
                      className="border p-2 py-3 w-full bg-gray-100"
                      onChange={(e) => handleAddressChange(index, e)}
                      onBlur={handleBlur}
                      value={address?.state}
                    />
                    {errors.addresses &&
                      errors.addresses[index] &&
                      errors.addresses[index]?.state && (
                        <p className="text-start px-1 text-sm font-semibold text-red-600">
                          {errors.addresses[index].state}
                        </p>
                      )}
                  </div>
                </div>
                <div className="md:w-[32%]">
                  <div className="flex flex-col gap-3">
                    <label htmlFor={`address-city-${index}`}>City</label>
                    <input
                      type="text"
                      id={`address-city-${index}`}
                      name="city"
                      className="border p-2 py-3 w-full bg-gray-100"
                      onChange={(e) => handleAddressChange(index, e)}
                      onBlur={handleBlur}
                      value={address?.city}
                    />
                    {errors.addresses &&
                      errors.addresses[index] &&
                      errors.addresses[index].city && (
                        <p className="text-start px-1 text-sm font-semibold text-red-600">
                          {errors.addresses[index]?.city}
                        </p>
                      )}
                  </div>
                </div>
                <div className="md:w-[32%]">
                  <div className="flex flex-col gap-3">
                    <label htmlFor={`address-zip_code-${index}`}>
                      Zip Code
                    </label>
                    <input
                      type="text"
                      id={`address-zip_code-${index}`}
                      name="zip_code"
                      className="border p-2 py-3 w-full bg-gray-100"
                      onChange={(e) => handleAddressChange(index, e)}
                      onBlur={handleBlur}
                      value={address.zip_code}
                    />
                    {errors.addresses &&
                      errors.addresses[index] &&
                      errors.addresses[index].zip_code && (
                        <p className="text-start px-1 text-sm font-semibold text-red-600">
                          {errors.addresses[index]?.zip_code}
                        </p>
                      )}
                  </div>
                </div>
                <div className="flex items-center">
                  <button
                    type="button"
                    onClick={() => handleRemoveAddress(index)}
                    className="bg-red-500 text-white p-2 rounded"
                  >
                    <IoIosRemoveCircle />
                  </button>
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

          <div className="flex flex-col gap-4">
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
                type="text"
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
                options={data?.data?.work_authorizations?.map((option) => ({
                  value: option,
                  label: option,
                }))}
              />

              {/* {errors.data.work_authorization &&
                touched.data.work_authorization && (
                  <p className="text-start px-1 text-sm font-semibold text-red-600">
                    {errors.data.work_authorization}
                  </p>
                )} */}
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
                options={specialization.data?.specializations?.map(
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
              type="submit"
              className="px-8 py-4 rounded-md font-semibold text-white bg-btn-primary"
            >
              {isLoading ? <MiniLoader /> : "POST JOB"}
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default NewPost;
