import { useQuery } from "@tanstack/react-query";
import { BASE_URL } from "../../config/Config";
import axios from "axios";
import { useUserinfo } from "../../Context/AuthContext";

const CandidateDetails = async (id) => {
  const API = `${BASE_URL}api/candidate-profile/${id}/`;

  const token = localStorage.getItem("Token");

  const res = await axios.get(API, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  return res;
};

export const useCandidateDetails = () => {
  const { user_id, user_type } = useUserinfo();
  const { data, isLoading, isError, status } = useQuery({
    queryKey: ["candidate"],
    queryFn: () => CandidateDetails(user_id),
    enabled: user_type === "candidate",
  });
  return { data, isLoading, status, isError };
};
