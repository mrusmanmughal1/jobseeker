import { useUserinfo } from "../Context/Userinfo";

const LoginForm = () => {
  const { dispatch } = useUserinfo();
  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch({ type: "login", payload: 2 });
  };

  return (
    <div className=" p-6 py-20 md:p-14 ">
      <div className="md:mx-auto   lg:w-1/2 text-center flex flex-col justify-center  gap-6">
        <div className="font-bold text-[#4e007a] ">
          Existing Users Login Below
        </div>

        <form onSubmit={(e) => handleSubmit(e)}>
          <div className=" flex flex-col gap-6">
            <input
              type="text"
              className="border p-3 font-bold w-full bg-slate-200 "
              placeholder="User Name or Email Address"
            />
            <input
              type="text"
              className="border p-3 w-full font-bold bg-slate-200 "
              placeholder="Password"
            />
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
              <button
                href=""
                className=" text-[#4e007a] font-bold rounded-md   px-8   border-btn-primary border-2 py-2 hover:bg-black hover:text-white  transition-all hover:ease-in "
              >
                REGISTER
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default LoginForm;
