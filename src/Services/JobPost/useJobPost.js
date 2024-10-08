import { useMutation } from "@tanstack/react-query";
import toast from "react-hot-toast";
import { BASE_URL } from "../../config/Config";
import axios from "axios";
const JobTheJob = async (formData) => {
  const Post = `${BASE_URL}api/jobs/create/`;
  const token = localStorage.getItem("Token");
  if (formData.remote_work) {
    delete formData.addresses;
  }
  console.log(formData);
  console.log(`Token ${token}`);

  const res = await axios.post(Post, formData, {
    headers: {
      Authorization: `Token ${token}`,
    },
  });
  return res;
};

export const useJobPost = () => {
  const { mutate, isPending } = useMutation({
    mutationFn: (JONFORM) => JobTheJob(JONFORM),
    onSuccess: (res) => {
      console.log(res);
      toast.success(res.data.message);
      return res;
    },
    onError: (err) => {
      console.log(err), toast.error(err.response.data);
    },
  });

  return { mutate, isPending };
};
