import React from "react";
import { Outlet, Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="nav">
      <Link to="/" className="site-title">
        GatorAdvisor
      </Link>
      <ul>
        <Link to="/computersciencemajor">Computer Science</Link>
        <Link to="/datasciencemajor">Data Science</Link>
        <Link to="/informaticsmajor">Informatics</Link>
        <Link to="dashboard/computersciencemajor">CS DASH</Link>
        <Link to="dashboard/datasciencemajor">DS DASH</Link>
        <Link to="dashboard/informaticsmajor">INF DASH</Link>
      </ul>
    </nav>
  );
}
