import React from "react";
import { Navbar } from "../../components/Navbar/Navbar";
import rooted from "../../images/rooted2.png";
import "./Home.css";
import { AdvancedCarousel } from "../../components/Slider";

const Home = () => {
  return (
    <>
      <div>
        <Navbar />
      </div>
      <div className="rooted_div">
        <img src={rooted} alt="" />
      </div>
      <div className="featured_products_heading">
        <h3>BEST-SELLING WELLNESS ESSENTIALS</h3>
        <h1>Featured Products</h1>
      </div>
      <div>
        <AdvancedCarousel />
      </div>
      <div className="philosophy_div">
        <div className="philosophy_heading">
          <h2>Our Nutrition Philosophy</h2>
        </div>
        <div className="philosophy_content">
          <h3>
            We believe in a whole-food, plant-rich diet. Our proprietary
            science-backed nutrition philosophy delivers life-transforming
            results.
          </h3>
        </div>
      </div>
    </>
  );
};

export { Home };
