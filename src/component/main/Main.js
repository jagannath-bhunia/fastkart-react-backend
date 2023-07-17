import React from "react";
import Header from "../header/Header";
import Footer from "../footer/Footer";
import Menu from "../menu/Menu";
import { Outlet } from "react-router-dom";

function Main() {
  return (
    <div className="page-wrapper compact-wrapper" id="pageWrapper">
      <Header />
      <div className="page-body-wrapper">
        <Menu/>
        {/* <Outlet /> */}
        <Footer />
      </div>
    </div>
  );
}

export default Main;
