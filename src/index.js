import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./pages/App";
import MyRouter from "./MyRouter";
import { ModalContextProvider } from "./components/Roadmap/modal/modalContext";
import { BrowserRouter } from "react-router-dom";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <ModalContextProvider>
      <MyRouter />
    </ModalContextProvider>
  </BrowserRouter>
);
