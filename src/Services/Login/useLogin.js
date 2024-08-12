import { useMutation } from "@tanstack/react-query";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import { BASE_URL } from "../../config/Config";
import axios from "axios";
import { useUserinfo } from "../../Context/AuthContext";

const getLogin = async (credentials) => {
  const Post = `${BASE_URL}api/login/`;
  const res = await axios.post(Post, credentials);
  return res;
};

export const useLogin = () => {
  const { dispatch } = useUserinfo();

  const navigate = useNavigate();
  const { mutate, isPending } = useMutation({
    mutationFn: (credentials) => getLogin(credentials),
    onSuccess: (data) => {
      const { user_type, token } = data.data.data;
      dispatch({ type: "login", payload: data.data.data });
      // setting Tokken and UserData to DB
      localStorage.setItem("Token", token);
      localStorage.setItem("User_Data", JSON.stringify(data.data.data));

      // Navigate based on user type
      const destination =
        user_type === "administrator" ? "/admin/dashboard" : "/dashboard";
      navigate(destination, { replace: true });

      // on success toast
      toast.success(data.data.message);
    },

    // Handle Error
    onError: (err) => {
      const errorMessage =
        err.response?.data?.message || err.response.data.error;
      toast.error(errorMessage);
    },
  });

  return { mutate, isPending };
};
