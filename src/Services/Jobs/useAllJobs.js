import { useQuery } from "@tanstack/react-query";

const getAllJobs = async () => {
  try {
    const api = "https://jsonplaceholder.typicode.com/todos";

    const res = await fetch(api).then((a) => a.json());
    return res;
  } catch (error) {
    console.log(error);
    throw error;
  }
};

export const useAllJobs = () => {
  const { data, isLoading, isError, status } = useQuery({
    queryKey: ["allJobs"],
    queryFn: getAllJobs,
  });
  return { data, isLoading, status, isError };
};
