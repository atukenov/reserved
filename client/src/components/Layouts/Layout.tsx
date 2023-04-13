import React from "react";
import ScrollToTop from "../common/ScrollToTop";
import Navbar from "../common/Navbar";
import Footer from "../common/Footer";
import { Outlet } from "react-router-dom";

const Layout = () => {
  return (
    <>
      <div id="top" />
      <ScrollToTop />
      <Navbar />
      <Outlet />
      <Footer />
    </>
  );
};

export default Layout;
