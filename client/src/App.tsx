import React from "react";
import Router from "./router";
import Alert from "./components/common/Alert";
import { Styles } from "./styles";
import { Outlet } from "react-router-dom";

const App = () => {
  return (
    <>
      <Styles />
      <Alert />
      <Router />
      <Outlet />
    </>
  );
};

export default App;
