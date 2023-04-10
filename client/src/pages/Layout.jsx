import Featured from "components/featured/Featured";
import Footer from "components/footer/Footer";
import Header from "components/header/Header";
import Navbar from "components/navbar/Navbar";
import React from "react";
import { Outlet } from "react-router-dom";

const Layout = () => {
  return (
    <div>
      <Navbar />
      <Outlet />
      <Footer />
    </div>
  );
};

export default Layout;
