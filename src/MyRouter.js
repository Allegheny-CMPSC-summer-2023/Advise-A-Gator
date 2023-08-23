import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import CsMajor from "./pages/CsMajor";
import DsMajor from "./pages/DsMajor";
import InfMajor from "./pages/InfMajor";
import Software from "./pages/Software";
import Home from "./pages/Home";
import BoardCS from "./pages/dashboard/BoardCS";
import BoardDS from "./pages/dashboard/BoardDS";
import BoardINF from "./pages/dashboard/BoardINF";
import BoardSE from "./pages/dashboard/BoardSE";

import App from "./App";

export default function MyRouter() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="computersciencemajor" element={<CsMajor />} />
        <Route path="datasciencemajor" element={<DsMajor />} />
        <Route path="softwareengineeringmajor" element={<Software />} />
        <Route path="informaticsmajor" element={<InfMajor />} />
        <Route path="dashboard/computersciencemajor" element={<BoardCS />} />
        <Route path="dashboard/datasciencemajor" element={<BoardDS />} />
        <Route path="dashboard/informaticsmajor" element={<BoardINF />} />
        <Route
          path="dashboard/softwareengineeringmajor"
          element={<BoardSE />}
        />
      </Route>
    </Routes>
  );
}
