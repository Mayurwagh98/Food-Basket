import React from "react";
import { Navbar } from "../../components/Navbar/Navbar";
import rooted from "../../images/rooted2.png";
import "./Home.css"
import {AdvancedCarousel} from "../../components/Slider"

const Home = () => {
  return (
    <>
      <div>
        <Navbar />
      </div>
      <div className="rooted_div">
        <img src={rooted} alt=""  />
      </div>
      <div className="featured_products_heading">
        <h3>BEST-SELLING WELLNESS ESSENTIALS</h3>
        <h1>Featured Products</h1>
      </div>
      <div>
        <AdvancedCarousel />
      </div>
    </>
  );
};

export { Home };
