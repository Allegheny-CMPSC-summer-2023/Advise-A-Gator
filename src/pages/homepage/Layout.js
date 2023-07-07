import React from "react";
import Navbar from "./Navbar";

import { Outlet, Link } from "react-router-dom";

export default function Layout() {
  return (
    <div className="layout">
      <Navbar />
      <Outlet />
      <footer>
        <p>Copyright GatorAvisor Team</p>
      </footer>
    </div>
  );
}
