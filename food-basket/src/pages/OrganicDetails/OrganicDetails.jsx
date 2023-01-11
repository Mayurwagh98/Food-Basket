import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Navbar } from "../../components/Navbar/Navbar";
import "./OrganicDetails.css";

const OrganicDetails = () => {
  let { id } = useParams();
  let [data, setData] = useState({});

  let getItem = () => {
    axios
      .get(`http://localhost:8080/organic_sweetners/${id}`)
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
  }, []);

  return (
    <div className="main_details_div">
      <Navbar />
      <div className="child_details_div">
        <div>
          <h2>{data.title}</h2>
          <h3>{data.details}</h3>
        </div>
        <div>
          <img src={data.image} alt="item image" />
        </div>
      </div>
    </div>
  );
};

export { OrganicDetails };
