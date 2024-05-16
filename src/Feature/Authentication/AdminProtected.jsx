import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useUserinfo } from "../../Context/Userinfo";

const AdminProtected = ({ children }) => {
  const navigate = useNavigate();
  const { auth, role } = useUserinfo();
  useEffect(() => {
    if (!auth) {
      navigate("/login");
    }
  }, [auth, navigate]);
  if (role == "admin") {
    return children;
  } else {
    navigate("/");
  }
};

export default AdminProtected;
