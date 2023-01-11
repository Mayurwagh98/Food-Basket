import axios from "axios";
import React, { useEffect, useState } from "react";
import { Navbar } from "../../components/Navbar/Navbar";
import "./Organic_coconut_sweetners.css";
import { Button } from "antd";
import { Footer } from "../../components/Footer/Footer";
import { useNavigate } from "react-router-dom";
import ScrollToTop from "react-scroll-to-top";


const Organic_coconut_sweetners = () => {
  let [data, setData] = useState([]);
  let [makesomething, setMakeSomething] = useState([]);
  let navigate = useNavigate();
  let getData = () => {
    axios
      .get("http://localhost:8080/organic_sweetners")
      .then((res) => {
        // data = res.data;
        setData(res.data);
        // console.log(data);
      })
      .catch((e) => {
        console.log(e);
      });
  };

  let getSomething = () => {
    axios
      .get("http://localhost:8080/makeSomething")
      .then((res) => {
        console.log(res.data);
        setMakeSomething(res.data);
      })
      .catch((e) => {
        console.log(e);
      });
  };

  useEffect(() => {
    getData();
    getSomething();
  }, []);
  window.scrollTo(0, 0) // to scroll the page at the top whenever page loads

  let handleViewAll = () => {
    navigate("/recipes");
  };
  let handleDetails = (item) => {
    navigate(`${item.id}/organic_details`);
    // console.log(item)
  };

  return (
    <>
      <Navbar />
      <ScrollToTop smooth/>
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
              <div key={index} className='child_div1'>
                <img src={item.image} alt="image" className="organic_image" />
                <h1>{item.title}</h1>

                <Button
                  type="primary"
                  className="details_btn"
                  onClick={() => handleDetails(item)}
                >
                  Details
                </Button>
              </div>
            );
          })}
        </div>
        <div className="unrefined_div">
          <h1>
            Our coconut sugars are always Unrefined, Easy to Use & Ethically
            Sourced...
          </h1>
          <div className="unrefined_img_div">
            <div>
              <img
                src="https://images.unsplash.com/photo-1567671823828-4272a32ef644?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTB8fGljZWN1YmV8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60"
                alt="ice cube"
              />
              <h3>Simple 1:1 replacement for cane sugar</h3>
            </div>
            <div>
              <img
                src="https://media.istockphoto.com/id/1342014107/photo/licking-lips-smiley-face.jpg?b=1&s=170667a&w=0&k=20&c=12NBIJktvvhihIExW2WCeal0cy7e58Jjdw4JLTBlilE="
                alt="tasty emoji"
              />
              <h3>Better tasting than cane sugar</h3>
            </div>
            <div>
              <img
                src="https://images.unsplash.com/photo-1605810978644-1fa3b63ecd4e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8c3VnYXIlMjBjYW5lfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60"
                alt="sugar cane"
              />
              <h3>More sustainable than cane sugar</h3>
            </div>
          </div>
        </div>
        <div className="something_declicious">
          <h1>Make Something Delicious with Our Coconut Sugar</h1>
          <div className="make_something">
            {makesomething.map((item, index) => {
              return (
                <div key={index}>
                  <img src={item.image} alt="image" />
                  <h3>{item.title}</h3>
                </div>
              );
            })}
          </div>
          <Button type="primary" className="view_all" onClick={handleViewAll}>
            View All
          </Button>
        </div>
        <Footer />
      </div>
    </>
  );
};

export { Organic_coconut_sweetners };
