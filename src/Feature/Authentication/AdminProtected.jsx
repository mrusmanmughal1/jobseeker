import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useUserinfo } from "../../Context/Userinfo";

const AdminProtected = ({ children }) => {
  const navigate = useNavigate();
  const { auth, user_type } = useUserinfo();
  useEffect(() => {
    if (!auth) {
      navigate("/login");
    }
  }, [auth, navigate]);
  if (user_type == "administrator") {
    return children;
  } else {
    navigate("/");
  }
};

export default AdminProtected;
