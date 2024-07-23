import { useMutation } from "@tanstack/react-query";
import toast from "react-hot-toast";
import { BASE_URL } from "../../config/Config";
import axios from "axios";

import { useUserinfo } from "../../Context/AuthContext";
const getLogout = async () => {
  const Post = `${BASE_URL}api/logout/`;
  const Token = localStorage.getItem("Token");

  const config = {
    headers: {
      Authorization: `Token ${Token}`,
    },
  };
  const res = await axios.post(Post, null, config);
  return res;
};

export const useLogout = () => {
  const { dispatch } = useUserinfo();

  const { mutate, isLoading } = useMutation({
    mutationFn: () => getLogout(),
    onSuccess: (data) => {
      // Clear local storage
      localStorage.removeItem("Token");
      localStorage.removeItem("User_Data");
      dispatch({ type: "logout" });

      console.log(data);
      toast.success(data.data.message);
    },
    onError: (err) => console.log(err),
  });

  return { mutate, isLoading };
};
