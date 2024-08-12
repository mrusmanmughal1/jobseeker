import { useQuery } from "@tanstack/react-query";
import { BASE_URL } from "../../config/Config";
import axios from "axios";

const getSearchedData = async (val) => {
  const {
    title = "",
    location = "",
    isRemote,
    keyword = "",
    specializations_skills = "",
  } = val.searched;

  const params = new URLSearchParams();
  if (keyword) params.append("keyword", keyword);
  if (title) params.append("job_title", title);
  if (location) params.append("city", location);
  if (specializations_skills)
    params.append("specializations_skills", specializations_skills);

  params.append("remote", isRemote || false);
  params.append("page", val.page);
  console.log(params.toString(), "params");
  console.log(params.remote);
  const API = `${BASE_URL}api/jobs/search/?${params.toString()}`;
  console.log(API, "APIII");
  const res = await axios.get(API);
  return res;
};

export const useSearchAPI = (searched, page = 1) => {
  const { data, isLoading, isError, status } = useQuery({
    queryKey: ["searched", searched],
    queryFn: () => getSearchedData({ searched, page }),
  });
  return { data, isLoading, status, isError };
};
