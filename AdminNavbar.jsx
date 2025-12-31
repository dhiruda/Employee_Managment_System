// AdminNavbar.jsx
import React from "react";
import { Link, useNavigate } from "react-router-dom";

export default function AdminNavbar() {
  const user = JSON.parse(localStorage.getItem("user"));
  const navigate = useNavigate();

  const logout = () => {
    localStorage.removeItem("user");
    navigate("/");
  };

  return (
    <nav className="navbar navbar-expand-lg bg-primary shadow-sm">
      <div className="container-fluid">
        <Link className="navbar-brand text-white fw-bold" to="/admindashboard">
          Admin Panel
        </Link>

        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#adminNavbar"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="adminNavbar">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link className="nav-link text-white" to="/admindashboard">
                Dashboard
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link text-white" to="/servicesus">
                Services
              </Link>
            </li>
            <li className="nav-item">
              <button className="btn btn-dark" onClick={logout}>
                Logout
              </button>
            </li>
          </ul>
          <span className="navbar-text text-white">
            Welcome, {user?.username}
          </span>
        </div>
      </div>
    </nav>
  );
}
