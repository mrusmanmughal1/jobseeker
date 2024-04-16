import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useUserinfo } from "../../Context/Userinfo";

const AdminProtected = ({ children }) => {
  const navigate = useNavigate();
  const { auth, role } = useUserinfo();
  useEffect(() => {
    role !== "admin" ? navigate("/", { replace: true }) : children;
  }, [auth, navigate]);
};

export default AdminProtected;
