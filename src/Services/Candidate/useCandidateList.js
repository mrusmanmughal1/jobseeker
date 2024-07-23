import { useQuery } from "@tanstack/react-query";
import { BASE_URL } from "../../config/Config";
import axios from "axios";

const GetAllCandidateList = async () => {
  const API = `${BASE_URL}api/candidates-profiles-list/`;

  const token = localStorage.getItem("Token");

  const res = await axios.get(API, {
    headers: {
      Authorization: `Token ${token}`,
    },
  });
  return res;
};

export const useAllCandidates = () => {
  const { data, isLoading, isError, status } = useQuery({
    queryKey: ["allCandidates"],
    queryFn: GetAllCandidateList,
  });
  return { data, isLoading, status, isError };
};
