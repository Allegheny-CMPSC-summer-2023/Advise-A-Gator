import { BrowserRouter, Routes, Route } from "react-router-dom";

import Layout from "./pages/homepage/Layout";
import CsMajor from "./pages/CsMajor";
import DsMajor from "./pages/DsMajor";
import Software from "./pages/Software";
import Home from "./pages/homepage/Home";
import DataScienceMajor from "./pages/DsMajor";

import App from "./pages/App";

export default function MyRouter() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="cmpsc" element={<CsMajor />} />
        <Route path="datasc" element={<DsMajor />} />
        <Route path="software" element={<Software />} />
      </Route>
    </Routes>
  );
}
