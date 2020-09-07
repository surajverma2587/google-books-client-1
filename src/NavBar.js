import React from "react";
import { NavLink } from "react-router-dom";

const Navigation = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <NavLink to="/">
        <span className="navbar-brand">Google Books</span>
      </NavLink>
      <div className="collapse navbar-collapse">
        <ul className="navbar-nav mr-auto">
          <NavLink to="/search">
            <li className="nav-item nav-link">Search</li>
          </NavLink>
          <NavLink to="/saved">
            <li className="nav-item nav-link">Saved</li>
          </NavLink>
        </ul>
      </div>
    </nav>
  );
};

export default Navigation;
