import React from "react";
import ReactDOM from "react-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./index.css";
import registerServiceWorker from "./registerServiceWorker";
import App from "./App";

ReactDOM.render(<App />, document.getElementById("root"));
registerServiceWorker();
