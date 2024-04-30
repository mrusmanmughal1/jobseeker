import { createContext, useContext, useReducer } from "react";

const User = createContext();

const initialState = {
  auth: "",
  key: "",
  role: null,
};

const reducer = (state, action) => {
  switch (action.type) {
    case "login":
      return { ...state, auth: action.payload, role: "employee" };
    case "logout":
      return { user: null };
    default:
      state;
  }
};

const Userinfo = ({ children }) => {
  const [{ auth, key, role }, dispatch] = useReducer(reducer, initialState);
  return (
    <User.Provider value={{ dispatch, auth, role }}>{children}</User.Provider>
  );
};
const useUserinfo = () => {
  const Userdata = useContext(User);

  if (Userdata === undefined) throw new Error("Context Not Working fine .. ");
  return Userdata;
};

export { Userinfo, useUserinfo };
