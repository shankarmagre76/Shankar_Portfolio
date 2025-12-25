import { NavLink } from "react-router-dom";
import profileImage from "../assets/image.png";

function NavBar() {
  const linkClass = ({ isActive }) =>
    isActive
      ? "nav-link text-primary fw-bold"
      : "nav-link text-light fw-semibold";

  return (
    <>
      <nav className="navbar navbar-dark bg-dark sticky-top shadow">
        <div className="container-fluid px-4">

          <NavLink to="/" className="navbar-brand">
            <img
              src={profileImage}
              alt="Profile"
              className="rounded-circle border border-3 border-primary object-fit-cover"
              width="50"
              height="50"
            />
          </NavLink>

          <button
            className="navbar-toggler d-sm-none border-0"
            type="button"
            data-bs-toggle="offcanvas"
            data-bs-target="#mobileSidebar"
            aria-controls="mobileSidebar">
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="d-none d-sm-flex justify-content-center flex-grow-1">
            <ul className="navbar-nav gap-3 flex-row">

              <li className="nav-item">
                <NavLink to="/" className={linkClass}>
                  <i className="fa-solid fa-house me-2"></i>Home
                </NavLink>
              </li>

              <li className="nav-item">
                <NavLink to="/about" className={linkClass}>
                  <i className="fa-solid fa-user me-2"></i>About Me
                </NavLink>
              </li>

              <li className="nav-item">
                <NavLink to="/projects" className={linkClass}>
                  <i className="fa-solid fa-diagram-project me-2"></i>My Projects
                </NavLink>
              </li>

              <li className="nav-item">
                <NavLink to="/contact" className={linkClass}>
                  <i className="fa-solid fa-envelope me-2"></i>Contact Me
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      <div
        className="offcanvas offcanvas-start text-bg-dark d-sm-none"
        id="mobileSidebar"
        tabIndex="-1">
        <div className="offcanvas-header">
          <h5 className="offcanvas-title">Menu</h5>
          <button
            type="button"
            className="btn-close btn-close-white"
            data-bs-dismiss="offcanvas"></button>
        </div>

        <div className="offcanvas-body">
          <ul className="navbar-nav gap-2">

            <li className="nav-item">
              <NavLink
                to="/"
                className={linkClass}
                data-bs-dismiss="offcanvas">
                Home
              </NavLink>
            </li>

            <li className="nav-item">
              <NavLink
                to="/about"
                className={linkClass}
                data-bs-dismiss="offcanvas">
                About Me
              </NavLink>
            </li>

            <li className="nav-item">
              <NavLink
                to="/projects"
                className={linkClass}
                data-bs-dismiss="offcanvas">
                My Projects
              </NavLink>
            </li>

            <li className="nav-item">
              <NavLink
                to="/contact"
                className={linkClass}
                data-bs-dismiss="offcanvas">
                Contact Me
              </NavLink>
            </li>

          </ul>
        </div>
      </div>
    </>
  );
}

export default NavBar;
