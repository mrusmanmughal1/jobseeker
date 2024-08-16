import { useQuery } from "@tanstack/react-query";
import { BASE_URL } from "../../config/Config";
import axios from "axios";

const adminjoblist = async (status) => {
  const API = `${BASE_URL}api/admin/jobs/?status=${status}`;
  const Token = localStorage.getItem("Token");

  const config = {
    headers: {
      Authorization: `Bearer ${Token}`,
    },
  };
  const res = await axios.get(API, config);
  return res;
};

export const useAdminJobsLIsts = (val) => {
  const { data, isLoading, isError, status } = useQuery({
    queryKey: ["admin-ARP"],
    queryFn: () => adminjoblist(val),
  });
  return { data, isLoading, status, isError };
};
