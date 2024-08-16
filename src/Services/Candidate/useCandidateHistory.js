import { useQuery } from "@tanstack/react-query";
import { BASE_URL } from "../../config/Config";
import axios from "axios";
import { useUserinfo } from "../../Context/AuthContext";

const CandidateJObHistory = async () => {
  const API = `${BASE_URL}api/candidate/applications/`;

  const token = localStorage.getItem("Token");

  const res = await axios.get(API, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  return res;
};

export const useCandidateHistory = () => {
  const { user_id, user_type } = useUserinfo();
  const { data, isLoading, isError, status } = useQuery({
    queryKey: ["Candidate-history"],
    queryFn: () => CandidateJObHistory(user_id),
    enabled: user_type === "candidate",
  });
  return { data, isLoading, status, isError };
};
