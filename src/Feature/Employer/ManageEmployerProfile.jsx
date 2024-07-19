import { useFormik } from "formik";
import { ManageProfileEmployer } from "../../helpers/Schema/FormValidation";
import { useEmployerDetails } from "../../Services/Employer/useEmployerDetails";
import Loader from "../../UI/Loader";
import Select from "react-select";

import ErrorMsg from "../../UI/ErrorMsg";
import { useSpecialization } from "../../Services/General/useSpecialization";
import { useUpdateEmployer } from "../../Services/Employer/useUpdateEmployer";

const ManageEmployerProfile = () => {
  const { data, isLoading: loading, isError } = useEmployerDetails();
  const {
    email,
    last_name,
    first_name,
    address_1,
    address_2,
    city,
    country,
    vacancies,
    phone,
    website,
    about,
    specialisms,
    avatar_image,
  } = data.data.data;
  const {
    data: specialismsData,
    isLoading: loadSpecializim,
    isError: specialismsErr,
  } = useSpecialization();

  const {
    mutate: updateEmployerData,
    isLoading,
    isError: EmpErr,
  } = useUpdateEmployer();

  const initialValues = {
    email: email || "",
    firstName: first_name || "",
    lastName: last_name || "",
    address1: address_1 || "",
    address2: address_2 || "",
    city: city || "",
    country: country || "",
    phone: phone || "",
    website: website || "",
    vacancies: vacancies || "",
    about: about || "",
    specialisms: specialisms || "",
    avatar_image: avatar_image || "",
    newPassword: "",
    confirmPassword: "",
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
      console.log(errors);
      console.log(formData);
      updateEmployerData(formData);
    },
    validationSchema: ManageProfileEmployer,
  });

  const baseurl = "http://170.187.136.161:8010";

  // handle special change
  const handleSpecialChange = (SELECTED) => {
    const selectedValues = SELECTED
      ? SELECTED.map((option) => option.value)
      : [];

    setFieldValue("specialisms", selectedValues.toString());
  };

  if (isError || specialismsErr)
    return (
      <ErrorMsg ErrorMsg="Unable To fetch Data Right Now !  Please try again!" />
    );
  if (loading || loadSpecializim || isLoading) return <Loader style="py-40" />;

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
          <div className="flex md:flex-row flex-col gap-10"></div>
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
            <label className="font-semibold ">
              Specialisms
              <span className="text-sm px-2 font-normal">
                Select your Specialisms
              </span>
            </label>
            <Select
              isMulti
              className=""
              name="job_interest"
              id="job_interest"
              onChange={handleSpecialChange}
              defaultValue={specialisms?.map((option) => ({
                value: option,
                label: option,
              }))}
              options={specialismsData?.data?.specializations?.map(
                (option) => ({
                  value: option,
                  label: option,
                })
              )}
            />
            {errors.specialisms && touched.specialisms && (
              <p className="text-start px-1 text-sm font-semibold text-red-600">
                {errors.specialisms}
              </p>
            )}
          </div>
          <div className="">
            <label className="font-semibold ">
              Vacancies
              <span className="text-sm px-2 font-normal">
                Enter your Vacancies
              </span>
            </label>
            <input
              type="number"
              placeholder="Vacancies"
              name="jobInterests"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.vacancies}
              className="py-3 bg-gray-100 px-2 outline-none w-full"
            />
            {errors.vacancies && touched.vacancies && (
              <p className="text-start px-1 text-sm font-semibold text-red-600">
                {errors.vacancies}
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
              <img src={baseurl + avatar_image} alt="iamge " width="150" />
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

export default ManageEmployerProfile;
