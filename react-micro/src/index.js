import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import "devextreme/dist/css/dx.light.css";
import Root from "./router/Root";
import reportWebVitals from "./reportWebVitals";
import "store/lang/i18n";

ReactDOM.render(<Root />, document.getElementById("root"));

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
