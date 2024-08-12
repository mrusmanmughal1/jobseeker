import { useQuery } from "@tanstack/react-query";
import { BASE_URL } from "../../config/Config";
import axios from "axios";

const getSpecialization = async () => {
  const API = `${BASE_URL}api/specialization-skills/`;

  const res = await axios.get(API);
  return res;
};

export const useSpecializationSkills = () => {
  const { data, isLoading, isError, status } = useQuery({
    queryKey: ["specializations"],
    queryFn: getSpecialization,
  });
  return { data, isLoading, status, isError };
};
