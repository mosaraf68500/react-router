import React from "react";
import Header from "../Header/Header";
import { Outlet } from "react-router";
import Mobiles from "../Mobiles/Mobiles";
import Footer from "../Footer/Footer";
import AsideBar from "../AsideBar/AsideBar";

const Root = () => {
  return (
    <div>
      <header>
        <Header></Header>
      </header>
      <div className="flex gap-7 w-1/2 mx-auto">
        <AsideBar></AsideBar>

        <Outlet></Outlet>
      </div>

      <div className="mt-10">
        <Footer></Footer>
      </div>
    </div>
  );
};

export default Root;
