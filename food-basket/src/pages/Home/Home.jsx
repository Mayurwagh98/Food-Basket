import React from "react";
import { Navbar } from "../../components/Navbar/Navbar";
import rooted from "../../images/rooted2.png";
import "./Home.css";
import { AdvancedCarousel } from "../../components/Slider";
import { Footer } from "../../components/Footer/Footer";

const Home = () => {
  return (
    <>
      <div style={{ height: "50px" }}>
        <Navbar />
      </div>
      <div className="rooted_div">
        <img src={rooted} alt="" />
      </div>
      <div className="featured_products_heading">
        <h3>BEST-SELLING WELLNESS ESSENTIALS</h3>
        <h1>Featured Products</h1>
        <div>
          <AdvancedCarousel />
        </div>
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

      <div className="rooted_all">
        <h1 className="goodness_heading">The Goodness Starts Here</h1>
        <div className="rooted_info">
          <h2>Rooted in Impact</h2>
          <p>
            Real food with Real purpose. Big Tree Farms vision is to seed
            beneficial change through the practice of regenerative agriculture
            by creating innovative organic foods that support better health, a
            balanced environment & fair economies for our farmer partners, our
            customers and our global community.
          </p>
        </div>
        <div className="rooted_img_div">
          <div>
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS7Gq6ZMBYjWO9obtgLWmih26QJvGtk-SsHLQ&usqp=CAU"
              alt="farmer image"
            />
            <h1>20,000+</h1>
            <p>Farmer Partner on the land of India</p>
          </div>
          <div>
            <img
              src="https://images.unsplash.com/photo-1503785640985-f62e3aeee448?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8dHJlZXN8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60"
              alt="trees image"
            />
            <h1>5 Million</h1>
            <p>
              We've conserved over 5 million trees that support rich and stable
              ecosystem
            </p>
          </div>
          <div>
            <img
              src="https://images.unsplash.com/photo-1598200315523-bec47b1115ef?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTd8fGFjcmVzfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60"
              alt="acres image"
            />
            <h1>30,000</h1>
            <p>Acres in India adopted regenrative farming system</p>
          </div>
        </div>
      </div>
      <div className="transformation_div">
        <div>
          <h1>Experience transformation in as little as one week.</h1>
        </div>

        <div className="transformation_img">
          <div>
            <img
              src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAY1BMVEX///8AAACSkpLt7e2goKDm5uaOjo7Ozs739/dNTU3Y2NiampomJibT09PIyMiqqqqysrI3Nzc+Pj7f399qamplZWUQEBBFRUUICAgYGBiFhYV3d3dTU1MtLS29vb1gYGAhISHk82sTAAACcUlEQVR4nO3a6XbiMAyG4RgChH1tS1d6/1c5TKELGUeyCVPZOe/zW+3Rd6CuLbsoAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA4vRHy7IsV/N+c8V8daxYjporEjbord2nzXDrqdgON18V697g1ztsZ7Bzl8ajWsVoXKvYZZWx5/51qH4UVAdPRc+s31hV/eM5m3xVTPwF40r4rQmp1v7+nfv8po6aCtZ5RGwM6Nxpwdk2F6yNew9y19y/e/+oeBcq7kx7D/ImtH9aTHzL0Lc36wCqe7F/VxWVXHBvHUBTyv27aTFVKkrrCIqZ0v+m2CgVM+sIsrnS/nE5VSvm1iFE8iry15NakfbW5kHt/1WteLAOIVLbd3u9xDqERPlPECjlrVv/JglTPg93P2HA32EA6xCixxsEfLQOIaoPL66xsw4hWt4g4dI6hGhwg4SJT6ReWgd8sY6g0LfemrQ33ke+MWGMg3UAVduNW8pbtrNFq4AL6/ZDaIMMSeojjLPrI2YSsFCHTU2m1o2H04cZPmmPL2qGVwQcWjcdRx841T1ZtxzrOTLgs3XD8eIiZhgw7qyY9pmwkXTPdimDOzW/0KNU6gcmQVjEjAMWRcObhQtj6ybbES71z7K4updoF4qJXxcGqOTLptcMTryavvQpzpKe4IfqN1+o7TsRULqv6UjAohj4n6DsE5/9xvA/T/A9Os2WL2KnAvreW070H8pL/cVl/c1wB1xOirOY/MZadD3gz4eZ6T+xvNLqHHBl3cj/s+p6wNM9f9r39K2V+dy+XKujqygAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAPhtfwBA5xPhiLlVMAAAAABJRU5ErkJggg=="
              alt="heart image"
            />
            <p>Improve Digestion</p>
          </div>
          <div>
            <img
              src="data:image/png;base64,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"
              alt="brain image"
            />
            <p>Increase Focus</p>
          </div>
          <div>
            <img
              src="data:image/png;base64,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"
              alt="skin image"
            />
            <p>Enhance Skin Clarity</p>
          </div>
          <div>
            <img
              src="data:image/png;base64,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"
              alt="boost energy image"
            />
            <p>Boost Energy</p>
          </div>
        </div>
      </div>
      <div className="healhty_qoute">
        {/* <div> */}
        <h4>In the Press</h4>
        <h1 style={{fontFamily:"NSimSun", fontSize:"35px", lineHeight:"0px"}}>“</h1>
        <h1>
          By choosing healthy over skinny you are choosing self-love over
          self-judgement.
        </h1>

        <h2>~Steve Maraboli</h2>
        {/* </div> */}
      </div>
      <Footer />
    </>
  );
};

export { Home };
