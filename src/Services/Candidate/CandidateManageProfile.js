import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { BASE_URL } from "../../config/Config";
import axios from "axios";
import { useUserinfo } from "../../Context/AuthContext";
import toast from "react-hot-toast";

const CandidateDetails = async (Credndials, id) => {
  const API = `${BASE_URL}api/manage-candidate-profile/${id}/`;

  const token = localStorage.getItem("Token");
  const res = await axios.put(API, Credndials, {
    headers: {
      Authorization: `Token ${token}`,
    },
  });
  return res;
};

export const useCandidateManageProfile = () => {
  const { user_id } = useUserinfo();
  const queryClient = useQueryClient();
  const { mutate, isLoading } = useMutation({
    mutationFn: (credentials) => CandidateDetails(credentials, user_id),
    onSuccess: (res) => {
      toast.success(res.data.message);
      queryClient.invalidateQueries({ queryKey: ['candidate']});
    },
    onError: (err) => {
      console.log(err)
      toast.error(err.response.data.error);
    },
  });

  return { mutate, isLoading };
};
