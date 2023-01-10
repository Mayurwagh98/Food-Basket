import React from "react";
import "./About.css";
import {Navbar} from "../../components/Navbar/Navbar"
import { Footer } from "../../components/Footer/Footer";

const About = () => {
  return (
    <div>
      <Navbar />
      <div className="pillars_heading">
        <h1>Our 9 Pillars of Nutrition</h1>
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
            <h2>Try To Eat Six Times a Day</h2>
          </div>
        </div>
        <div>
          <div>
            <h2>Limit Processed Foods</h2>
          </div>
        </div>
        <div>
          <div>
            <h2>Stay Hydrated</h2>
          </div>
        </div>
        <div>
          <div>
            <h2>Eat Plant Protein </h2>
          </div>
        </div>
        <div>
          <div>
            <h2>Be Strategic With Carbohydrates</h2>
          </div>
        </div>
        <div>
          <div>
            <h2>Stress Less</h2>
          </div>
        </div>
        <div>
          <div>
            <h2>Sleep Deep</h2>
          </div>
        </div>
        <div>
          <div>
            <h2>Live Consciously</h2>
          </div>
        </div>
        <div>
          <div>
            <h2>Nurture Yourself</h2>
          </div>
        </div>
      </div>
      <div className="words_from">
        <h1>Words From Our Food Basketiers</h1>
        <div className="child_word_from">
          <div>
            <h3>"</h3>
            <p>I have chosen to be happy because it is good for my health.</p>
            <p>- Voltaire</p>
          </div>
          <div>
            <h3>"</h3>
            <p>
              It’s important to point out that mental health is more about
              wellness rather than sickness.
            </p>
            <p>– Matt Purcell</p>
          </div>
          <div>
            <h3>"</h3>
            <p>
              A healthy attitude is contagious but don’t wait to catch it from
              others. Be a carrier.
            </p>
            <p>– Tom Stoppard</p>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export { About };
