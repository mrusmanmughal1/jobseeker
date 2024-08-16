import { useQuery } from "@tanstack/react-query";
import { BASE_URL } from "../../config/Config";
import axios from "axios";

const CandidateDetails = async (id) => {
  const API = `${BASE_URL}api/candidate-profile/${id}/`;

  const token = localStorage.getItem("Token");
  console.log(`Token ${token}`);
  console.log(id);
  const res = await axios.get(API, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  return res;
};

export const useCandidateDetail = (id) => {
  const { data, isLoading, isError, status, error } = useQuery({
    queryKey: ["employerCandidate", id],
    queryFn: () => CandidateDetails(id),
  });
  return { data, isLoading, status, isError, error };
};
