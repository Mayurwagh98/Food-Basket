import React from "react";
import { Organics } from "../Organics";
import { Shopall } from "../Shopall";
import "./Navbar.css";
import { Link } from "react-router-dom";
import { useAuth0 } from "@auth0/auth0-react";
import { Button } from "antd";

const Navbar = () => {
  const { loginWithRedirect, logout, user, isAuthenticated } = useAuth0();

  return (
    <div className="main_navbar">
      <div className="heading">
        <Link to="/" style={{ textDecoration: "none", color: "white" }}>
          <h1>Food-Basket</h1>
        </Link>
      </div>
      <div className="navbar">
        <Shopall />
        <Organics />
        <Link to="/about" style={{ textDecoration: "none", color: "white" }}>
          About Us
        </Link>
        {/* {isAuthenticated && <p>{user.name}</p>} */}
        {isAuthenticated ? (
          <Link
            style={{ textDecoration: "none", color: "white", margin: "10px" }}
            onClick={() => logout()}
          >
            Logout
          </Link>
        ) : (
          <Link
            style={{ textDecoration: "none", color: "white", margin: "10px" }}
            onClick={() => loginWithRedirect()}
          >
            Login/Signup
          </Link>
        )}
      </div>
    </div>
  );
};

export { Navbar };
