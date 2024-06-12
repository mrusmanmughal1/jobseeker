import { useQuery } from "@tanstack/react-query";
import { BASE_URL } from "../../config/Config";
import axios from "axios";
import { useUserinfo } from "../../Context/Userinfo";

const CandidateDetails = async (id) => {

  const API = `${BASE_URL}api/candidate-profile/${id}/`;

  const token = localStorage.getItem("Token");
  console.log(`Token ${token}`);

  const res = await axios.get(API, {
    headers: {
      Authorization: `Token ${token}`,
    },
  });
  return res;
};

export const useCandidateDetails = () => {
    const { user_id } = useUserinfo();
  const { data, isLoading, isError, status } = useQuery({
    queryKey: ["candidate"],
    queryFn: () => CandidateDetails(user_id ),
  });
  return { data, isLoading, status, isError };
};
