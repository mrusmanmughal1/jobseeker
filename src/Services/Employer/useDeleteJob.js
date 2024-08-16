import { useMutation, useQueryClient } from "@tanstack/react-query";
import { BASE_URL } from "../../config/Config";
import axios from "axios";
import toast from "react-hot-toast";

const DeleteJob = async (id) => {
  const API = `${BASE_URL}api/jobs/${id}/delete/`;

  const token = localStorage.getItem("Token");

  const res = await axios.delete(
    API,

    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }
  );
  return res;
};

export const useDeleteJob = () => {
  const queryClient = useQueryClient();
  const { mutate, isLoading, isError } = useMutation({
    mutationFn: (id) => DeleteJob(id),
    onSuccess: (res) => {
      console.log(res, " delete");
      toast.success(res.data.message);
      queryClient.invalidateQueries({ queryKey: ["Employer-history"] });
    },
    onError: (err) => {
      console.log(err);
      toast.error(err.response.data.error);
    },
  });

  return { mutate, isLoading, isError };
};
