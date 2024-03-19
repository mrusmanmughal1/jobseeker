import { useNavigate } from "react-router-dom";

const ProtectedRoutes = ({ children }) => {
  const isAuth = 1;
  const navigate = useNavigate();

  //   if user is Authentic
  if (!isAuth) {
    navigate("/login");
  }
  if (isAuth) return children;
};

export default ProtectedRoutes;
