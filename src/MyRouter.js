import { BrowserRouter, Routes, Route } from "react-router-dom";

import Layout from "./pages/homepage/Layout";
import Cmpsc from "./pages/Cmpsc";
import DataSC from "./pages/DataSC";
import Software from "./pages/Software";
import Home from "./pages/homepage/Home";

import App from "./pages/App";

export default function MyRouter() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="cmpsc" element={<Cmpsc />} />
        <Route path="datasc" element={<DataSC />} />
        <Route path="software" element={<Software />} />
      </Route>
    </Routes>
  );
}
