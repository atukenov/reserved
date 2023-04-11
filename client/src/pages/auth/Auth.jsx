import React from "react";
import { Link, NavLink, Outlet } from "react-router-dom";

import "./auth.css";

const Auth = () => {
  return (
    <div className="container">
      <h1>Welcome to board.</h1>
      <div className="navItems">
        <NavLink to={"/register"} className="navItem">
          Register
        </NavLink>
        <NavLink to={"/login"} className="navItem">
          Login
        </NavLink>
      </div>

      <Outlet />
    </div>
  );
};

export default Auth;
