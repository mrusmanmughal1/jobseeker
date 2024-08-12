import { useMutation } from "@tanstack/react-query";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import { BASE_URL } from "../../config/Config";
import axios from "axios";
const PosTRegistrationForm = async (FormData) => {
  const API = `${BASE_URL}api/register/`;
  const res = await axios.post(API, FormData);
  return res;
};

export const useRegister = () => {
  const navigate = useNavigate();
  const { mutate, isPending } = useMutation({
    mutationFn: (FORMDATA) => PosTRegistrationForm(FORMDATA),
    onSuccess: (data) => {
      navigate("/login", { replace: true });

      toast.success(data.data.message);
    },
    onError: (err) => {
      toast.error(
        err.response.data.phone ||
          err.response.data.email ||
          err.response.data.username
      );
    },
  });

  return { mutate, isPending };
};
