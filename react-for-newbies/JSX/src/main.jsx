import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import Exercise from "../exercicio/index";
import ArraysJsx from "../arrays/index";
import Evento from "../events/index";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
    <Exercise />
    <ArraysJsx />
    <Evento />
  </React.StrictMode>
);
