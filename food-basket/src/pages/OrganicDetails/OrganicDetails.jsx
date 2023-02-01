import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Navbar } from "../../components/Navbar/Navbar";
import "./OrganicDetails.css";
import { Button } from "antd";
import {Footer} from "../../components/Footer/Footer"
import ScrollToTop from "react-scroll-to-top";

const OrganicDetails = () => {
  let { id } = useParams();
  let [data, setData] = useState({});

  let getItem = () => {
    axios
      .get(`http://localhost:8080/organic_sweetners/${id}`)
      // .get(`https://handsome-dog-overalls.cyclic.app/organic_sweetners/${id}`)
      .then((res) => {
        setData(res.data);
        console.log(res.data);
      })
      .catch((e) => {
        console.log(e);
      });
  };

  useEffect(() => {
    getItem();
    window.scrollTo(0,0)
  }, []);

  return (
    <div className="main_details_div">
      <Navbar />
      <ScrollToTop smooth/>
      <div className="child_details_div">
        <div className="child_details_img">
          <img src={data.details_img} alt="item image" />
          <div className="child_content">
            <h1>{data.title}</h1>
            <h3>{data.details}</h3>
            <Button type="primary" className="buynow_btn">Buy Now</Button>
          </div>
        </div>
      </div>
      <div className="flavor_details_div">
        <div>
          <img src={data.image} alt="" />
        </div>
        <div className="flavor_content">
          <h1>{data.flavor}</h1>
          <p>{data.flavor_desc}</p>
          <h1>{data.ingredients}</h1>
          <p>{data.ingre_desc}</p>
          <h1>{data.uses}</h1>
          <p>{data.uses_desc}</p>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export { OrganicDetails };
