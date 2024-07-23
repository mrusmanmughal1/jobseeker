import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { BASE_URL } from "../../config/Config";
import axios from "axios";

import toast from "react-hot-toast";

const ClearJobBasket = async () => {
  const API = `${BASE_URL}api/job-basket/`;
  const token = localStorage.getItem("Token");

  const res = await axios.delete(API, {
    headers: {
      Authorization: `Token ${token}`,
    },
  });
  return res;
};

export const useClearJobBasket = () => {
  const queryClient = useQueryClient();

  const { mutate, isLoading, isError } = useMutation({
    mutationFn: () => ClearJobBasket(),
    onSuccess: (res) => {
      toast.success(res.data.message);
      queryClient.invalidateQueries({ queryKey: ["basket"] });
    },
    onError: (err) => {
      console.log(err);
      toast.error(err.response.data.message);
    },
  });

  return { mutate, isLoading, isError };
};
