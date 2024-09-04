import { useMutation } from "@tanstack/react-query";
import toast from "react-hot-toast";
import { BASE_URL } from "../../config/Config";
import axios from "axios";

const UpdateProfile = async (Message) => {
  const Post = `${BASE_URL}api/leave-message/`;
  const res = await axios.post(Post, Message);
  return res;
};

export const useLeaveMessage = () => {
  const { mutate, isLoading, isPending } = useMutation({
    mutationFn: (Message) => UpdateProfile(Message),
    onSuccess: (data) => {
      toast.success(data.data.message);
    },
    onError: (err) =>
      toast.error(
        err.message == "Network Error"
          ? "  Please Try Again Later ! "
          : err.error
      ),
  });

  return { mutate, isPending, isLoading };
};
