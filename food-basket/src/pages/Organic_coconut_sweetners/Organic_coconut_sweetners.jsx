import axios from "axios";
import React, { useEffect, useState } from "react";
import { Navbar } from "../../components/Navbar/Navbar";
import "./Organic_coconut_sweetners.css";
import { Button } from "antd";

const Organic_coconut_sweetners = () => {
  let [data, setData] = useState([]);

  let getData = () => {
    axios
      .get("http://localhost:8080/organic_sweetners")
      .then((res) => {
        data = res.data;
        setData(data);
        console.log(data);
      })
      .catch((e) => {
        console.log(e);
      });
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <>
      <Navbar />
      <div className="main_organic_div">
        <div className="child_organic_div">
          <h1>ORGANIC COCONUT SWEETENERS</h1>
          <p>
            Send your taste buds to the Caribbean every time you take a bite of
            that brownie or sip your morning tea with our Organic Coconut Sugar.
            Featuring an earthy taste that’s unique and natural, this sweetener
            is a great source of energy that keeps you charged up, all day (or
            night) long. Try it once and get ready to go coconuts, over and over
            again.
          </p>
        </div>
        <div className="organic_div">
          {data.map((item, index) => {
            return (
              <div key={index}>
                <img src={item.image} alt="image" className="organic_image" />
                <h1>{item.title}</h1>

                <Button type="primary" className="details_btn">Details</Button>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};

export { Organic_coconut_sweetners };
