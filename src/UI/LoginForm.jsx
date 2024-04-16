import { useFormik } from "formik";
import { useUserinfo } from "../Context/Userinfo";
import { LoginSchema } from "../Hooks/Schema/FormValidation";
import { NavLink } from "react-router-dom";

const initialValues = {
  login: "",
  password: "",
};
const LoginForm = () => {
  const { dispatch } = useUserinfo();

  const { values, errors, touched, handleChange, handleSubmit, handleBlur } =
    useFormik({
      initialValues: initialValues,
      onSubmit: (values, action) => {
        dispatch({ type: "login", payload: values.login });
        action.resetForm();
      },
      validationSchema: LoginSchema,
    });
  return (
    <div className=" p-6 py-20 md:p-14 ">
      <div className="md:mx-auto   lg:w-2/5 xl:w-1/2 text-center flex flex-col justify-center  gap-6">
        <div className="font-bold text-[#4e007a] ">
          Existing Users Login Below
        </div>

        <form onSubmit={handleSubmit}>
          <div className=" flex flex-col gap-6">
            <div className="">
              <input
                className="border p-3 font-bold w-full bg-slate-200 "
                placeholder="User Name or Email Address"
                name="login"
                id="login"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.login}
              />
              {errors.login && touched.login && (
                <p className="text-start px-1  text-sm font-semibold text-red-600">
                  {errors.login}
                </p>
              )}
            </div>
            <div className="">
              <input
                type="password"
                className="border p-3 w-full  font-bold bg-slate-200 "
                placeholder="Password"
                name="password"
                id="password"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.password}
              />
              {errors.password && touched.password && (
                <p className="text-start px-1 text-sm font-semibold text-red-600">
                  {errors.password}
                </p>
              )}
            </div>
          </div>
          <div className="flex justify-between py-4">
            <div className="flex  font-semibold  gap-4">
              <input type="checkbox" name="" id="remember" />
              <label htmlFor="remember">Remember Me</label>
            </div>
            <div className=" font-semibold">
              <a href=""> Forget Password?</a>
            </div>
          </div>
          <div className="flex  justify-between">
            <div className=" ">
              <button
                type="submit"
                className="font-bold bg-[#4e007a] text-white  px-8  w-full  rounded-md py-2"
              >
                LOGIN
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
