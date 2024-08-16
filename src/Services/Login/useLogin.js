import { useMutation } from "@tanstack/react-query";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import { BASE_URL } from "../../config/Config";
import axios from "axios";
import { useUserinfo } from "../../Context/AuthContext";
import { v4 as uuidv4 } from "uuid";
import api from "./useLoginInterSept";

const getLogin = async (credentials) => {
  const Post = `${BASE_URL}api/login/`;
  const res = await api.post(Post, credentials);
  return res;
};

export const useLogin = () => {
  const { dispatch } = useUserinfo();

  const navigate = useNavigate();
  const { mutate, isPending } = useMutation({
    mutationFn: (credentials) => {
      // Generate a unique device type identifier
      const deviceType = uuidv4();

      // Include deviceType in the credentials
      const credentialsWithDeviceType = {
        ...credentials,
        device_id: deviceType,
      };

      // Pass credentials with device type to the login function
      return getLogin(credentialsWithDeviceType);
      // getLogin(credentials);
    },
    onSuccess: (data) => {
      // device_type
      const { user_type, access_token, device_id, refresh_token } =
        data.data.data;
      dispatch({ type: "login", payload: data.data.data });
      // setting Tokken and UserData to DB
      localStorage.setItem("Token", access_token);
      localStorage.setItem("refresh_token", refresh_token);

      localStorage.setItem("User_Data", JSON.stringify(data.data.data));
      localStorage.setItem("Device_id", device_id);
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
