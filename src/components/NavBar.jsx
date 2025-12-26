import { NavLink } from "react-router-dom";
import profileImage from "../assets/image.png";

function NavBar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark sticky-top shadow">
      <div className="container-fluid px-4">

        <NavLink to="/">
          <img
            src={profileImage}
            alt="Profile"
            className="rounded-circle border border-3 border-primary object-fit-cover"
            width="50"
            height="50"
          />
        </NavLink>

        <div className="collapse navbar-collapse justify-content-center">
          <ul className="navbar-nav gap-3">

            <li className="nav-item">
              <NavLink
                to="/"
                className={({ isActive }) =>
                  isActive ? "nav-link text-primary fw-bold" : "nav-link text-light fw-semibold"
                }>
                <i className="fa-solid fa-house me-2"></i>
                Home
              </NavLink>
            </li>

            <li className="nav-item">
              <NavLink
                to="/about"
                className={({ isActive }) =>
                  isActive ? "nav-link text-primary fw-bold" : "nav-link text-light fw-semibold"
                }>
                <i className="fa-solid fa-user me-2"></i>
                About Me
              </NavLink>
            </li>

            <li className="nav-item">
              <NavLink
                to="/projects"
                className={({ isActive }) =>
                  isActive ? "nav-link text-primary fw-bold" : "nav-link text-light fw-semibold"
                }>
                <i className="fa-solid fa-diagram-project me-2"></i>
                My Projects
              </NavLink>
            </li>

            <li className="nav-item">
              <NavLink
                to="/contact"
                className={({ isActive }) =>
                  isActive ? "nav-link text-primary fw-bold" : "nav-link text-light fw-semibold"
                }>
                <i className="fa-solid fa-envelope me-2"></i>
                Contact Me
              </NavLink>
            </li>

          </ul>
        </div>
      </div>
    </nav>
  );
}

export default NavBar;
