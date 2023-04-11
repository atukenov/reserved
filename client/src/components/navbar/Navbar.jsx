import React from "react";
import "./navbar.css";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="custom-navbar">
      <div className="navContainer">
        <span className="logo">RESERVED</span>
        <div className="navItems">
          <Link to={"/register"} className="navButton">
            Register
          </Link>
          <Link to={"/login"} className="navButton">
            Login
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
