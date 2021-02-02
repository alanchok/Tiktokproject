import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";


ReactDOM.render(
  //rendering the app from component app.js
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  //from public index.html
  document.getElementById("root")
);
