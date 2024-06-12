import { useState } from "react";
import { useFOrgetPassword } from "../Services/ForgetPassword/useForgetPassword";
import { useFormik } from "formik";
import { ForgetPasswordSchema } from "../helpers/Schema/FormValidation";

const ForGetPassword = () => {
  const { mutate: ForgetPassword, isLoading } = useFOrgetPassword();

  const initialValues = {
    email: "",
  };

  

  const { values, errors, touched, handleChange, handleSubmit } =
  useFormik({
    initialValues,
    onSubmit: (values, action) => {
      ForgetPassword(values);
    },
    validationSchema: ForgetPasswordSchema,
  });
  return (
    <div>
      <div className="h-96 flex justify-center items-center">
        <form className="space-y-10 gap-4 w-1/2 " onSubmit={handleSubmit}>
          <div className="text-center font-bold uppercase text-2xl">
            Forgot Password ?
          </div>
          <div className="flex gap-4">
            <input
              type="email"
              name="email"
              id="email"
              value={values.email}
              onChange={handleChange}
              className="w-full border rounded-md border-black px-2"
              placeholder="Please Enter Your Email Here ! "
            />
            {errors.email && touched.email && (
              <p className="text-start px-1  text-sm font-semibold text-red-600">
                {errors.email}
              </p>
            )}
            <button
              type="submit"
              className="bg-btn-primary w-48 text-white py-4 rounded-md"
            >
              Send Email
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ForGetPassword;
