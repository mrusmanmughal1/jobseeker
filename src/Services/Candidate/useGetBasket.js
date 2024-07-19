import { useQuery } from "@tanstack/react-query";
import { BASE_URL } from "../../config/Config";
import axios from "axios";

const JobBasket = async () => {
  const API = `${BASE_URL}api/job-basket/`;
  const token = localStorage.getItem("Token");

  const res = await axios.get(API, {
    headers: {
      Authorization: `Token ${token}`,
    },
  });
  return res;
};

export const useGetBasket = () => {
  const { data, isLoading, isError, status } = useQuery({
    queryKey: ["basket"],
    queryFn: () => JobBasket(),
  });
  return { data, isLoading, status, isError };
};
