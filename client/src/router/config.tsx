import React from "react";

import { Roles } from "../utils/types";
import NotFound from "../pages/Errors/NotFound";
import AccessDenied from "../pages/Errors/AccessDenied";
import PrivateRoutes from "./PrivateRoutes";

import Home from "../pages/Home";
import Layout from "../components/layouts/Layout";

import Admin from "../pages/Admin";
import LoginForm from "../components/admin/LoginForm";
import Dashboard from "../components/admin/Dashboard";
import Crud from "../components/admin/Crud";
import Settings from "../components/admin/Settings";

import RestaurantDetails from "../components/restaurants/RestaurantDetails";
import RestaurantList from "../components/restaurants/RestaurantList";

import ReservationForm from "../components/reservation/ReservationForm";
import Reservations from "../components/admin/Reservation/Reservations";
import ReservationDetails from "../components/reservation/ReservationDetails";

import Mapping from "../components/common/Mapping";

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
        path: "restaurants",
        element: <RestaurantList />,
      },
      {
        path: "restaurants/:restaurantId",
        element: <RestaurantDetails />,
      },
      {
        path: "reservation",
        element: <ReservationForm />,
      },
      {
        path: "map",
        element: <Mapping mode="rect" />,
      },
      {
        path: "reservation/:reservationId",
        element: <ReservationDetails />,
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
          <PrivateRoutes roles={[Roles.God, Roles.Admin]}>
            <Dashboard />
          </PrivateRoutes>
        ),
        children: [
          {
            path: "crud",
            element: (
              <PrivateRoutes roles={[Roles.God]}>
                <Crud />
              </PrivateRoutes>
            ),
          },
          {
            path: "settings",
            element: <Settings />,
          },
          {
            path: "reservations",
            element: (
              <PrivateRoutes roles={[Roles.Admin]}>
                <Reservations />
              </PrivateRoutes>
            ),
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
