import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";

// informaçoes do redux
import { Provider } from "react-redux";
import store from "../src/redux/store.jsx";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);
