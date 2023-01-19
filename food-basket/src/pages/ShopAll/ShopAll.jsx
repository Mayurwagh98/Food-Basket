import axios from "axios";
import React, { useEffect, useState } from "react";
import { Navbar } from "../../components/Navbar/Navbar";
import "./ShopAll.css";

const ShopAll = () => {
  let [shopData, setShopData] = useState([]);

  let getShopData = () => {
    axios
      .get("http://localhost:8080/sakara")
      .then((res) => {
        console.log(res.data);
        setShopData(res.data);
      })
      .catch((e) => {
        console.log(e);
      });
  };

  useEffect(() => {
    getShopData();
  }, []);

  return (
    <>
      <Navbar />
      <h1 style={{ textAlign: "center", margin: "auto", paddingTop: "150px" }}>
        shop
      </h1>
      <div className="filter_shop_div">
        <h2>Refine By Category</h2>
        <label>
          <input type="checkbox" />
          All Products
        </label>
        <br />
        <label htmlFor="">
          <input type="checkbox" />
          Best Sellers
        </label>
        <br />
        <label htmlFor="">
          <input type="checkbox" />
          New Sellers
        </label>
      </div>
      <div className="main_shop_div">
        <div className="child_shop_div">
          {shopData.map((item, index) => {
            return (
              <div key={index}>
                <img src={item.image} alt="" />
                <h2>{item.title}</h2>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};

export { ShopAll };
