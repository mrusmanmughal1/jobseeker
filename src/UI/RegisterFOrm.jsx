import { useFormik } from "formik";
import { RegisterSchema } from "../helpers/Schema/FormValidation";
import { useRegister } from "../Services/register/useRegister";
import MiniLoader from "./MiniLoader";
import Loader from "./Loader";
import { FaEyeSlash } from "react-icons/fa";
import { FaEye } from "react-icons/fa";
import { useState } from "react";
const initialValues = {
  account_type: "",
  username: "",
  email: "",
  password: "",
  confirm_password: "",
  first_name: "",
  last_name: "",
  phone: "",
};
const RegisterFOrm = () => {
  const { mutate: Register, isPending } = useRegister();
  const [showpassword, setshowPassword] = useState({
    password: false,
    confirmPassword: false,
  });

  const { password, confirmPassword } = showpassword;
  const {
    values,
    errors,
    touched,
    handleChange,
    handleSubmit,
    handleBlur,
    resetForm,
  } = useFormik({
    initialValues,
    onSubmit: async (values, action) => {
      try {
        await Register(values);
        // Reset the form after successful job posting
      } catch (error) {
        console.error("Failed to post job:", error);
      }
    },
    validationSchema: RegisterSchema,
  });
  const handleclick = (field) => {
    setshowPassword((prev) => ({
      ...prev,
      [field]: !prev[field], // Toggle the visibility state for the specific field
    }));
    console.log(showpassword);
  };

  return (
    <div className="">
      <form onSubmit={handleSubmit}>
        <div className="flex flex-col gap-4 w-full md:w-1/2 mx-auto">
          <div className=" flex items-center gap-2 py-2">
            <p>AccounT Type</p>
            <p className="text-xs">Choose account type</p>
          </div>
          <div className="">
            <div className="flex gap-4">
              <div className="flex items-center gap-3">
                <input
                  type="radio"
                  name="account_type"
                  onChange={handleChange}
                  id="account_type1"
                  value="candidate"
                />
                <label htmlFor="account_type1"> Candidate</label>
              </div>
              <div className=" flex items-center gap-3">
                <input
                  type="radio"
                  name="account_type"
                  id="account_type"
                  value="employer"
                  onChange={handleChange}
                />

                <label htmlFor="account_type"> Employer</label>
              </div>
            </div>
            {errors.account_type && touched.account_type && (
              <p className="text-start px-1  text-sm font-semibold text-red-600">
                {errors.account_type}
              </p>
            )}
          </div>
          <div className="">
            <div className="flex gap-2 items-center">
              <p>User name </p>
              <p className="text-xs">Enter Your username </p>
            </div>
            <input
              type="text"
              className="py-4 px-2 rounded-sm border w-full text-black font-semibold bg-gray-200 outline-none"
              placeholder="USER NAME"
              name="username"
              id="username"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.username}
            />
            {errors.username && touched.username && (
              <p className="text-start px-1  text-sm font-semibold text-red-600">
                {errors.username}
              </p>
            )}
          </div>
          <div className="">
            <div className="flex gap-2 items-center">
              <p>Phone </p>
              <p className="text-xs">Enter Your Phone </p>
            </div>
            <input
              type="number"
              className="py-4 px-2 rounded-sm border w-full text-black font-semibold bg-gray-200 outline-none"
              placeholder="Phone"
              name="phone"
              id="phone"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.phone}
            />
            {errors.phone && touched.phone && (
              <p className="text-start px-1  text-sm font-semibold text-red-600">
                {errors.phone}
              </p>
            )}
          </div>
          <div className="">
            <div className="flex md:flex-row flex-col gap-2 md:items-center">
              <p>Email Address </p>
              <p className="text-xs">
                (In Case of Employer, User must have Company Email Address){" "}
              </p>
            </div>
            <input
              type="text"
              className="py-4 px-2 rounded-sm border w-full text-black font-semibold bg-gray-200 outline-none"
              placeholder="Email Address"
              name="email"
              id="email"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.email}
            />
            {errors.email && touched.email && (
              <p className="text-start px-1  text-sm font-semibold text-red-600">
                {errors.email}
              </p>
            )}
          </div>
          <div className="">
            <div className="flex gap-2 items-center">
              <p>Password </p>
              <p className="text-xs">Enter Your Password </p>
            </div>
            <div className="relative">
              <div
                onClick={() => handleclick("password")}
                className="absolute hover:cursor-pointer right-4 top-1/3 "
              >
                {password ? (
                  <FaEyeSlash name="password" />
                ) : (
                  <FaEye name="password" />
                )}
              </div>
              <input
                type={`${password ? "text" : "password"}`}
                className="py-4 px-2 rounded-sm border  w-full text-black font-semibold bg-gray-200 outline-none"
                placeholder="Password "
                name="password"
                id="password"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.password}
              />
            </div>

            {errors.password && touched.password && (
              <p className="text-start px-1  text-sm font-semibold text-red-600">
                {errors.password}
              </p>
            )}
          </div>
          <div className="">
            <div className="flex gap-2 items-center">
              <p>Confirm Password </p>
              <p className="text-xs">Enter Confirm Password </p>
            </div>
            <div className="relative">
              <div
                onClick={() => handleclick("confirmPassword")}
                className="absolute hover:cursor-pointer right-4 top-1/3 "
              >
                {confirmPassword ? (
                  <FaEyeSlash name="confirmPassword" />
                ) : (
                  <FaEye name="confirmPassword" />
                )}
              </div>
              <input
                type={`${confirmPassword ? "text" : "password"}`}
                className="py-4 px-2 rounded-sm border w-full text-black font-semibold bg-gray-200 outline-none"
                placeholder="Confirm Password "
                name="confirm_password"
                id="confirm_password"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.confirm_password}
              />
            </div>

            {errors.confirm_password && touched.confirm_password && (
              <p className="text-start px-1  text-sm font-semibold text-red-600">
                {errors.confirm_password}
              </p>
            )}
          </div>
          <div className="flex md:flex-row flex-col md:gap-8 gap-4">
            <div className="w-full">
              <div className="">
                <div className="flex gap-2 items-center">
                  <p> First Name </p>
                  <p className="text-xs">Enter First Name </p>
                </div>
                <input
                  type="text"
                  className="py-4 px-2 rounded-sm border w-full text-black font-semibold bg-gray-200 outline-none"
                  placeholder="First Name "
                  name="first_name"
                  id="first_name"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.first_name}
                />
                {errors.first_name && touched.first_name && (
                  <p className="text-start px-1  text-sm font-semibold text-red-600">
                    {errors.first_name}
                  </p>
                )}
              </div>
            </div>
            <div className="w-full">
              <div className="">
                <div className="flex gap-2 items-center">
                  <p>Last Name </p>
                  <p className="text-xs">Enter Last Name </p>
                </div>
                <input
                  type="text"
                  className="py-4 px-2 w-full rounded-sm border text-black font-semibold bg-gray-200 outline-none"
                  placeholder="Last Name "
                  name="last_name"
                  id="last_name"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.last_name}
                />
                {errors.last_name && touched.last_name && (
                  <p className="text-start px-1  text-sm font-semibold text-red-600">
                    {errors.last_name}
                  </p>
                )}
              </div>
            </div>
          </div>
          {/* <div className="w-full">
            <div className="">
              <div className="flex gap-2 items-center">
                <p>Specializations </p>
                <p className="text-xs">Enter Specializations </p>
              </div>

              <Select
                isMulti
                className=""
                onChange={handleSpecialChange}
                options={data.data?.specializations?.map((option) => ({
                  value: option,
                  label: option,
                }))}
              />

              {errors.specialization && touched.specialization && (
                <p className="text-start px-1  text-sm font-semibold text-red-600">
                  {errors.specialization}
                </p>
              )}
            </div>
          </div> */}
          <div className=" text-center">
            <button
              disabled={isPending}
              className="font-semibold px-8 py-4 rounded-md bg-purple-900 text-white"
              type="submit"
            >
              {isPending ? <MiniLoader /> : " REGISTER NOW"}
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default RegisterFOrm;
