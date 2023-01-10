import axios from "axios";
import React, { useEffect, useState } from "react";
import { Navbar } from "../../components/Navbar/Navbar";
import delicious_product from "../../images/delicious_product.png";
import "./Allproducts.css";
import { Button } from "antd";
import { Footer } from "../../components/Footer/Footer";

const Allproducts = () => {
  let [products, setProducts] = useState([]);

  let getProducts = () => {
    axios
      .get("http://localhost:8080/allProducts")
      .then((res) => {
        products = res.data;
        setProducts(products);
        console.log(products);
      })
      .catch((e) => {
        console.log(e);
      });
  };

  useEffect(() => {
    getProducts();
  }, []);

  return (
    <>
      <Navbar />

      <div className="main_prduct_div">
        <div className="product_banner">
          <img src={delicious_product} alt="productImage" />
        </div>
        <div className="product_div">
          {products.map((item, index) => {
            return (
              <div key={item.id} className="child_product_div">
                <img src={item.image} alt="" />
                <h1>{item.title}</h1>
                <p>{item.description}</p>
                <Button type="primary">Shop Now</Button>
              </div>
            );
          })}
        </div>
        <Footer />
      </div>
    </>
  );
};

export { Allproducts };
