import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";

import store from "store/index";

import "./styles/index.scss";
import App from "./App/index";

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
