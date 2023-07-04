import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import MyRouter from "./MyRouter";
import { ModalContextProvider } from "./modal/modalContext";
import { BrowserRouter } from "react-router-dom";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <ModalContextProvider>
      <MyRouter />
    </ModalContextProvider>
  </BrowserRouter>
);
