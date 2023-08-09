import { BrowserRouter, Routes, Route } from "react-router-dom";

import Layout from "./components/Layout";
import CsMajor from "./pages/CsMajor";
import DsMajor from "./pages/DsMajor";
import InfMajor from "./pages/InfMajor";
import Software from "./pages/Software";
import Home from "./pages/Home";
import Courses from "./pages/Courses";

import App from "./App";

export default function MyRouter() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="computersciencemajor" element={<CsMajor />} />
        <Route path="datasciencemajor" element={<DsMajor />} />
        <Route path="softwaremajor" element={<Software />} />
        <Route path="informaticsmajor" element={<InfMajor />} />
        <Route path="courses" element={<Courses />} />
      </Route>
    </Routes>
  );
}
