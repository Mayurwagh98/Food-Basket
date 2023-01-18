import React from "react";
// import { DownOutlined } from "@ant-design/icons";
import { Dropdown, Space } from "antd";
import { Link } from "react-router-dom";
const items = [
  {
    key: "1",
    label: <Link to="/allProducts">All Products</Link>,
  },
  {
    key: "2",
    label: <Link to="/organic_coconut_sweetners">Organic Brown Coconut Sugar</Link>,
  },
  {
    key: "3",
    label: (
      <Link to="/sauces">Sauces & Marinades</Link>
    ),
  },
];
const Organics = () => (
  <Dropdown
    menu={{
      items,
    }}
  >
    <a onClick={(e) => e.preventDefault()}>
      <Space style={{ margin: "30px" }}>
        Organic Products
        {/* <DownOutlined /> */}
      </Space>
    </a>
  </Dropdown>
);
export { Organics };
