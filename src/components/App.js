import React from "react";
import { Layout } from "antd";
import { Route } from "react-router-dom";

import Navbar from "./app/Navbar";
import Home from "./app/home";
import Settings from "./app/settings";

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
