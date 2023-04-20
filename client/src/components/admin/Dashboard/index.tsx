import React from "react";
import Container from "../../common/Container";
import { Outlet } from "react-router-dom";
import { useAppSelector } from "../../../app/hooks";
import { userSelector } from "../../../slices/userSlice";
import { Roles } from "../../../utils/types";

import GodMenu from "../GodMenu";
import AdminMenu from "../AdminMenu";

const Dashboard = () => {
  const { user } = useAppSelector(userSelector);
  return (
    <Container>
      {user && user.role === Roles.God && <GodMenu />}
      {user && user.role === Roles.Admin && <AdminMenu />}
      <Outlet />
    </Container>
  );
};

export default Dashboard;
