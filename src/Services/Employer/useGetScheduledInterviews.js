import { useQuery } from "@tanstack/react-query";
import { BASE_URL } from "../../config/Config";
import axios from "axios";
import { useUserinfo } from "../../Context/AuthContext";

const ScheduledData = async () => {
  const API = `${BASE_URL}api/interviews/`;

  const token = localStorage.getItem("Token");

  const res = await axios.get(API, {
    headers: {
      Authorization: `Token ${token}`,
    },
  });
  return res;
};

export const useGetScheduledInterview = () => {
  const { data, isLoading, isError, status } = useQuery({
    queryKey: ["Interviews"],
    queryFn: () => ScheduledData(),
  });
  return { data, isLoading, status, isError };
};
