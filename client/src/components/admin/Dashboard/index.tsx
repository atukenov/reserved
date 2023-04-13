import React from "react";
import Container from "../../common/Container";
import AdminMenu from "../AdminMenu";
import { Outlet } from "react-router-dom";

const Dashboard = () => {
  return (
    <Container>
      <AdminMenu />
      <Outlet />
    </Container>
  );
};

export default Dashboard;
