import React from "react";
import PrivateRoute from "./PrivateRoute";

import NotFound from "../pages/Errors/NotFound";
import AccessDenied from "../pages/Errors/AccessDenied";

import Home from "../pages/Home";

const routes = [
  {
    path: "/",
    element: <Home />,
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
