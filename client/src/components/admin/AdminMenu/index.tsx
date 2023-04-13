import React, { useState } from "react";
import styled from "styled-components";
import {
  AppstoreOutlined,
  PoweroffOutlined,
  SettingOutlined,
} from "@ant-design/icons";
import type { MenuProps } from "antd";
import { Menu } from "antd";
import { Link } from "react-router-dom";

const Label = styled.label``;

const items: MenuProps["items"] = [
  {
    label: <Link to="crud">CRUD</Link>,
    key: "crud",
    icon: <AppstoreOutlined />,
  },
  {
    label: <Link to="settings">Settings</Link>,
    key: "settings",
    icon: <SettingOutlined />,
  },
  {
    label: <a href="/logout">Logout</a>,
    key: "logout",
    icon: <PoweroffOutlined />,
  },
];

const AdminMenu = () => {
  const [current, setCurrent] = useState("crud");

  const onClick: MenuProps["onClick"] = (e) => {
    setCurrent(e.key);
  };
  return (
    <Menu
      onClick={onClick}
      selectedKeys={[current]}
      mode="horizontal"
      items={items}
      theme="dark"
    />
  );
};

export default AdminMenu;
