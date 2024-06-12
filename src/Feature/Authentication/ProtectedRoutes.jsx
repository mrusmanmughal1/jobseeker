import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useUserinfo } from "../../Context/Userinfo";

const ProtectedRoutes = ({ children }) => {
  const navigate = useNavigate();
  const { auth, user_type } = useUserinfo();

  useEffect(() => {
    if (!auth) {
      navigate("/login");
    }
  }, [auth, navigate]);

  if (auth && (user_type === "candidate" || user_type === "employer")) {
    return children;
  } else {
    navigate("/");
  }
};

export default ProtectedRoutes;
