import React, { useState } from "react";
import {withRouter} from 'react-router-dom'
import { Layout, Menu } from "antd";

import Search from './search';

const Navbar = (props) => {
  let [selectedKey, setSelectedKey] = useState("1");

  const handleHomeClick = ()=>{
    setSelectedKey("1")
    props.history.push("/");
  }
  const handleSettingClick = ()=>{
    setSelectedKey("2")
    props.history.push("/settings");
  }

  return (
    <Layout.Header>
      <Menu mode="horizontal" defaultSelectedKeys={selectedKey}>
        <Menu.Item key="1" onClick={handleHomeClick}>Home</Menu.Item>
        <Menu.Item key="2" onClick={handleSettingClick}>Setting</Menu.Item>
      </Menu>
    </Layout.Header>
  );
};

export default withRouter(Navbar);
