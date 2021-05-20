// third party components
import React from "react";
import { render } from "react-dom";
import { Provider } from "react-redux";

// App Components
import App from "./components/App";
import store from "./redux/store";

// static resource
import "./index.css";
import { BrowserRouter } from "react-router-dom";

render(
    <Provider store={store}> 
     <BrowserRouter>
          <App />
     </BrowserRouter>
    </Provider>,
  document.querySelector("#root")
);
