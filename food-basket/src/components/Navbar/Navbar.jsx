import React from "react";
import { Organics } from "../Organics";
import { ShopAll } from "../Shopall";
import "./Navbar.css";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="main_navbar">
      <div className="heading">
        <Link to="/" style={{ textDecoration: "none", color: "white" }}>
          <h1>Food-Basket</h1>
        </Link>
      </div>
      <div className="navbar">
        {/* <ShopAll /> */}
        <Organics />
        <Link to="/about" style={{ textDecoration: "none", color: "white" }}>
          About Us
        </Link>
        
      </div>
    </div>
  );
};

export { Navbar };
