import React from "react";
import { Navigate } from "react-router-dom";
import { useAppSelector } from "../app/hooks";
import { userSelector } from "../slices/userSlice";
import { Roles } from "../utils/types";
import AccessDenied from "../pages/Errors/AccessDenied";

interface Props {
  roles: Roles[];
  children: React.ReactNode;
}

const PrivateRoutes: React.FC<Props> = ({ roles, children }) => {
  const { user } = useAppSelector(userSelector);
  const isInRole = user && roles.includes(user.role);
  if (!user) return <Navigate to="/admin/login" replace={true} />;
  else if (!isInRole) return <AccessDenied />;
  return <>{children}</>;
};

export default PrivateRoutes;
