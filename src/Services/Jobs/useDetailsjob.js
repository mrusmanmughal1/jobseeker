import { useQuery } from "@tanstack/react-query";
import { BASE_URL } from "../../config/Config";
import axios from "axios";
import { useParams } from "react-router-dom";

const getJobDetails = async (id) => {
  const API = `${BASE_URL}api/jobs/${id}/`;

  const token = localStorage.getItem("Token");
  console.log(`Token ${token}`);

  const res = await axios.get(API, {
    headers: {
      Authorization: `Token ${token}`,
    },
  });
  return res;
};

export const useJobDetails = () => {
  const {id} = useParams()

  const { data, isLoading, isError, status } = useQuery({
    queryKey: ["candidate"],
    queryFn: () => getJobDetails(id),
  });
  return { data, isLoading, status, isError };
};
