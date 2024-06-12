import { createContext, useContext, useReducer } from "react";

const User = createContext();

const initialState = {
  auth: null,
  user_type: "",
  username: "",
  user_id: "",
};

const reducer = (state, action) => {
  switch (action.type) {
    case "login":
      return {
        ...state,
        user_type: action.payload.user_type,
        auth: action.payload.username,
        user_id: action.payload.user_id,
      };
    case "logout":
      return { user_type: null, auth: null };
    default:
      state;
  }
};

const Userinfo = ({ children }) => {
  const [{ auth, user_type, user_id, username }, dispatch] = useReducer(
    reducer,
    initialState
  );
  return (
    <User.Provider value={{ dispatch, auth, user_type, user_id, username }}>
      {children}
    </User.Provider>
  );
};
const useUserinfo = () => {
  const Userdata = useContext(User);

  if (Userdata === undefined) throw new Error("Context Not Working fine .. ");
  return Userdata;
};

export { Userinfo, useUserinfo };
