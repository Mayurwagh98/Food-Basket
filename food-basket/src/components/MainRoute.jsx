import React from "react";
import { Routes, Route } from "react-router-dom";
import { Home } from "../pages/Home/Home";

const MainRoute = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </div>
  );
};

export { MainRoute };
