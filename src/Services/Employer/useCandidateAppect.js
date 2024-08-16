import { useMutation, useQueryClient } from "@tanstack/react-query";
import { BASE_URL } from "../../config/Config";
import axios from "axios";
import toast from "react-hot-toast";

const candidateapproval = async ({ id, status }) => {
  console.log(id, status);
  const API = `${BASE_URL}api/employer/dashboard/`;

  const token = localStorage.getItem("Token");

  const res = await axios.patch(
    API,
    {
      application_id: id,
      status: status,
    },
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }
  );
  return res;
};

export const useCandidateAppect = () => {
  const queryClient = useQueryClient();
  const { mutate, isLoading, isError } = useMutation({
    mutationFn: ({ id, status }) => candidateapproval({ id, status }),
    onSuccess: (res) => {
      console.log(res, " usman");
      toast.success(res.data.detail);
      queryClient.invalidateQueries({ queryKey: ["Employer-history"] });
    },
    onError: (err) => {
      console.log(err);
      toast.error(err.response.data.error);
    },
  });

  return { mutate, isLoading, isError };
};
