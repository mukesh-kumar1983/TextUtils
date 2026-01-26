import React from "react";
import { Link } from "react-router-dom";

export default function Navbar({ title, aboutText, mode, toggleMode }) {
  return (
    <nav className={`navbar navbar-expand-lg navbar-${mode} bg-${mode}`}>
      <div className="container-fluid">
        <Link className="navbar-brand" exact to="/">
          {title}
        </Link>
        <div className="collapse navbar-collapse">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link className="nav-link" exact to="/home">
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" exact to="/about">
                {aboutText}
              </Link>
            </li>
          </ul>
          <button onClick={toggleMode} className="btn btn-sm btn-secondary">
            Toggle Mode
          </button>
        </div>
      </div>
    </nav>
  );
}
