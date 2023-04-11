import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Layout from "./pages/Layout";
import Home from "pages/home/Home";
import RestaurantDetail from "components/restaurantDetail/RestaurantDetail";
import Auth from "pages/auth/Auth";
import Register from "pages/auth/Register/Register";
import Login from "pages/auth/Login/Login";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "",
        element: <Home />,
      },
      {
        path: "restaurant/:restaurantId",
        element: <RestaurantDetail />,
      },
    ],
  },
  {
    element: <Auth />,
    children: [
      {
        path: "login",
        element: <Login />,
      },
      {
        path: "register",
        element: <Register />,
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
