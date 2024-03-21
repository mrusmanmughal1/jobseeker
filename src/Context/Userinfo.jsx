import { createContext, useContext, useReducer } from "react";

const User = createContext();

const initialState = {
  user: "",
  key: "",
};

const reducer = (state, action) => {
  switch (action.type) {
    case "login":
      return { ...state, user: action.payload };

    default:
      state;
  }
};

const Userinfo = ({ children }) => {
  const [{ user, key }, dispatch] = useReducer(reducer, initialState);
  return <User.Provider value={{ dispatch, user }}>{children}</User.Provider>;
};
const useUserinfo = () => {
  const Userdata = useContext(User);

  if (Userdata === undefined) throw new Error("Context Not Working fine .. ");
  return Userdata;
};

export { Userinfo, useUserinfo };
