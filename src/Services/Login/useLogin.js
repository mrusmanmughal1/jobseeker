import { useMutation } from "@tanstack/react-query";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
const getLogin = (credentials) => {
  console.log(credentials);
};

export const useLogin = () => {
  const navigate = useNavigate();
  const { mutate, isLoading } = useMutation({
    mutationFn: (credentials) => getLogin(credentials),

    onSuccess: () => {
      toast.success("Successfully Logged in  !");
      navigate("/dashboard", { replace: true });
      //   query.setQueryData(["user"], user.user);
    },
    onError: (err) => toast.error(err.message),
  });

  return { mutate, isLoading };
};
