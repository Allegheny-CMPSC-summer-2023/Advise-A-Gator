import React from "react";
import { Outlet, Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="nav">
      <Link to="/" className="site-title">
        GatorAdvisor
      </Link>
      <ul>
        <Link to="/cmpsc">Computer Science</Link>
        <Link to="/datasc">Data Science</Link>
        <Link to="/informatics">Informatics</Link>
      </ul>
    </nav>
  );
}
