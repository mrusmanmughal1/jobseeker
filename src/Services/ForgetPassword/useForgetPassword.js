import { useMutation } from "@tanstack/react-query";
import toast from "react-hot-toast";
import { BASE_URL } from "../../config/Config";
import axios from "axios";
const getNewPassword = async (email) => {
  const Post = `${BASE_URL}api/forgot-password/`;
  var bodyFormData = new FormData();
  bodyFormData.append("email", email);
  const res = await axios.post(Post, bodyFormData);
  return res;
};

export const useFOrgetPassword = () => {
  const { mutate, isLoading } = useMutation({
    mutationFn: (credentials) => getNewPassword(credentials.email),
    onSuccess: (res) => {
      toast.success(res.data.message);
    },
    onError: (err) => {
      toast.error(err.response.data.error);
    },
  });

  return { mutate, isLoading };
};
