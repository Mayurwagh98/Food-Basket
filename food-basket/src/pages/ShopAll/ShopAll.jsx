import axios from "axios";
import React, { useEffect, useState } from "react";
import { Navbar } from "../../components/Navbar/Navbar";
import "./ShopAll.css"

const ShopAll = () => {
  let [shopData, setShopData] = useState([]);

  let getShopData = () => {
    axios
      .get("http://localhost:8080/sakara")
      .then((res) => {
        console.log(res.data);
        setShopData(res.data)
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
      <div className="main_shop_div">
        <h1>shop</h1>
        <div className="child_shop_div">
          {
            shopData.map((item, index) =>{
              return(
                <div>
                  <img src={item.image} alt="" />
                  <h2>{item.title}</h2>
                </div>
              )
            })
          }
        </div>
      </div>
    </>
  );
};

export { ShopAll };
