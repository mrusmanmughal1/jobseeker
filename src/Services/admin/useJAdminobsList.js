import { useQuery } from "@tanstack/react-query";
import { BASE_URL } from "../../config/Config";
import axios from "axios";

const getJobsListAdmin = async () => {
  const API = `${BASE_URL}api/admin/jobs/`;


  const Token = localStorage.getItem("Token");

  const config = {
    headers: {
      Authorization: `Token ${Token}`,
    },
  };
  const res = await axios.get(API , config);
  return res;
};

export const useJAdminobsList = () => {
  const { data, isLoading, isError, status } = useQuery({
    queryKey: ["admin-jobs"],
    queryFn: getJobsListAdmin,
  });
  return { data, isLoading, status, isError };
};
