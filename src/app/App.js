import React from "react";
import { Layout } from "antd";
import { Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Settings from "./components/Settings";

const App = (props) => {
  return (
    <Layout>
          <Navbar />
          <Route path="/settings" exact component={Settings} />
          <Route path="/" exact component={Home} />
    </Layout>
  );
};

export default App;
