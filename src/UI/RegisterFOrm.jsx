import { useFormik } from "formik";
import { RegisterSchema } from "../helpers/Schema/FormValidation";

const initialValues = {
  Account_type: "",
  UserName: "",
  Email: "",
  Password: "",
  ConfirmPassword: "",
  FirstName: "",
  LastName: "",
  Specialization: "",
};
const RegisterFOrm = () => {
  const { values, errors, touched, handleChange, handleSubmit, handleBlur } =
    useFormik({
      initialValues,
      onSubmit: (values, action) => {
        console.log(values);
        action.resetForm();
      },
      validationSchema: RegisterSchema,
    });
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
                  name="Account_type"
                  onChange={handleChange}
                  id="candidate"
                  value="ss"
                />
                <label htmlFor="candidate"> Candidate</label>
              </div>
              <div className=" flex items-center gap-3">
                <input
                  type="radio"
                  name="Account_type"
                  id="Employer"
                  value="Employeer"
                  onChange={handleChange}
                />

                <label htmlFor="Employer"> Employer</label>
              </div>
            </div>
            {errors.Account_type && touched.Account_type && (
              <p className="text-start px-1  text-sm font-semibold text-red-600">
                {errors.Account_type}
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
              name="UserName"
              id="UserName"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.UserName}
            />
            {errors.UserName && touched.UserName && (
              <p className="text-start px-1  text-sm font-semibold text-red-600">
                {errors.UserName}
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
              name="Email"
              id="Email"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.Email}
            />
            {errors.Email && touched.Email && (
              <p className="text-start px-1  text-sm font-semibold text-red-600">
                {errors.Email}
              </p>
            )}
          </div>
          <div className="">
            <div className="flex gap-2 items-center">
              <p>Password </p>
              <p className="text-xs">Enter Your Password </p>
            </div>
            <input
              type="password"
              className="py-4 px-2 rounded-sm border  w-full text-black font-semibold bg-gray-200 outline-none"
              placeholder="Password "
              name="Password"
              id="Password"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.Password}
            />
            {errors.Password && touched.Password && (
              <p className="text-start px-1  text-sm font-semibold text-red-600">
                {errors.Password}
              </p>
            )}
          </div>
          <div className="">
            <div className="flex gap-2 items-center">
              <p>Confirm Password </p>
              <p className="text-xs">Enter Confirm Password </p>
            </div>
            <input
              type="password"
              className="py-4 px-2 rounded-sm border w-full text-black font-semibold bg-gray-200 outline-none"
              placeholder="Confirm Password "
              name="ConfirmPassword"
              id="ConfirmPassword"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.ConfirmPassword}
            />
            {errors.ConfirmPassword && touched.ConfirmPassword && (
              <p className="text-start px-1  text-sm font-semibold text-red-600">
                {errors.ConfirmPassword}
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
                  name="FirstName"
                  id="FirstName"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.FirstName}
                />
                {errors.FirstName && touched.FirstName && (
                  <p className="text-start px-1  text-sm font-semibold text-red-600">
                    {errors.FirstName}
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
                  name="LastName"
                  id="LastName"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.LastName}
                />
                {errors.LastName && touched.LastName && (
                  <p className="text-start px-1  text-sm font-semibold text-red-600">
                    {errors.LastName}
                  </p>
                )}
              </div>
            </div>
          </div>
          <div className="w-full">
            <div className="">
              <div className="flex gap-2 items-center">
                <p>Specializations </p>
                <p className="text-xs">Enter Last Name </p>
              </div>
              <select
                name="Specialization"
                id="cars"
                className="w-full p-4 text-black font-semibold border-none Specialization  bg-gray-200 outline-none"
                onChange={handleChange}
                value={values.Specialization}
              >
                <option
                  value="volvo"
                  className="hover:bg-btn-primary hover:text-white"
                >
                  Volvo
                </option>
                <option value="saab">Saab</option>
              </select>
              {errors.Specialization && touched.Specialization && (
                <p className="text-start px-1  text-sm font-semibold text-red-600">
                  {errors.Specialization}
                </p>
              )}
            </div>
          </div>
          <div className=" text-center">
            <button
              className="font-semibold px-8 py-4 rounded-md bg-purple-900 text-white"
              type="submit"
            >
              REGISTER NOW
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default RegisterFOrm;
