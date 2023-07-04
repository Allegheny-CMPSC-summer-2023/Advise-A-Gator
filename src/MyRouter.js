import { BrowserRouter, Routes, Route } from "react-router-dom";

import Layout from "./Layout";
import Cmpsc from "./Cmpsc";
import DataSC from "./DataSC";
import Software from "./Software";

import App from "./App";

export default function MyRouter() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<App />} />
        <Route path="cmpsc" element={<Cmpsc />} />
        <Route path="datasc" element={<DataSC />} />
        <Route path="software" element={<Software />} />
      </Route>
    </Routes>
  );
}
