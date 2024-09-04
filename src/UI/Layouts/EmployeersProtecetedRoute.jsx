import { useUserinfo } from "../../Context/AuthContext";
import { Navigate, useLocation } from "react-router-dom";

const EmployeersProtecetedRoute = ({ children }) => {
  const { user_type } = useUserinfo();
  const location = useLocation();

  if (user_type !== "employer") {
    // Redirect to a different page if not an employer
    return <Navigate to="/" state={{ from: location }} />;
  }

  return children;
};
export default EmployeersProtecetedRoute;
