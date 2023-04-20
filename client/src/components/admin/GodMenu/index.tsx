import React, { useState } from "react";
import {
  AppstoreOutlined,
  PoweroffOutlined,
  SettingOutlined,
} from "@ant-design/icons";
import type { MenuProps } from "antd";
import { Menu } from "antd";
import { Link, useNavigate } from "react-router-dom";
import { useAppDispatch } from "../../../app/hooks";
import { logout } from "../../../slices/userSlice";

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
    label: <label>Logout</label>,
    key: "logout",
    icon: <PoweroffOutlined />,
  },
];

const GodMenu = () => {
  const [current, setCurrent] = useState("");
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const onClick: MenuProps["onClick"] = (e) => {
    if (e.key === "logout") {
      dispatch(logout());
      navigate("/admin/login", { replace: true });
    }
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

export default GodMenu;
