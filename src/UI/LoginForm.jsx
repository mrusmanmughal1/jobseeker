import { useFormik } from "formik";
import { useUserinfo } from "../Context/Userinfo";
import { LoginSchema } from "../helpers/Schema/FormValidation";
import { NavLink } from "react-router-dom";
import { useLogin } from "../Services/Login/useLogin";
import { FaEyeSlash } from "react-icons/fa";
import { FaEye } from "react-icons/fa";
import { useState } from "react";
import MiniLoader from "./MiniLoader";

const credentials = {
  username_or_email: "",
  password: "",
};

const LoginForm = ({ paddingMain, width, fontSize }) => {
  const { mutate: Login, isLoading } = useLogin();

  const [showPassword, setshowPassword] = useState(false);

  const { values, errors, touched, handleChange, handleSubmit, handleBlur } =
    useFormik({
      initialValues: credentials,
      onSubmit: (values, action) => {
        Login(values);
      },
      validationSchema: LoginSchema,
    });

  return (
    <div className={`${paddingMain}    p-10 md:p-14 `}>
      <div
        className={`md:mx-auto ${width}  md:w-1/2   lg:w-1/2 xl:w-1/2 text-center flex flex-col justify-center  gap-6`}
      >
        <div className="font-bold text-[#4e007a] ">
          Existing Users Login Below
        </div>

        <form onSubmit={handleSubmit}>
          <div className=" flex flex-col gap-6">
            <div className="">
              <input
                className="border p-3 font-bold w-full bg-slate-200 "
                placeholder="User Name or Email Address"
                name="username_or_email"
                id="username_or_email"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.username_or_email}
              />
              {errors.username_or_email && touched.username_or_email && (
                <p className="text-start px-1  text-sm font-semibold text-red-600">
                  {errors.username_or_email}
                </p>
              )}
            </div>
            <div className="">
              <div className="relative">
                <div className="absolute hover:cursor-pointer right-4 top-1/3 ">
                  {showPassword ? (
                    <FaEyeSlash onClick={() => setshowPassword(false)} />
                  ) : (
                    <FaEye onClick={() => setshowPassword(true)} />
                  )}
                </div>
                <input
                  type={`${showPassword ? "text" : "password"}`}
                  className="border p-3 w-full  font-bold bg-slate-200 "
                  placeholder="Password"
                  name="password"
                  id="password"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.password}
                />
              </div>
              {errors.password && touched.password && (
                <p className="text-start px-1 text-sm font-semibold text-red-600">
                  {errors.password}
                </p>
              )}
            </div>
          </div>
          <div className={`${fontSize} flex justify-between text-sm  py-4`}>
            <div className={` flex  items-center font-semibold   gap-2`}>
              <input type="checkbox" name="" id="remember" />
              <label htmlFor="remember">Remember Me</label>
            </div>
            <div className=" font-semibold">
              <NavLink to="/forget-password" className='hover:text-btn-primary'> Forget Password?</NavLink>
            </div>
          </div>
          <div className="flex    gap-4 justify-between">
            <div className=" ">
              <button
                type="submit"
                disabled={isLoading}
                className="font-bold bg-[#4e007a] text-white border-btn-primary border-2  px-10  w-full  rounded-md py-2"
              >
                {isLoading ? <MiniLoader/> : 'LOGIN'}
              </button>
            </div>
            <div className=" ">
              <NavLink to="/register">
                <button
                  type="button"
                  href=""
                  className=" text-[#4e007a] font-bold rounded-md   px-8   border-btn-primary border-2 py-2 hover:bg-black hover:text-white  transition-all hover:ease-in "
                >
                  REGISTER
                </button>
              </NavLink>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default LoginForm;
