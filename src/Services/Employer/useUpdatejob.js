import { useMutation, useQueryClient } from "@tanstack/react-query";
import { BASE_URL } from "../../config/Config";
import axios from "axios";
import { useUserinfo } from "../../Context/AuthContext";
import toast from "react-hot-toast";

const updateJob = async (Credndials, id) => {
  const API = `${BASE_URL}api/jobs/${id}/update/`;

  const token = localStorage.getItem("Token");
  const res = await axios.patch(API, Credndials, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  return res;
};

export const useUpdatejob = (id) => {
  const queryClient = useQueryClient();
  const { mutate, isPending, isError } = useMutation({
    mutationFn: (credentials) => updateJob(credentials, id),
    onSuccess: (res) => {
      console.log(res);
      toast.success("Job Updated");
      queryClient.invalidateQueries({ queryKey: ["Employer-history"] });
    },
    onError: (err) => {
      console.log(err);
      toast.error(err.response.data.error);
    },
  });

  return { mutate, isPending, isError };
};
