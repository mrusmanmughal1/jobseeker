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
    //   <form onSubmit={handleSubmit}>
    //     <div className="flex w-full flex-col gap-4">
    //       <p className="mb-4 font-semibold uppercase text-2xl">Contact Type</p>
    //       <div className="md:flex grid  grid-cols-2  gap-4">
    //         <div className="div flex items-center gap-2">
    //           <input
    //             type="radio"
    //             name="contract_type"
    //             id="Contract"
    //             value="Contract"
    //             onChange={handleChange}
    //             onBlur={handleBlur}
    //             checked={values.contract_type === "Contract"}
    //           />
    //           <label htmlFor="Contract">Contract</label>
    //         </div>
    //         <div className="div flex items-center gap-2">
    //           <input
    //             type="radio"
    //             name="contract_type"
    //             id="ft"
    //             value="Full Time"
    //             onChange={handleChange}
    //             onBlur={handleBlur}
    //             checked={values.contract_type === "Full Time"}
    //           />
    //           <label htmlFor="ft">Full Time</label>
    //         </div>
    //         <div className="div flex items-center gap-2">
    //           <input
    //             type="radio"
    //             name="contract_type"
    //             id="int"
    //             value="Internship"
    //             onChange={handleChange}
    //             onBlur={handleBlur}
    //             checked={values.contract_type === "Internship"}
    //           />
    //           <label htmlFor="int">Internship</label>
    //         </div>
    //         <div className="div flex items-center gap-2">
    //           <input
    //             type="radio"
    //             name="contract_type"
    //             id="pt"
    //             value="Part Time"
    //             onChange={handleChange}
    //             onBlur={handleBlur}
    //             checked={values.contract_type === "Part Time"}
    //           />
    //           <label htmlFor="pt">Part Time</label>
    //         </div>
    //       </div>
    //       {errors.contract_type && touched.contract_type && (
    //         <p className="text-start px-1 text-sm font-semibold text-red-600">
    //           {errors.contract_type}
    //         </p>
    //       )}

    //       <div className="w-full space-y-2">
    //         <p>Job Title</p>
    //         <input
    //           type="text"
    //           className="w-full p-2 bg-gray-100"
    //           placeholder="Job Title"
    //           name="title"
    //           onChange={handleChange}
    //           onBlur={handleBlur}
    //           value={values.title}
    //         />
    //         {errors.title && touched.title && (
    //           <p className="text-start px-1 text-sm font-semibold text-red-600">
    //             {errors.title}
    //           </p>
    //         )}
    //       </div>

    //       <div className="py-2">
    //         <p>Remote Work</p>
    //         <div className="flex gap-4 items-center">
    //           <input
    //             type="checkbox"
    //             name="remote_work"
    //             id="remote_work"
    //             onChange={handleChange}
    //             onBlur={handleBlur}
    //             checked={values.remote_work}
    //           />
    //           <label htmlFor="remote_work">Yes</label>
    //         </div>
    //         {errors.remote_work && touched.remote_work && (
    //           <p className="text-start px-1 text-sm font-semibold text-red-600">
    //             {errors.remote_work}
    //           </p>
    //         )}
    //       </div>

    //       <div className="flex flex-col md:flex-row gap-2">
    //         <div className="md:w-[32%]">
    //           <div className="flex flex-col gap-3">
    //             <label htmlFor="addresses">Job Address</label>
    //             <input
    //               type="text"
    //               className="border p-2 w-full bg-gray-100"
    //               name="addresses"
    //               onChange={handleChange}
    //               onBlur={handleBlur}
    //               value={values.addresses}
    //             />
    //             {errors.addresses && touched.addresses && (
    //               <p className="text-start px-1 text-sm font-semibold text-red-600">
    //                 {errors.addresses}
    //               </p>
    //             )}
    //           </div>
    //         </div>
    //         <div className="md:w-[32%]">
    //           <div className="flex flex-col gap-3">
    //             <label htmlFor="JobCity">City</label>
    //             <input
    //               type="text"
    //               className="border p-2 w-full bg-gray-100"
    //               name="JobCity"
    //               onChange={handleChange}
    //               onBlur={handleBlur}
    //               value={values.JobCity}
    //             />
    //             {errors.JobCity && touched.JobCity && (
    //               <p className="text-start px-1 text-sm font-semibold text-red-600">
    //                 {errors.JobCity}
    //               </p>
    //             )}
    //           </div>
    //         </div>
    //         <div className="md:w-[32%]">
    //           <div className="flex flex-col gap-3">
    //             <label htmlFor="ZipCode">Zip Code</label>
    //             <input
    //               type="text"
    //               className="border p-2 w-full bg-gray-100"
    //               name="ZipCode"
    //               onChange={handleChange}
    //               onBlur={handleBlur}
    //               value={values.ZipCode}
    //             />
    //             {errors.ZipCode && touched.ZipCode && (
    //               <p className="text-start px-1 text-sm font-semibold text-red-600">
    //                 {errors.ZipCode}
    //               </p>
    //             )}
    //           </div>
    //         </div>
    //       </div>

    //       <div className="flex flex-col gap-4">
    //         <div>
    //           <p>Duration</p>
    //           <input
    //             type="text"
    //             className="w-full p-2 bg-gray-100"
    //             placeholder="Duration"
    //             name="duration"
    //             onChange={handleChange}
    //             onBlur={handleBlur}
    //             value={values.duration}
    //           />
    //           {errors.duration && touched.duration && (
    //             <p className="text-start px-1 text-sm font-semibold text-red-600">
    //               {errors.duration}
    //             </p>
    //           )}
    //         </div>

    //         <div>
    //           <p>Rate</p>
    //           <input
    //             type="text"
    //             className="w-full p-2 bg-gray-100"
    //             placeholder="Rate"
    //             name="rate"
    //             onChange={handleChange}
    //             onBlur={handleBlur}
    //             value={values.rate}
    //           />
    //           {errors.rate && touched.rate && (
    //             <p className="text-start px-1 text-sm font-semibold text-red-600">
    //               {errors.rate}
    //             </p>
    //           )}
    //         </div>

    //         <div>
    //           <p>Job Description</p>
    //           <textarea
    //             cols={4}
    //             rows={4}
    //             className="w-full p-2 bg-gray-100"
    //             placeholder="Job Description"
    //             name="job_description"
    //             onChange={handleChange}
    //             onBlur={handleBlur}
    //             value={values.job_description}
    //           />
    //           {errors.job_description && touched.job_description && (
    //             <p className="text-start px-1 text-sm font-semibold text-red-600">
    //               {errors.job_description}
    //             </p>
    //           )}
    //         </div>

    //         <div>
    //           <p>Work Authorization</p>
    //           <input
    //             type="text"
    //             className="w-full p-2 bg-gray-100"
    //             placeholder="Work Authorization"
    //             name="WorkAuthority"
    //             onChange={handleChange}
    //             onBlur={handleBlur}
    //             value={values.WorkAuthority}
    //           />
    //           {errors.WorkAuthority && touched.WorkAuthority && (
    //             <p className="text-start px-1 text-sm font-semibold text-red-600">
    //               {errors.WorkAuthority}
    //             </p>
    //           )}
    //         </div>

    //         <div>
    //           <p>Other Work Authorization</p>
    //           <input
    //             type="text"
    //             className="w-full p-2 bg-gray-100"
    //             placeholder="Other Work Authorization"
    //             name="OtherWorkAuthority"
    //             onChange={handleChange}
    //             onBlur={handleBlur}
    //             value={values.OtherWorkAuthority}
    //           />
    //           {errors.OtherWorkAuthority && touched.OtherWorkAuthority && (
    //             <p className="text-start px-1 text-sm font-semibold text-red-600">
    //               {errors.OtherWorkAuthority}
    //             </p>
    //           )}
    //         </div>

    //         <div>
    //           <p>Specializations & Skill</p>
    //           <input
    //             type="text"
    //             className="w-full p-2 bg-gray-100"
    //             placeholder="Specializations & Skill"
    //             name="Specilization"
    //             onChange={handleChange}
    //             onBlur={handleBlur}
    //             value={values.Specilization}
    //           />
    //           {errors.Specilization && touched.Specilization && (
    //             <p className="text-start px-1 text-sm font-semibold text-red-600">
    //               {errors.Specilization}
    //             </p>
    //           )}
    //         </div>

    //         <div>
    //           <p>Job Posting Deadline (MM/DD/YYYY)</p>
    //           <input
    //             type="date"
    //             className="w-full p-2 bg-gray-100"
    //             name="job_posting_deadline"
    //             onChange={handleChange}
    //             onBlur={handleBlur}
    //             value={values.job_posting_deadline}
    //           />
    //           {errors.job_posting_deadline && touched.job_posting_deadline && (
    //             <p className="text-start px-1 text-sm font-semibold text-red-600">
    //               {errors.job_posting_deadline}
    //             </p>
    //           )}
    //         </div>
    //       </div>

    //       <div className="text-center">
    //         <button
    //           type="submit"
    //           className="px-8 py-4 rounded-md font-semibold text-white bg-btn-primary"
    //         >
    //           POST JOB
    //         </button>
    //       </div>
    //     </div>
    //   </form>
    // </div>


     <div className="md:w-3/4">
      <form onSubmit={handleSubmit}>
        <div className="flex flex-col gap-6">
          <div className="">
            <label className="font-semibold ">
              Email
              <span className="text-sm px-2 font-normal">Enter your email</span>
            </label>
            <input
              type="text"
              placeholder="Email"
              name="email"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.email}
              className="py-3 bg-gray-100 px-2 outline-none w-full"
            />
            {errors.email && touched.email && (
              <p className="text-start px-1 text-sm font-semibold text-red-600">
                {errors.email}
              </p>
            )}
          </div>
          <div className="flex md:flex-row flex-col gap-10">
            <div className="">
              <label className="font-semibold ">
                First Name
                <span className="text-sm px-2 font-normal">
                  Enter your first name
                </span>
              </label>
              <input
                type="text"
                placeholder="First Name"
                name="firstName"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.firstName}
                className="py-3 bg-gray-100 px-2 outline-none w-full"
              />
              {errors.firstName && touched.firstName && (
                <p className="text-start px-1 text-sm font-semibold text-red-600">
                  {errors.firstName}
                </p>
              )}
            </div>
            <div className="">
              <label className="font-semibold ">
                Last Name
                <span className="text-sm px-2 font-normal">
                  Enter your last name
                </span>
              </label>
              <input
                type="text"
                placeholder="Last Name"
                name="lastName"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.lastName}
                className="py-3 bg-gray-100 px-2 outline-none w-full"
              />
              {errors.lastName && touched.lastName && (
                <p className="text-start px-1 text-sm font-semibold text-red-600">
                  {errors.lastName}
                </p>
              )}
            </div>
          </div>
          <div className="flex md:flex-row flex-col gap-10">
            <div className="w-full">
              <label className="font-semibold ">
                Gender
                <span className="text-sm px-2 font-normal">
                  Select your gender.
                </span>
              </label>
              <select
                name="gender"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.gender}
                className="block w-full border p-3 bg-gray-100"
              >
                <option value="">Select Gender</option>
                <option value="Male">Male</option>
                <option value="Female">Female</option>
              </select>
              {errors.gender && touched.gender && (
                <p className="text-start px-1 text-sm font-semibold text-red-600">
                  {errors.gender}
                </p>
              )}
            </div>
            <div className="w-full">
              <label className="font-semibold ">
                Date Of Birth
                <span className="text-sm px-2 font-normal">(dd/mm/yyyy)</span>
              </label>
              <input
                type="date"
                name="dateOfBirth"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.dateOfBirth}
                className="py-3 bg-gray-100 px-2 outline-none w-full"
              />
              {errors.dateOfBirth && touched.dateOfBirth && (
                <p className="text-start px-1 text-sm font-semibold text-red-600">
                  {errors.dateOfBirth}
                </p>
              )}
            </div>
          </div>
          <div className="">
            <label className="font-semibold ">
              Address 1
              <span className="text-sm px-2 font-normal">
                Enter your Address 1
              </span>
            </label>
            <input
              type="text"
              placeholder="Address"
              name="address1"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.address1}
              className="py-3 bg-gray-100 px-2 outline-none w-full"
            />
            {errors.address1 && touched.address1 && (
              <p className="text-start px-1 text-sm font-semibold text-red-600">
                {errors.address1}
              </p>
            )}
          </div>
          <div className="">
            <label className="font-semibold ">
              Address 2
              <span className="text-sm px-2 font-normal">
                Enter your Address 2
              </span>
            </label>
            <input
              type="text"
              placeholder="Address"
              name="address2"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.address2}
              className="py-3 bg-gray-100 px-2 outline-none w-full"
            />
            {errors.address2 && touched.address2 && (
              <p className="text-start px-1 text-sm font-semibold text-red-600">
                {errors.address2}
              </p>
            )}
          </div>
          <div className="">
            <label className="font-semibold ">
              City
              <span className="text-sm px-2 font-normal">Enter your City </span>
            </label>
            <input
              type="text"
              placeholder="City"
              name="city"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.city}
              className="py-3 bg-gray-100 px-2 outline-none w-full"
            />
            {errors.city && touched.city && (
              <p className="text-start px-1 text-sm font-semibold text-red-600">
                {errors.city}
              </p>
            )}
          </div>
          <div className="">
            <label className="font-semibold ">
              Country
              <span className="text-sm px-2 font-normal">
                Enter your Country
              </span>
            </label>
            <input
              type="text"
              placeholder="Country"
              name="country"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.country}
              className="py-3 bg-gray-100 px-2 outline-none w-full"
            />
            {errors.country && touched.country && (
              <p className="text-start px-1 text-sm font-semibold text-red-600">
                {errors.country}
              </p>
            )}
          </div>
          <div className="">
            <label className="font-semibold ">
              Phone
              <span className="text-sm px-2 font-normal">
                Enter your Phone Number
              </span>
            </label>
            <input
              type="text"
              placeholder="Phone"
              name="phone"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.phone}
              className="py-3 bg-gray-100 px-2 outline-none w-full"
            />
            {errors.phone && touched.phone && (
              <p className="text-start px-1 text-sm font-semibold text-red-600">
                {errors.phone}
              </p>
            )}
          </div>
          <div className="">
            <label className="font-semibold ">
              Website
              <span className="text-sm px-2 font-normal">
                Enter your Website
              </span>
            </label>
            <input
              type="text"
              placeholder="Website"
              name="website"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.website}
              className="py-3 bg-gray-100 px-2 outline-none w-full"
            />
            {errors.website && touched.website && (
              <p className="text-start px-1 text-sm font-semibold text-red-600">
                {errors.website}
              </p>
            )}
          </div>
          <div className="">
            <label className="font-semibold ">
              About
              <span className="text-sm px-2 font-normal">
                Enter your Description
              </span>
            </label>
            <textarea
              rows="4"
              cols="50"
              type="text"
              placeholder="About"
              name="about"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.about}
              className="py-3 bg-gray-100 px-2 outline-none w-full"
            />
            {errors.about && touched.about && (
              <p className="text-start px-1 text-sm font-semibold text-red-600">
                {errors.about}
              </p>
            )}
          </div>
          <div className="">
            <label className="font-semibold ">Cover Letter</label>
            <input
              type="text"
              placeholder="Cover Letter"
              name="coverLetter"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.coverLetter}
              className="py-3 bg-gray-100 px-2 outline-none w-full"
            />
            {errors.coverLetter && touched.coverLetter && (
              <p className="text-start px-1 text-sm font-semibold text-red-600">
                {errors.coverLetter}
              </p>
            )}
          </div>
          <div className="">
            <label className="font-semibold ">
              Job Interests
              <span className="text-sm px-2 font-normal">
                Select your interests
              </span>
            </label>
            <input
              type="text"
              placeholder="Job Interests"
              name="jobInterests"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.jobInterests}
              className="py-3 bg-gray-100 px-2 outline-none w-full"
            />
            {errors.jobInterests && touched.jobInterests && (
              <p className="text-start px-1 text-sm font-semibold text-red-600">
                {errors.jobInterests}
              </p>
            )}
          </div>
          <div className="">
            <label className="font-semibold ">
              Minimum Salary
              <span className="text-sm px-2 font-normal">
                Set minimum salary ($)
              </span>
            </label>
            <input
              type="text"
              placeholder="Minimum Salary"
              name="minimumSalary"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.minimumSalary}
              className="py-3 bg-gray-100 px-2 outline-none w-full"
            />
            {errors.minimumSalary && touched.minimumSalary && (
              <p className="text-start px-1 text-sm font-semibold text-red-600">
                {errors.minimumSalary}
              </p>
            )}
          </div>
          <div className="">
            <label className="font-semibold ">
              Avatar Image
              <span className="text-sm px-2 font-normal">
                Upload Your Avatar Image
              </span>
            </label>
            <input
              type="file"
              name="avatarImage"
              onChange={(event) => {
                setFieldValue("avatarImage", event.currentTarget.files[0]);
              }}
              onBlur={handleBlur}
              className="py-3 bg-gray-100 px-2 outline-none w-full"
            />
            {errors.avatarImage && touched.avatarImage && (
              <p className="text-start px-1 text-sm font-semibold text-red-600">
                {errors.avatarImage}
              </p>
            )}
          </div>
          <div className="">
            <label className="font-semibold ">
              CV File
              <span className="text-sm px-2 font-normal">
                Upload Your CV File
              </span>
            </label>
            <input
              type="file"
              name="cvFile"
              onChange={(event) => {
                setFieldValue("cvFile", event.currentTarget.files[0]);
              }}
              onBlur={handleBlur}
              className="py-3 bg-gray-100 px-2 outline-none w-full"
            />
            {errors.cvFile && touched.cvFile && (
              <p className="text-start px-1 text-sm font-semibold text-red-600">
                {errors.cvFile}
              </p>
            )}
          </div>
          <div className="">
            <label className="font-semibold ">New Password</label>
            <input
              type="password"
              placeholder="New Password"
              name="newPassword"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.newPassword}
              className="py-3 bg-gray-100 px-2 outline-none w-full"
            />
            {errors.newPassword && touched.newPassword && (
              <p className="text-start px-1 text-sm font-semibold text-red-600">
                {errors.newPassword}
              </p>
            )}
          </div>
          <div className="">
            <label className="font-semibold ">Confirm Password</label>
            <input
              type="password"
              placeholder="Confirm Password"
              name="confirmPassword"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.confirmPassword}
              className="py-3 bg-gray-100 px-2 outline-none w-full"
            />
            {errors.confirmPassword && touched.confirmPassword && (
              <p className="text-start px-1 text-sm font-semibold text-red-600">
                {errors.confirmPassword}
              </p>
            )}
          </div>
        </div>
        <div className=" text-center py-6">
          <button
            type="submit"
            className="bg-btn-primary px-8 py-4 rounded-md text-white font-semibold"
          >
            SAVE CHANGES
          </button>
        </div>
      </form>
    </div>
  );
};

export default NewPost;
