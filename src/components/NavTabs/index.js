import React from "react";
import { Link, useLocation } from "react-router-dom";
import "./style.css";

function NavTabs() {
  // We'll go into the Hooks API later, for now, we are just using some code
  // from the react-router docs (https://reacttraining.com/react-router/web/api/Hooks/uselocation)
  // This allows the component to check the route any time the user uses a link to navigate.
  const location = useLocation();

  return (
    <ul className="nav nav-tabs ">
      <li className="nav-item">
        <Link
          to="/iPortfolio-2.0"
          className={
            location.pathname === "/iPortfolio-2.0"
              ? "nav-link bg-dark text-white "
              : "nav-link"
          }
        >
          Home
        </Link>
      </li>
      <li className="nav-item">
        <Link
          to="/iPortfolio-2.0/about"
          className={
            location.pathname === "/iPortfolio-2.0/about"
              ? "nav-link bg-dark text-light "
              : "nav-link"
          }
        >
          About
        </Link>
      </li>
      <li className="nav-item">
        <Link
          to="/iPortfolio-2.0/resume"
          className={
            location.pathname === "/iPortfolio-2.0/resume"
              ? "nav-link bg-dark text-light "
              : "nav-link"
          }
        >
          Resume
        </Link>
      </li>
      <li className="nav-item">
        <Link
          to="/iPortfolio-2.0/portfolio"
          className={
            location.pathname === "/iPortfolio-2.0/portfolio"
              ? "nav-link bg-dark text-light "
              : "nav-link"
          }
        >
          Portfolio
        </Link>
      </li>
      <li className="nav-item">
        <Link
          to="/iPortfolio-2.0/contact"
          className={
            location.pathname === "/iPortfolio-2.0/contact"
              ? "nav-link bg-dark text-light "
              : "nav-link"
          }
        >
          Contact
        </Link>
      </li>
    </ul>
  );
}

export default NavTabs;
