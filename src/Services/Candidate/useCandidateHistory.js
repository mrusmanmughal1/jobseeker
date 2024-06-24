import { useQuery } from "@tanstack/react-query";
import { BASE_URL } from "../../config/Config";
import axios from "axios";
import { useUserinfo } from "../../Context/Userinfo";

const CandidateJObHistory = async () => {
  const API = `${BASE_URL}api/employer/jobs-posting-history/`;

  const token = localStorage.getItem("Token");

  const res = await axios.get(API, {
    headers: {
      Authorization: `Token ${token}`,
    },
  });
  return res;
};

export const useJobHistoryEMp = () => {
  const { user_id } = useUserinfo();
  const { data, isLoading, isError, status } = useQuery({
    queryKey: ["Employer-history"],
    queryFn: () => CandidateJObHistory(user_id),
  });
  return { data, isLoading, status, isError };
};
