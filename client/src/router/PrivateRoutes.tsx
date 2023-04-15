import React from "react";
import { Navigate } from "react-router-dom";

interface Props {
  children: React.ReactNode;
}

const PrivateRoutes: React.FC<Props> = ({ children }) => {
  const token = localStorage.getItem("token");
  if (token) return <>{children}</>;
  else return <Navigate to="/admin/login" replace={true} />;
};

export default PrivateRoutes;
