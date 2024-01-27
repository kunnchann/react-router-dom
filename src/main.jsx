import ReactDom from "react-dom/client";
import App from "./App";
import "./style/index.css";
// import "../node_modules/flowbite/dist/flowbite";
import { BrowserRouter as Router } from "react-router-dom";

ReactDom.createRoot(document.getElementById("root")).render(
  <Router>
    <App />
  </Router>
);
