import React from "react";

import NotFound from "../pages/Errors/NotFound";
import AccessDenied from "../pages/Errors/AccessDenied";

import Home from "../pages/Home";
import RestaurantDetails from "../components/restaurants/RestaurantDetails";
import Layout from "../components/layouts/Layout";
import Admin from "../pages/Admin";
import LoginForm from "../components/admin/LoginForm";
import Dashboard from "../components/admin/Dashboard";
import Crud from "../components/admin/Crud";
import Settings from "../components/admin/Settings";
import PrivateRoutes from "./PrivateRoutes";

const routes = [
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "restaurnat/:restaurantId",
        element: <RestaurantDetails />,
      },
    ],
  },
  {
    path: "/admin",
    element: <Admin />,
    children: [
      {
        path: "login",
        element: <LoginForm />,
      },
      {
        path: "dashboard",
        element: (
          <PrivateRoutes>
            <Dashboard />
          </PrivateRoutes>
        ),
        children: [
          {
            path: "crud",
            element: <Crud />,
          },
          {
            path: "settings",
            element: <Settings />,
          },
        ],
      },
    ],
  },
  {
    path: "/AccessDenied",
    element: <AccessDenied />,
  },
  {
    path: "*",
    element: <NotFound />,
  },
];

export default routes;
