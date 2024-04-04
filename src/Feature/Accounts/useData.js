import { useQuery } from "@tanstack/react-query";

const getData = () => {
  const api = "https://jsonplaceholder.typicode.com/todos";

  const e = fetch(api).then((a) => a.json());
  return e;
};

export const useData = () => {
  const { data, isLoading } = useQuery({
    queryKey: ["data"],
    queryFn: getData,
  });
  return { data, isLoading };
};
