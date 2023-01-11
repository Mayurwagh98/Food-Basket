import axios from "axios";
import React, { useEffect, useState } from "react";
import { Navbar } from "../../components/Navbar/Navbar";
import delicious_banner from "../../images/delicious_banner.png";
import "./Allproducts.css";
import { Button } from "antd";
import { Footer } from "../../components/Footer/Footer";
import ScrollToTop from "react-scroll-to-top";
import brc from "../../images/brc.png";
import gluten_free from "../../images/gluten_free.png";
import glycemic from "../../images/glycemic.png";
import organic_product from "../../images/organic_product.png";
import vegan from "../../images/vegan.png";
import { useNavigate } from "react-router-dom";

const Allproducts = () => {
  let [products, setProducts] = useState([]);
  let naviagate = useNavigate();
  let getProducts = () => {
    axios
      .get("http://localhost:8080/allProducts")
      .then((res) => {
        products = res.data;
        setProducts(products);
        // console.log(products);
      })
      .catch((e) => {
        console.log(e);
      });
  };

  useEffect(() => {
    getProducts();
  }, []);
  window.scrollTo(0, 0); // to scroll the page at the top whenever page loads

  let handleNavigate = () => {
    naviagate("/organic_coconut_sweetners");
  };
  return (
    <>
      <Navbar />
      <ScrollToTop smooth />
      <div className="main_prduct_div">
        <div className="product_banner">
          <img src={delicious_banner} alt="productImage" />
        </div>
        <div className="product_div">
          {products.map((item, index) => {
            return (
              <div key={item.index} className="child_product_div">
                <img src={item.image} alt="" />
                <h1>{item.title}</h1>
                <p>{item.description}</p>
                <Button type="primary" onClick={handleNavigate}>
                  Shop Now
                </Button>
              </div>
            );
          })}
        </div>
        <div className="logos">
          <img src={brc} alt="" />
          <img src={gluten_free} alt="" />
          <img src={glycemic} alt="" />
          <img src={organic_product} alt="" />
          <img src={vegan} alt="" />
        </div>
        <Footer />
      </div>
    </>
  );
};

export { Allproducts };
