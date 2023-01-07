import React from "react";
import { Organics } from "../Organics";
import { ShopAll } from "../Shopall";
import "./Navbar.css";

const Navbar = () => {
  return (
    <div className="main_navbar">
      <div className="heading">
        <h1>Food-Basket</h1>
      </div>
      <div className="navbar">
        <ShopAll />
        <Organics />
        <ShopAll />
        <ShopAll />
      </div>
    </div>
  );
};

export { Navbar };
