import {
  createContext,
  useContext,
  useEffect,
  useReducer,
  useState,
} from "react";

const User = createContext();

const initialState = {
  auth: null,
  username: "",
  user_id: "",
  user_type: "",
  avatar: "",
};

const reducer = (state, action) => {
  switch (action.type) {
    case "login":
      const data = localStorage.getItem("User_Data");
      return {
        ...state,
        user_type: action.payload.user_type,
        auth: true,
        user_id: action.payload.user_id,
        username: action.payload.username,
        avatar: action.payload.avatar,
      };
    case "logout":
      return { user_type: null, auth: null };
    default:
      state;
  }
};

const AuthContext = ({ children }) => {
  const [data, setdata] = useState();
  useEffect(() => {
    const userData = localStorage.setItem("User_Data", JSON.stringify(data));
  }, [data]);
  const [{ auth, user_type, user_id, username, avatar }, dispatch] = useReducer(
    reducer,
    initialState
  );
  return (
    <User.Provider
      value={{ dispatch, auth, user_type, user_id, username, avatar }}
    >
      {children}
    </User.Provider>
  );
};
const useUserinfo = () => {
  const Userdata = useContext(User);

  if (Userdata === undefined) throw new Error("Context Not Working fine .. ");
  return Userdata;
};

export { AuthContext, useUserinfo };
