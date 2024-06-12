import { useFormik } from "formik";
import { JobPost } from "../helpers/Schema/FormValidation";
import { useJobPost } from "../Services/JobPost/useJobPost";

const NewPost = () => {
  const initialValues = {
    contract_type: "",
    title: "",
    remote_work: false,
    addresses: "",
    JobCity: "",
    ZipCode: "",
    duration: "",
    rate: "",
    job_description: "",
    WorkAuthority: "",
    OtherWorkAuthority: "",
    Specilization: "",
    job_posting_deadline: "",
  };

  const { mutate: PostJob, isLoading } = useJobPost();

  const { values, errors, touched, handleChange, handleSubmit, handleBlur } =
    useFormik({
      initialValues,
      onSubmit: (values, action) => {
        console.log(values);
        PostJob(values);
        // action.resetForm();
      },
      validationSchema: JobPost,
    });
  return (
    // <div className="w-full md:w-3/5">
    //   <form action="">
    //     <div className="flex w-full flex-col gap-4">
    //       <p className="mb-4 font-semibold uppercase text-2xl">Contact Type</p>
    //       <div className="md:flex grid  grid-cols-2  gap-4">
    //         <div className="div flex items-center gap-2">
    //           <input type="radio" name="contract_type" id="Contract" />
    //           <label htmlFor="Contract">Contract</label>
    //         </div>
    //         <div className="div flex items-center gap-2">
    //           <input
    //             type="radio"
    //             name="contract_type"
    //             id="ft"
    //             className="bg-gray-100"
    //           />
    //           <label htmlFor="ft">Full Time</label>
    //         </div>

    //         <div className="div flex items-center gap-2">
    //           <input type="radio" name="contract_type" id="int" />
    //           <label htmlFor="int">Internshop </label>
    //         </div>

    //         <div className="div flex items-center gap-2">
    //           <input type="radio" name="contract_type" id="pt" />
    //           <label htmlFor="pt">Part Time</label>
    //         </div>
    //       </div>
    //       <div className=" w-full space-y-2">
    //         <p>Job Title</p>

    //         <input
    //           type="text"
    //           className="w-full p-2  bg-gray-100"
    //           placeholder="Job Title"
    //         />
    //       </div>
    //       <div className=" py-2">
    //         <p>Remote Work </p>
    //         <div className="flex gap-4">
    //           <input type="checkbox" name="" id="" />
    //           Yes
    //         </div>
    //       </div>
    //       <div className="flex flex-col md:flex-row gap-2">
    //         <div className="md:w-[32%]">
    //           <div className="flex   flex-col gap-3">
    //             <label htmlFor="">Job Address</label>
    //             <input type="text" className="border p-2 w-full bg-gray-100" />
    //           </div>
    //         </div>
    //         <div className="md:w-[32%]">
    //           <div className="flex   flex-col gap-3">
    //             <label htmlFor="">City</label>
    //             <input
    //               type="text"
    //               placeholder="CIty"
    //               className="border p-2 w-full bg-gray-100"
    //             />
    //           </div>
    //         </div>
    //         <div className="md:w-[32%]">
    //           <div className="flex  flex-col gap-3">
    //             <label htmlFor="">City</label>
    //             <input
    //               type="text"
    //               placeholder="CIty"
    //               className="border w-full p-2 bg-gray-100"
    //             />
    //           </div>
    //         </div>
    //       </div>
    //       <div className="div flex flex-col gap-4">
    //         <div className="">
    //           <p>Duration </p>

    //           <input
    //             type="text"
    //             className="w-full p-2 bg-gray-100 "
    //             placeholder="Job Title"
    //           />
    //         </div>
    //         <div className="">
    //           <p>Rate </p>

    //           <input
    //             type="text"
    //             className="w-full p-2 bg-gray-100 "
    //             placeholder="Job Title"
    //           />
    //         </div>
    //         <div className="">
    //           <p>Job Description</p>

    //           <textarea
    //             cols={4}
    //             rows={4}
    //             type="text"
    //             className="w-full p-2 bg-gray-100 "
    //             placeholder="Job Title"
    //           />
    //         </div>
    //         <div className="">
    //           <p>Work Authorization </p>

    //           <input
    //             type="text"
    //             className="w-full p-2 bg-gray-100 "
    //             placeholder="Job Title"
    //           />
    //         </div>
    //         <div className="">
    //           <p>Other Work Authorization</p>

    //           <input
    //             type="text"
    //             className="w-full p-2 bg-gray-100 "
    //             placeholder="Job Title"
    //           />
    //         </div>
    //         <div className="">
    //           <p>Specializations & Skill </p>

    //           <input
    //             type="text"
    //             className="w-full p-2 bg-gray-100 "
    //             placeholder="Job Title"
    //           />
    //         </div>
    //         <div className="">
    //           <p> Job Posting Deadline Select Job Deadline (MM/DD/YYYY). </p>
    //           <input
    //             type="date"
    //             id="birthday"
    //             className="w-full p-2 bg-gray-100 "
    //             name="birthday"
    //           />
    //         </div>
    //       </div>
    //       <div className="  text-center">
    //         <button className="px-8 py-4 rounded-md font-semibold  text-white bg-btn-primary">
    //           {" "}
    //           POST JOB
    //         </button>
    //       </div>
    //     </div>
    //   </form>
    // </div>
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
              className="w-full p-2 bg-gray-100"
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

          <div className="flex flex-col md:flex-row gap-2">
            <div className="md:w-[32%]">
              <div className="flex flex-col gap-3">
                <label htmlFor="addresses">Job Address</label>
                <input
                  type="text"
                  className="border p-2 w-full bg-gray-100"
                  name="addresses"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.addresses}
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
                  type="text"
                  className="border p-2 w-full bg-gray-100"
                  name="JobCity"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.JobCity}
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
                  className="border p-2 w-full bg-gray-100"
                  name="ZipCode"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.ZipCode}
                />
                {errors.ZipCode && touched.ZipCode && (
                  <p className="text-start px-1 text-sm font-semibold text-red-600">
                    {errors.ZipCode}
                  </p>
                )}
              </div>
            </div>
          </div>

          <div className="flex flex-col gap-4">
            <div>
              <p>Duration</p>
              <input
                type="text"
                className="w-full p-2 bg-gray-100"
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
                className="w-full p-2 bg-gray-100"
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
              <input
                type="text"
                className="w-full p-2 bg-gray-100"
                placeholder="Work Authorization"
                name="WorkAuthority"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.WorkAuthority}
              />
              {errors.WorkAuthority && touched.WorkAuthority && (
                <p className="text-start px-1 text-sm font-semibold text-red-600">
                  {errors.WorkAuthority}
                </p>
              )}
            </div>

            <div>
              <p>Other Work Authorization</p>
              <input
                type="text"
                className="w-full p-2 bg-gray-100"
                placeholder="Other Work Authorization"
                name="OtherWorkAuthority"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.OtherWorkAuthority}
              />
              {errors.OtherWorkAuthority && touched.OtherWorkAuthority && (
                <p className="text-start px-1 text-sm font-semibold text-red-600">
                  {errors.OtherWorkAuthority}
                </p>
              )}
            </div>

            <div>
              <p>Specializations & Skill</p>
              <input
                type="text"
                className="w-full p-2 bg-gray-100"
                placeholder="Specializations & Skill"
                name="Specilization"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.Specilization}
              />
              {errors.Specilization && touched.Specilization && (
                <p className="text-start px-1 text-sm font-semibold text-red-600">
                  {errors.Specilization}
                </p>
              )}
            </div>

            <div>
              <p>Job Posting Deadline (MM/DD/YYYY)</p>
              <input
                type="date"
                className="w-full p-2 bg-gray-100"
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
              POST JOB
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default NewPost;
