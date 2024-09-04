import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { BASE_URL } from "../../config/Config";
import axios from "axios";
import toast from "react-hot-toast";

const ApplyJob = async ({ id, method }) => {
  const API = `${BASE_URL}api/jobs/apply/`;
  const token = localStorage.getItem("Token");
  const res = await axios({
    method,
    url: API,
    data: {
      job: id,
    },
    headers: {
      Authorization: `Token ${token}`,
    },
  });
  return res;
};

export const useApplyJob = () => {
  const queryClient = useQueryClient();

  const { mutate, isPending } = useMutation({
    mutationFn: ({ id, method }) => ApplyJob({ id, method }),
    onSuccess: (res) => {
      toast.success(res.data.message);
      queryClient.invalidateQueries({
        queryKey: ["basket", "Candidate-history"],
      });
    },
    onError: (err) => {
      toast.error(err.response.data.message);
    },
  });

  return { mutate, isPending };
};
