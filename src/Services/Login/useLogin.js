import { useMutation } from "@tanstack/react-query";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
const getLogin = (credentials) => {
  return credentials;
};

export const useLogin = () => {
  const navigate = useNavigate();
  const { mutate, isLoading } = useMutation({
    mutationFn: (credentials) => getLogin(credentials),
    onSuccess: (data) => {
      const { role } = data;

      if (role == "admin") {
        // If role is admin, navigate to admin dashboard
        navigate("/admin/dashboard", { replace: true });
      } else {
        // Otherwise, navigate to regular user dashboard
        navigate("/dashboard", { replace: true });
      }
      console.log(data);
      toast.success("Successfully Logged in !");
      //   query.setQueryData(["user"], user.user);
    },
    onError: (err) => toast.error(err.message),
  });

  return { mutate, isLoading };
};
