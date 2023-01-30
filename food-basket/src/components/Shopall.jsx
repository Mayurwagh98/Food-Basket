import React from "react";
import { DownOutlined, SmileOutlined } from "@ant-design/icons";
import { Dropdown, Space } from "antd";
import { Link } from "react-router-dom";

const items = [
  {
    key: "1",
    label: <Link to="/ShopAll">Shop All</Link>,
  },
];
const Shopall = () => (
  <Dropdown
    menu={{
      items,
    }}
  >
    <a onClick={(e) => e.preventDefault()}>
      <Space style={{ margin: "0px" }}>
        Shope All
        {/* <DownOutlined /> */}
      </Space>
    </a>
  </Dropdown>
);
export { Shopall };
