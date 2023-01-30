import axios, { all } from "axios";
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
import { Navigate, useNavigate } from "react-router-dom";

const Allproducts = () => {
  let [products, setProducts] = useState([]);
  let naviagate = useNavigate();
  let getProducts = () => {
    axios
      .get("http://localhost:8080/allProducts")
      // .get("https://handsome-dog-overalls.cyclic.app")
      .then((res) => {
        // products = res.data;
        setProducts(res.data);
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

  let navtoOrganicSweetners = () => {
    naviagate("/organic_coconut_sweetners");
  };

  let navtoSuces = () =>{
    naviagate("/sauces")
  }
  let allProducts = [
    {
      id: 1,
      image:
        "https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcSydf890klc-Lxgngu9FyqfbZbEkDqBXmzNqK7R2OJUhxZr2-bR3PgvpymtVyl5RuV5e9Z9Q0N9JGiAb5R9ZnpJQr_xXfqHwnVjnTUDE7E&usqp=CAE",
      title: "Coconut Sweetners",
      description:
        "Unrefined, minimally processed, low glycemic and rich in essential minerals and amino acid, our Coconut Sugars offer incredibly delicious and better-for-you 1:1 replacements to cane sugar.",
    },
    {
      id: 2,
      image:
        "https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcRPdTJ9rY5l7-bLp_HJYHNXe8TlJR-NN3zzFwdXJ_FS9ejC9HQqAZZncvXY3EniAKdjtWhxdyBSN5pTLNWfdL3w3EVgz5_ewVe6vCIxM4U&usqp=CAE",
      title: "Sauces and Marinades",
      description:
        "Soy-free, gluten-free, refined sugar-free, with less sodium than soy sauce and Whole30 Approved, these tasty better-for-you seasoning sauces and marinades elevate any dish!",
    },
  ];
  return (
    <>
      <Navbar />
      <ScrollToTop smooth />
      <div className="main_prduct_div">
        <div className="product_banner">
          <img src={delicious_banner} alt="productImage" />
        </div>
        <div className="product_div">
          {/* {products.map((item, index) => {
            return ( */}
          <div className="child_product_div">
            <img src={allProducts[0].image} alt="" />
            <h1>{allProducts[0].title}</h1>
            <p>{allProducts[0].description}</p>
            <Button type="primary" onClick={navtoOrganicSweetners}>
                  Shop Now
                </Button>
          </div>
          <div className="child_product_div">
            <img src={allProducts[1].image} alt="" />
            <h1>{allProducts[1].title}</h1>
            <p>{allProducts[1].description}</p>
            <Button type="primary" onClick={navtoSuces}>
                  Shop Now
                </Button>
          </div>
          {/* );
          })} */}
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
