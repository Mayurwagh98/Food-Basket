import axios from "axios";
import React, { useEffect, useState } from "react";
import { Navbar } from "../../components/Navbar/Navbar";
import explore_recipes from "../../images/explore_recipes.png";
import "./ViewAll.css";
import ReactPaginate from "react-paginate";

const ViewAll = () => {
  let [recipes, setRecieps] = useState([]);
  const [currPage, setCurrPage] = useState(0);

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

  // ------------------- Pagination -------------------
  const perpage = 8;
  let handleFetch = ({ selected: selectedPage }) => {
    setCurrPage(selectedPage);
  };
  const pageCount = Math.ceil(recipes.length / perpage);
  const offset = currPage * perpage; //offset = 0, 10, 20......

  return (
    <>
      <Navbar />
      <div className="main_recipes_div">
        <div className="recipes_img">
          <img src={explore_recipes} alt="" />
        </div>
        <h1 className="recipe_heading">All-Recipes</h1>
        <div className="all_recipes">
          {recipes.slice(offset, offset + perpage).map((item, index) => {
            return (
              <div key={index}>
                {/* <div> */}
                <img src={item.image} alt="" />
                <h2>{item.title}</h2>
                <h4>{"Product Used - "}</h4>
                <p>{item.product_used}</p>
                {/* </div> */}
                {/* <Button type="primary">Recipe Details</Button> */}
              </div>
            );
          })}
        </div>
        <ReactPaginate
          previousLabel={"<- Prev"}
          nextLabel={"Next ->"}
          pageCount={pageCount}
          onPageChange={handleFetch}
          containerClassName={"pagination"}
          previousLinkClassName={"pagination__link"}
          nextLinkClassName={"pagination__link"}
          disabledClassName={"pagination_link_disabled"}
          activeClassName={"pagination_link_active"}
        />
      </div>
    </>
  );
};

export { ViewAll };
