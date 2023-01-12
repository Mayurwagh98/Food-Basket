import axios from "axios";
import React, { useEffect, useState } from "react";
import { Navbar } from "../../components/Navbar/Navbar";
import explore_recipes from "../../images/explore_recipes.png";
import "./ViewAll.css";
import { Button } from "antd";

const ViewAll = () => {
  let [recipes, setRecieps] = useState([]);

  let getRecipes = () => {
    axios
      .get("http://localhost:8080/recipes")
      .then((res) => {
        setRecieps(res.data);
      })
      .catch((e) => {
        console.log(e);
      });
  };

  useEffect(() => {
    getRecipes();
  }, []);

  return (
    <>
      <Navbar />
      <div className="main_recipes_div">
        <div className="recipes_img">
          <img src={explore_recipes} alt="" />
        </div>
        <h1>Recepies</h1>
        <div className="all_recipes">
          {recipes.map((item, index) => {
            return (
              <div key={index}>
                {/* <div> */}
                <img src={item.image} alt="" />
                <h2>{item.title}</h2>
                <p>{`Product Used - ${item.product_used}`}</p>
                {/* </div> */}
                {/* <Button type="primary">Recipe Details</Button> */}
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};

export { ViewAll };
