import { useQuery } from "@tanstack/react-query";
import { BASE_URL } from "../../config/Config";
import axios from "axios";

const SearchCandidates = async (query) => {
  const API = `${BASE_URL}api/candidate-profiles-filter/?${query}`;

  const token = localStorage.getItem("Token");

  const res = await axios.get(API, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  return res;
};
export const useSearchCandidates = (query) => {
  const { data, isLoading, isError, status } = useQuery({
    queryKey: ["candidates", query],
    queryFn: () => SearchCandidates(query),
    enabled: Boolean(query), // Only run the query if there is a query string
  });

  return { data, isLoading, isError, status };
};
