import axios from "axios";
import React, { useEffect, useState } from "react";
import { Navbar } from "../../components/Navbar/Navbar";
import "./ShopAll.css";

const ShopAll = () => {
  let [shopData, setShopData] = useState([]);
  let [isChecked, setIsChecked] = useState(false);

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

  let handleChange = (event) => {
    // console.log(event.target.value)
    if (event.target.value == "") {
      axios
        .get(`http://localhost:8080/sakara`)
        .then((res) => {
          // console.log(res.data);
          setShopData(res.data);
          isChecked ? setIsChecked(true) : setIsChecked(false);
        })
        .catch((e) => {
          console.log(e);
        });
    } else {
      axios
        .get(`http://localhost:8080/sakara?category=${event.target.value}`)
        .then((res) => {
          // console.log(res.data);
          setShopData(res.data);
        })
        .catch((e) => {
          console.log(e);
        });
    }
  };

 

  return (
    <>
      <Navbar />
      <h1 style={{ textAlign: "center", margin: "auto", paddingTop: "150px" }}>
        shop
      </h1>
      <div className="filter_shop_div">
        <h2>Refine By Category</h2>
        <label>
          <input
            type="checkbox"
            onChange={handleChange}
            value=""
            
          />
          All Products
        </label>
        <br />
        <label htmlFor="">
          <input
            type="checkbox"
            onChange={handleChange}
            value="Best Seller"
            
          />
          Best Sellers
        </label>
        <br />
        <label htmlFor="">
          <input type="checkbox" onChange={handleChange} value="Featured" />
          Featured
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
