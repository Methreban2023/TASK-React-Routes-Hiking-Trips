import React from "react";
import { NavLink } from "react-router-dom";
function Nav() {
  return (
    <nav
      className="navbar navbar-expand-lg bg-secondary text-uppercase "
      id="mainNav"
    >
      <div className="container">
        <NavLink to="/" className="navbar-brand">
          Hike
        </NavLink>
        <div className="collapse navbar-collapse" id="navbarResponsive">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item mx-0 mx-lg-1">
              <NavLink to="/" className="nav-link py-3 px-0 px-lg-3 rounded">
                Home
              </NavLink>
            </li>
            <li className="nav-item mx-0 mx-lg-1">
              <NavLink
                to="/trips"
                className="nav-link py-3 px-0 px-lg-3 rounded"
              >
                Trips
              </NavLink>

              {/* <a className="nav-link py-3 px-0 px-lg-3 rounded" href="#">
                Trips
              </a> */}
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Nav;
