import axios from "axios";
import React, { useEffect, useState } from "react";
import { Navbar } from "../../components/Navbar/Navbar";
import explore_recipes from "../../images/explore_recipes.png";
import "./ViewAll.css";
import ReactPaginate from "react-paginate";
import { Footer } from "../../components/Footer/Footer";
import { Navigate, useNavigate } from "react-router-dom";
import ScrollToTop from "react-scroll-to-top";

const ViewAll = () => {
  let [recipes, setRecieps] = useState([]);
  const [currPage, setCurrPage] = useState(0);
  let [filterData, setFilterData] = useState(recipes);
  let Navigate = useNavigate();
  let getRecipes = () => {
    axios
      .get("http://localhost:8080/recipes")
      .then((res) => {
        setRecieps(res.data);
        filterData = res.data;
        setFilterData(filterData);
      })
      .catch((e) => {
        console.log(e);
      });
  };

  useEffect(() => {
    getRecipes();
    window.scrollTo(0, 0);
  }, []);

  // ------------------- Pagination -------------------
  const perpage = 8;
  let handleFetch = ({ selected: selectedPage }) => {
    setCurrPage(selectedPage);
  };
  //setting here filterData.length because we want to show the pages as per the data available
  const pageCount = Math.ceil(filterData.length / perpage);
  const offset = currPage * perpage; //offset = 0, 10, 20......

  let navtoRecipes = (item) => {
    Navigate(`${item.id}`);
  };
  // -------------- Filter ---------------------
  let handleFilter = (event) => {
    let option = event.target.value;
    let newData;
    if (option == "coconut_sweetners") {
      newData = recipes.filter((item) => {
        return item.category == "Organic Coconut Sweetners";
      });
      setFilterData(newData);
      console.log(newData);
    } else if (option == "sauces") {
      newData = recipes.filter((item) => {
        return item.category == "Sauces & Marinades";
      });
      setFilterData(newData);
      console.log(newData);
    } else if (option == "") {
      setFilterData(recipes);
    }
  };

  return (
    <>
      <Navbar />
      <ScrollToTop smooth/>
      <div className="main_recipes_div">
        <div className="recipes_img">
          <img src={explore_recipes} alt="" />
        </div>
        <h1 className="recipe_heading">All-Recipes</h1>
        <div className="filter_div">
          <h1>Filter Recipes</h1>
          <div>
            <select onChange={handleFilter} className="filter_options">
              <option value="">Default</option>
              <option value="coconut_sweetners">
                Organic Coconut Sweetners
              </option>
              <option value="sauces">Sacues & Marinades</option>
            </select>
          </div>
        </div>
        <div className="all_recipes">
          {filterData.slice(offset, offset + perpage).map((item, index) => {
            return (
              <div key={index} onClick={() => navtoRecipes(item)}>
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

        <Footer />
      </div>
    </>
  );
};

export { ViewAll };
