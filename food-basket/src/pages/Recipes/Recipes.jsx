import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Navbar } from "../../components/Navbar/Navbar";
import "./Recipes.css";

const Recipes = () => {
  let { id } = useParams();
  let [data, setData] = useState({});

  let getData = () => {
    axios
      .get(`http://localhost:8080/recipes/${id}`)
      .then((res) => {
        setData(res.data);
        console.log(res.data);
      })
      .catch((e) => {
        console.log(e);
      });
  };

  useEffect(() => {
    getData();
  }, []);

  let direction = data.direction
  return (
    <>
      <Navbar />
      <div className="main_div">
        <div className="recipe_banner">
          <img
            src="https://images.unsplash.com/photo-1504754524776-8f4f37790ca0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjR8fGZvb2R8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60"
            alt="image"
          />
        </div>
        <div className="recipe_details">
          <h1>{data.title}</h1>
          {console.log(direction)}
          {/* <p>{direction.map((item, index) =>{
            return(
              <p>{console.log(item)}</p>
            )
          })}</p> */}
          <img src={data.image} alt="" />
        </div>
      </div>
    </>
  );
};

export { Recipes };
