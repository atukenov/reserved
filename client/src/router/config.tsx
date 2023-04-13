import React from "react";
import PrivateRoute from "./PrivateRoute";

import NotFound from "../pages/Errors/NotFound";
import AccessDenied from "../pages/Errors/AccessDenied";

import Home from "../pages/Home";
import RestaurantDetails from "../components/restaurants/RestaurantDetails";
import Layout from "../components/Layouts/Layout";

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
        path: ":restaurantId",
        element: <RestaurantDetails />,
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
