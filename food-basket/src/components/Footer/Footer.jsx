import React from "react";
import "./Footer.css";
import {
  FacebookOutlined,
  InstagramOutlined,
  TwitterOutlined,
  YoutubeOutlined,
} from "@ant-design/icons";
import Food_basket from "../../images/Food_basket.png";
import { UserOutlined } from "@ant-design/icons";
import { Input, Button } from "antd";

const Footer = () => {
  let year = new Date().getFullYear();

  return (
    <>
      <div className="main_footer">
        <div>
          <img src={Food_basket} alt="logo" className="logo" />
          <h1>Rooted In Goodness</h1>
          <div className="social_logos">
            <FacebookOutlined className="fb_logo" />
            <InstagramOutlined className="fb_logo" />
            <TwitterOutlined className="fb_logo" />
            <YoutubeOutlined className="fb_logo" />
          </div>
        </div>
        <div>
          <h1>Shop</h1>
          <h4>All Products</h4>
          <h4>Snacks</h4>
          <h4>Supplements</h4>
          <h4>Coconut Sugars</h4>
        </div>
        <div>
          <h1>Help</h1>
          <h4>FAQ</h4>
          <h4>Return Policy</h4>
          <h4>Track Orders</h4>
          <h4>Contact Us</h4>
        </div>
        <div>
          <h1>About Us</h1>
          <h4>Nutrition Philosophy</h4>
          <h4>Impacts</h4>
        </div>
        <div>
          <h1>Subscribe</h1>
          <Input
            type="text"
            placeholder="Enter your email"
            prefix={<UserOutlined className="site-form-item-icon" />}
            className="usermail_input"
          />
          <br />
          <label>
            <input type="radio" />
            Email
          </label>
          <label>
            <input type="radio" />
            Text Message
          </label>
          <br />
          <Button type="primary" className="subs_btn">Subscribe</Button>
        </div>
      </div>
      <div className="copyright">
        <h4>Copyright © Food Basket {year}</h4>
      </div>
    </>
  );
};

export { Footer };
