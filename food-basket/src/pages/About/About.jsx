import React from "react";
import "./About.css";

const About = () => {
  return (
    <div>
      <div className="pillars_heading">
        <h1>Our 5 Pillars of Nutrition</h1>
        <p>
          It really doesn’t matter if you’re trying to pack on size, chop off
          body fat, or simply live a little bit healthier. These pillars are cut
          and dry, as simple as they get. They’re the backbone to a solid eating
          plan. Follow these and manage what foods to eat, and living well just
          got a whole lot easier.
        </p>
      </div>
      <div className="pillars_content">
        <div>
          <div>
            <h2>Try to eat six times a day</h2>
          </div>
        </div>
        <div>
          <div>
            <h2>Limit processed foods</h2>
          </div>
        </div>
        <div>
          <div>
            <h2>Stay hydrated</h2>
          </div>
        </div>
        <div>
          <div>
            <h2>Eat plant protein </h2>
          </div>
        </div>
        <div>
          <div>
            <h2>Be strategic with carbohydrates</h2>
          </div>
        </div>
      </div>
    </div>
  );
};

export { About };
