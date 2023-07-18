import React from "react";
import Header from "../header/Header";
import Footer from "../footer/Footer";
import Menu from "../menu/Menu";
import { Outlet } from "react-router-dom";

function Main() {
  return (
    <div className="wrapper">
      <Menu />
      <Header />
      <Outlet />
      <Footer />
    </div>
  );
}

export default Main;
