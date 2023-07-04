import { Outlet, Link } from "react-router-dom";

const Layout = () => {
  return (
    <>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/cmpsc">Computer Science</Link>
          </li>
          <li>
            <Link to="/datasc">Data Science</Link>
          </li>
          <li>
            <Link to="/software">Software Engineering</Link>
          </li>
        </ul>
      </nav>

      <Outlet />
    </>
  );
};

export default Layout;
