import { useMutation, useQuery } from "@tanstack/react-query";
import { BASE_URL } from "../../config/Config";
import axios from "axios";
import { useUserinfo } from "../../Context/Userinfo";
import toast from "react-hot-toast";

const ApplyJob = async ( id) => {
  const API = `${BASE_URL}api/jobs/apply/`;

  const token = localStorage.getItem("Token");
  const res = await axios.post(
    API,
    {
      "job": id,
    },
    {
      headers: {
        Authorization: `Token ${token}`,
      },
    }
  );
  return res;
};

export const useApplyJob = () => {
  const { mutate, isLoading } = useMutation({
    mutationFn: (job_id) => ApplyJob(job_id),
    onSuccess: (res) => {
      toast.success(res.data.message);
    },
    onError: (err) => {
      toast.error(err.response.data.error);
    },
  });

  return { mutate, isLoading };
};
