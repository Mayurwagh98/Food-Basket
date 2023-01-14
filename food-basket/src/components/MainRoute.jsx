import React from "react";
import { Routes, Route } from "react-router-dom";
import { About } from "../pages/About/About";
import { Allproducts } from "../pages/AllProducts/Allproducts";
import { Home } from "../pages/Home/Home";
import { Organic_coconut_sweetners } from "../pages/Organic_coconut_sweetners/Organic_coconut_sweetners";
import { ViewAll } from "../pages/ViewAll/ViewAll";
import { OrganicDetails } from "../pages/OrganicDetails/OrganicDetails";
import { Recipes } from "../pages/Recipes/Recipes";
import { Sauces } from "../pages/Sauces/Sauces";

const MainRoute = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/allProducts" element={<Allproducts />} />
        <Route
          path="/organic_coconut_sweetners"
          element={<Organic_coconut_sweetners />}
        />
        <Route path="/viewAll" element={<ViewAll />} />
        <Route
          path="/organic_coconut_sweetners/:id/organic_details"
          element={<OrganicDetails />}
        />
        <Route path="/viewAll/:id" element={<Recipes />} />
        <Route path="/sauces" element={<Sauces />} />
      </Routes>
    </div>
  );
};

export { MainRoute };
