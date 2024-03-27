import { NavLink } from "react-router-dom";
import { useUserinfo } from "../Context/Userinfo";

const MiniLogin = ({ set }) => {
  const { dispatch } = useUserinfo();
  const handleClick = () => {
    set(false);

    dispatch({ type: "login", payload: 2 });
  };
  return (
    <div>
      <p className="text-purple-900 font-bold">Existing User Login Below</p>
      <div className="flex flex-col mt-2 gap-2">
        <input
          type="text"
          placeholder="Username or Email Address "
          className="border p-2 text-sm font-bold outline-none bg-slate-100"
        />
        <input
          type="text"
          placeholder="Password"
          className="border p-2 text-sm font-bold outline-none bg-slate-100"
        />
      </div>
      <div className="flex gap-12 my-3">
        <div className="flex  gap-2 text-xs items-center">
          <input type="checkbox" name="" id="check" />
          <label htmlFor="check">Remember Me </label>
        </div>
        <div className="text-xs"> Forgot Password? </div>
      </div>
      <div className="flex justify-between  gap-4 py-2">
        <button
          className="px-4 py-2 bg-purple-900 w-full  text-white rounded-md"
          onClick={handleClick}
        >
          LOGIN
        </button>
        <NavLink to="/register">
          <button className="px-4 py-2 border-2 w-full border-purple-900 rounded-md text-purple-900 hover:bg-black hover:text-white hover:border-black ">
            REGISTER
          </button>
        </NavLink>
      </div>
    </div>
  );
};

export default MiniLogin;
