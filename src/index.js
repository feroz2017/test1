// third party components
import React from "react";
import { render } from "react-dom";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";

// App Components
import App from "./app/App";
import store from "./redux/store";

// static resource
import "../public/styles/index.css";

render(
    <Provider store={store}> 
     <BrowserRouter>
          <App />
     </BrowserRouter>
    </Provider>,
  document.querySelector("#root")
);
