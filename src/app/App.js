import React from "react";
import { Layout } from "antd";
import { Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import Home from "./components/Home";
import SettingContainer from './containers/SettingContainer.jsx'

const App = (props) => {
  return (
    <Layout>
      <Navbar />
      <Layout.Content style={{ padding: "0px 50px", marginTop: "20px" }}>
        <Route path="/settings" exact component={SettingContainer} />
        <Route path="/" exact component={Home} />
      </Layout.Content>
      <Layout.Footer>This is The End Of First App</Layout.Footer>
    </Layout>
  );
};

export default App;
