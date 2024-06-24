// api/employers-profile-list/

import { useQuery } from "@tanstack/react-query";
import { BASE_URL } from "../../config/Config";
import axios from "axios";

const getAllEmployers = async () => {
  const API = `${BASE_URL}api/employers-profile-list/`;


  const Token = localStorage.getItem("Token");

  const config = {
    headers: {
      Authorization: `Token ${Token}`,
    },
  };
  const res = await axios.get(API , config);
  return res;
};

export const useAllEmployer = () => {
  const { data, isLoading, isError, status } = useQuery({
    queryKey: ["admin-Employer-List"],
    queryFn: getAllEmployers,
  });
  return { data, isLoading, status, isError };
};
