import { useFormik } from "formik";
import { ManageProfileEmployer } from "../../helpers/Schema/FormValidation";
import { useEmployerDetails } from "../../Services/Employer/useEmployerDetails";
import Loader from "../../UI/Loader";
import Select from "react-select";

import ErrorMsg from "../../UI/ErrorMsg";
import { useSpecialization } from "../../Services/General/useSpecialization";
import { useUpdateEmployer } from "../../Services/Employer/useUpdateEmployer";
import pic from "../../assets/Profile-picture.png";
import MiniLoader from "../../UI/MiniLoader";
import { BASE_URL_IMG } from "../../config/Config";
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
    phone,
    website,
    about,
    specialisms,
    avatar_image,
    company_size,
    license_number,
    license_image,
  } = data?.data?.data || {};
  const {
    data: specialismsData,
    isLoading: loadSpecializim,
    isError: specialismsErr,
  } = useSpecialization();
  const {
    mutate: updateEmployerData,
    isPending,
    isError: EmpErr,
  } = useUpdateEmployer();

  if (isError || specialismsErr)
    return (
      <ErrorMsg ErrorMsg="Unable To fetch Data Right Now !  Please try again!" />
    );
  if (loading || loadSpecializim) return <Loader style="py-40" />;

  const initialValues = {
    email: email || "",
    firstName: first_name || "",
    lastName: last_name || "",
    address_1: address_1 || "",
    address_2: address_2 || "",
    city: city || "",
    country: country || "",
    phone: phone || "",
    website: website || "",
    // vacancies: vacancies || "",
    about: about || "",
    specialisms: specialisms || "",
    company_size: company_size || "",
    license_number: license_number || "",
    // license_image: license_image || "",
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

  // handle special change
  const handleSpecialChange = (SELECTED) => {
    const selectedValues = SELECTED
      ? SELECTED.map((option) => option.value)
      : [];

    setFieldValue("specialisms", selectedValues.toString());
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

          {/* company data  */}
          <div className="   pb-5  ">
            <div className="font-semibold py-5">
              {" "}
              Enter Your Company Details
            </div>
            <div className="space-y-6">
              <div className="">
                <label className="font-semibold ">
                  Country
                  <span className="text-sm px-2 font-normal">
                    Select your Country
                  </span>
                </label>
                <select
                  name="country"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.country}
                  className="block w-full border p-3 bg-gray-100"
                >
                  <option value="Associate">Select your Country</option>
                  <option value="Pakistan">Pakistan</option>
                  <option value="India">India</option>
                  <option value="Italy">Italy</option>
                  <option value="USA">USA</option>
                  <option value="GCC">GCC</option>
                </select>
                {errors.country && touched.country && (
                  <p className="text-start px-1 text-sm font-semibold text-red-600">
                    {errors.country}
                  </p>
                )}
              </div>
              <div className="">
                <label className="font-semibold ">
                  Company Size
                  <span className="text-sm px-2 font-normal">
                    Enter Company Size
                  </span>
                </label>
                <select
                  name="company_size"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.company_size}
                  className="block w-full border p-3 bg-gray-100"
                >
                  <option value="Associate" defaultValue={"Select Any Values"}>
                    Select Any Values
                  </option>
                  <option value="1-10">1-10</option>
                  <option value="11-50">11-50</option>
                  <option value="51-200">51-200</option>
                  <option value="201-500">201-500</option>
                  <option value="501-1000">501-1000</option>
                  <option value="1001-5000">1001-5000</option>
                </select>
                {errors.company_size && touched.company_size && (
                  <p className="text-start px-1 text-sm font-semibold text-red-600">
                    {errors.company_size}
                  </p>
                )}
              </div>
              <div className="">
                <label className="font-semibold ">
                  1. NTN/PAN/License No
                  <span className="text-sm px-2 font-normal">
                    (based on selected country):
                  </span>
                </label>
                <input
                  type="text"
                  placeholder="license_number"
                  name="license_number"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.license_number}
                  className="py-3 bg-gray-100 px-2 outline-none w-full"
                />
                {errors.license_number && touched.license_number && (
                  <p className="text-start px-1 text-sm font-semibold text-red-600">
                    {errors.license_number}
                  </p>
                )}
              </div>
              <div className="">
                <label className="font-semibold ">License Image</label>
                <div className="py-4">
                  <img
                    src={license_image ? BASE_URL_IMG + license_image : pic}
                    alt="iamge "
                    width="300"
                    className="border"
                  />
                </div>
                <input
                  type="file"
                  name="license_image"
                  onChange={(event) => {
                    setFieldValue(
                      "license_image",
                      event.currentTarget.files[0]
                    );
                  }}
                  onBlur={handleBlur}
                  className="py-3 bg-gray-100 px-2 outline-none w-full"
                />
                {errors.license_image && touched.license_image && (
                  <p className="text-start px-1 text-sm font-semibold text-red-600">
                    {errors.license_image}
                  </p>
                )}
              </div>
            </div>
          </div>
          <div className="">
            <label className="font-semibold ">
              Phone
              <span className="text-sm px-2 font-normal">
                Enter your Phone Number
              </span>
            </label>
            <input
              type="number"
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
          {/* <div className="">
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
          </div> */}

          <div className="">
            <label className="font-semibold ">
              Avatar Image
              <span className="text-sm px-2 font-normal">
                Upload Your Avatar Image
              </span>
            </label>
            <div className="pb-2">
              <img
                src={avatar_image ? BASE_URL_IMG + avatar_image : pic}
                alt="iamge "
                width="200"
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
            disabled={isPending}
            className="bg-btn-primary px-8 py-4 rounded-md text-white font-semibold"
          >
            {isPending ? <MiniLoader /> : "  SAVE CHANGES"}
          </button>
        </div>
      </form>
    </div>
  );
};

export default ManageEmployerProfile;
