import React from "react";
import { Navigate } from "react-router-dom";
import { useAppSelector } from "../app/hooks";
import { userSelector } from "../slices/userSlice";

interface Props {
  children: React.ReactNode;
}

const PrivateRoutes: React.FC<Props> = ({ children }) => {
  const { user } = useAppSelector(userSelector);
  if (user) return <>{children}</>;
  else return <Navigate to="/admin/login" replace={true} />;
};

export default PrivateRoutes;
