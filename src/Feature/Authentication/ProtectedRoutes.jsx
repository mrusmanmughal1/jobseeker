import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useUserinfo } from "../../Context/Userinfo";

const ProtectedRoutes = ({ children }) => {
  const navigate = useNavigate();
  const { auth, role } = useUserinfo();

  useEffect(() => {
    if (!auth) {
      navigate("/login");
    }
  }, [auth, navigate]);

  if (auth && role === ("Candidate" || "employeer")) {
    return children;
  } else {
    navigate("/");
  }
};

export default ProtectedRoutes;
