import { useFormik } from "formik";
import { ManageProfileCandidate } from "../../helpers/Schema/FormValidation";
import { useCandidateManageProfile } from "../../Services/Candidate/CandidateManageProfile";
import { useCandidateDetails } from "../../Services/Candidate/useCandidateDetails";
import Select from "react-select";
import Loader from "../../UI/Loader";
import ErrorMsg from "../../UI/ErrorMsg";
import { useSpecialization } from "../../Services/General/useSpecialization";
const ManageCandidateProfile = () => {
  const baseurl = "http://170.187.136.161:8010";

  const { data, isLoading: loadingDetails, isError } = useCandidateDetails();
  const {
    mutate: updateProfile,
    isLoading,
    isError: errorProfile,
  } = useCandidateManageProfile();
console.log(data)
  if (isLoading || loadingDetails) return <Loader style="h-screen  " />;
  if (isError || errorProfile)
    return (
      <ErrorMsg ErrorMsg="Sorry ! unable to fetch Data right now Please Try Again later " />
    );
  const {
    city,
    country,
    dob,
    email,
    first_name,
    last_name,
    gender,
    phone,
    salary,
    address_1,
    avatar_image,

    address_2,
    about,
    cv_file,
    job_interest,
    cover_letter,
  } = data?.data?.data;
  console.log(salary)

  const initialValues = {
    email: email,
    first_name: first_name,
    last_name: last_name,
    gender: gender,
    dob: dob,
    address_1: address_1,
    address_2: address_2,
    city: city,
    country: country,
    phone: phone,
    about: about,
    salary: salary || 0,
    // avatar_image,
    job_interest: job_interest,
    cover_letter: cover_letter,
    new_password: "",
    confirm_password: "",
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
    onSubmit: (values, action) => {
      const formData = new FormData();
      Object.keys(values).forEach((key) => {
        formData.append(key, values[key]);
      });

      updateProfile(formData);
    },
    validationSchema: ManageProfileCandidate,
  });

  const { data: Specializations, isLoading: loadspecial } = useSpecialization();
 
  // handle special change
  const handleSpecialChange = (SELECTED) => {
    const selectedValues = SELECTED
      ? SELECTED.map((option) => option.value)
      : [];

    setFieldValue("job_interest", selectedValues.toString());
  };

  return (
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
                name="first_name"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.first_name}
                className="py-3 bg-gray-100 px-2 outline-none w-full"
              />
              {errors.first_name && touched.first_name && (
                <p className="text-start px-1 text-sm font-semibold text-red-600">
                  {errors.first_name}
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
                name="last_name"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.last_name}
                className="py-3 bg-gray-100 px-2 outline-none w-full"
              />
              {errors.last_name && touched.last_name && (
                <p className="text-start px-1 text-sm font-semibold text-red-600">
                  {errors.last_name}
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
                <option value="male">Male</option>
                <option value="female">Female</option>
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
                name="dob"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.dob}
                className="py-3 bg-gray-100 px-2 outline-none w-full"
              />
              {errors.dob && touched.dob && (
                <p className="text-start px-1 text-sm font-semibold text-red-600">
                  {errors.dob}
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
              name="address_1"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.address_1}
              className="py-3 bg-gray-100 px-2 outline-none w-full"
            />
            {errors.address_1 && touched.address_1 && (
              <p className="text-start px-1 text-sm font-semibold text-red-600">
                {errors.address_1}
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
              name="address_2"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.address_2}
              className="py-3 bg-gray-100 px-2 outline-none w-full"
            />
            {errors.address_2 && touched.address_2 && (
              <p className="text-start px-1 text-sm font-semibold text-red-600">
                {errors.address_2}
              </p>
            )}
          </div>
          <div className="">
            <label className="font-semibold ">
              city
              <span className="text-sm px-2 font-normal">Enter your city </span>
            </label>
            <input
              type="text"
              placeholder="city"
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
            <textarea
              rows="4"
              cols="50"
              type="text"
              id="cover_letter"
              placeholder="Cover Letter"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.cover_letter}
              className="py-3 bg-gray-100 px-2 outline-none w-full"
            />
            {errors.cover_letter && touched.cover_letter && (
              <p className="text-start px-1 text-sm font-semibold text-red-600">
                {errors.cover_letter}
              </p>
            )}
          </div>
          <div className="w-full">
            <div className="">
              <div className="flex gap-2 items-center">
                <p>Job Interest </p>
                <p className="text-xs">Enter Your Job Interest </p>
              </div>
              <Select
                isMulti
                className=""
                name="job_interest"
                id="job_interest"
                onChange={handleSpecialChange}
                defaultValue={job_interest.map((option) => ({
                  value: option,
                  label: option,
                }))}
                options={Specializations?.data?.specializations?.map((option) => ({
                  value: option,
                  label: option,
                }))}
              />

              {errors.job_interest && touched.job_interest && (
                <p className="text-start px-1  text-sm font-semibold text-red-600">
                  {errors.job_interest}
                </p>
              )}
            </div>
          </div>
          <div className="">
            <label className="font-semibold ">
              Minimum salary
              <span className="text-sm px-2 font-normal">
                Set minimum salary ($)
              </span>
            </label>
            <input
              type="number"
              placeholder="Minimum salary"
              name="salary"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.salary}
              className="py-3 bg-gray-100 px-2 outline-none w-full"
            />
            {errors.salary && touched.salary && (
              <p className="text-start px-1 text-sm font-semibold text-red-600">
                {errors.salary}
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
            <div className="">
              <img
                src={baseurl + avatar_image}
                alt="image"
                width="150"
                className="border my-2"
              />
            </div>
            <input
              type="file"
              name="avatar_image"
              onChange={(event) => {
                setFieldValue("avatar_image", event.currentTarget.files[0]);
              }}
              onBlur={handleBlur}
              className="py-3 bg-gray-100 px-2 outline-none w-full"
            />
            {errors.avatar_image && touched.avatar_image && (
              <p className="text-start px-1 text-sm font-semibold text-red-600">
                {errors.avatar_image}
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
            <div className=" my-8">
              <a
                href={cv_file}
                className="text-white bg-btn-primary p-4 "
                download
              >
                Download Resume
              </a>
            </div>
            <input
              type="file"
              name="cv_file"
              onChange={(event) => {
                setFieldValue("cv_file", event.currentTarget.files[0]);
              }}
              onBlur={handleBlur}
              className="py-3 bg-gray-100 px-2 outline-none w-full"
            />
            {errors.cv_file && touched.cv_file && (
              <p className="text-start px-1 text-sm font-semibold text-red-600">
                {errors.cv_file}
              </p>
            )}
          </div>
          <div className="">
            <label className="font-semibold ">New Password</label>
            <input
              type="password"
              placeholder="New Password"
              name="new_password"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.new_password}
              className="py-3 bg-gray-100 px-2 outline-none w-full"
            />
            {errors.new_password && touched.new_password && (
              <p className="text-start px-1 text-sm font-semibold text-red-600">
                {errors.new_password}
              </p>
            )}
          </div>
          <div className="">
            <label className="font-semibold ">Confirm Password</label>
            <input
              type="password"
              placeholder="Confirm Password"
              name="confirm_password"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.confirm_password}
              className="py-3 bg-gray-100 px-2 outline-none w-full"
            />
            {errors.confirm_password && touched.confirm_password && (
              <p className="text-start px-1 text-sm font-semibold text-red-600">
                {errors.confirm_password}
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

export default ManageCandidateProfile;
