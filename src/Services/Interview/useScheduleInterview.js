import { useMutation, useQueryClient } from "@tanstack/react-query";
import { BASE_URL } from "../../config/Config";
import axios from "axios";
import toast from "react-hot-toast";

const ScheduleInterview = async (data) => {
  const API = `${BASE_URL}api/interviews/`;

  const token = localStorage.getItem("Token");

  const res = await axios.post(
    API,
    data,

    {
      headers: {
        Authorization: `Token ${token}`,
      },
    }
  );
  return res;
};

export const useScheduleInterview = () => {
  const queryClient = useQueryClient();
  const { mutate, isLoading, isError } = useMutation({
    mutationFn: (data) => ScheduleInterview(data),
    onSuccess: (res) => {
      toast.success(res.data.message);
      queryClient.invalidateQueries({ queryKey: ["Interview"] });
      return res;
    },
    onError: (err) => {
      console.log(err);
      toast.error(err.response.data.message);
    },
  });

  return { mutate, isLoading, isError };
};
