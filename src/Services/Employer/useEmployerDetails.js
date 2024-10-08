import { useQuery } from "@tanstack/react-query";
import { BASE_URL } from "../../config/Config";
import axios from "axios";
import { useUserinfo } from "../../Context/AuthContext";

const EmployerDetails = async (id) => {
  const API = `${BASE_URL}api/employer-profile/${id}/`;

  const token = localStorage.getItem("Token");

  const res = await axios.get(API, {
    headers: {
      Authorization: `Token ${token}`,
    },
  });
  return res;
};

export const useEmployerDetails = () => {
  const { user_id, user_type } = useUserinfo();
  const { data, isLoading, isError, status } = useQuery({
    queryKey: ["Employer"],
    queryFn: () => EmployerDetails(user_id),
    enabled: user_type === "employer",
  });
  return { data, isLoading, status, isError };
};
