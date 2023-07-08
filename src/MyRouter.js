import { BrowserRouter, Routes, Route } from "react-router-dom";

import Layout from "./components/Layout";
import CsMajor from "./pages/CsMajor";
import DsMajor from "./pages/DsMajor";
import InfMajor from "./pages/InfMajor";
import Software from "./pages/Software";
import Home from "./pages/Home";

import App from "./App";

export default function MyRouter() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="cmpsc" element={<CsMajor />} />
        <Route path="datasc" element={<DsMajor />} />
        <Route path="software" element={<Software />} />
        <Route path="informatics" element={<InfMajor />} />
      </Route>
    </Routes>
  );
}
