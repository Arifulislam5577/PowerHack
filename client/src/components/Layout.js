import React, { memo } from "react";
import { Outlet } from "react-router-dom";
import Header from "./Header";

const Layout = memo(() => {
  return (
    <>
      <Header />
      <Outlet />
    </>
  );
});

export default Layout;
