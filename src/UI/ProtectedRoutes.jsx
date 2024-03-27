import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useUserinfo } from "../Context/Userinfo";

const ProtectedRoutes = ({ children }) => {
  const navigate = useNavigate();
  const { user } = useUserinfo();
  useEffect(() => {
    if (!user) {
      navigate("/login");
    }
  }, [user, navigate]);

  if (user) return children;
};

export default ProtectedRoutes;
