import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";
import { useNavigate } from "react-router-dom";

export default function Navbar() {
  let userinfo = JSON.parse(localStorage.getItem("user"));
  let navigate = useNavigate();

  let logout = () => {
    localStorage.removeItem("user");
    navigate("/");
  };

  return (
    <div>
      <nav className="navbar navbar-expand-lg bg-warning shadow-sm">
        <div className="container-fluid">

          {/* 🌟 EMS LOGO ADDED HERE */}
          <Link className="navbar-brand d-flex align-items-center fw-bold text-dark" to="/home">
            <img
              src="https://cdn-icons-png.flaticon.com/512/907/907717.png"
              alt="EMS Logo"
              style={{ width: "40px", height: "40px", marginRight: "10px" }}
            />
            Employee System
          </Link>

          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">

              <li className="nav-item">
                <Link to="/home" className="nav-link">Home</Link>
              </li>

              <li className="nav-item">
                <Link to="/aboutus" className="nav-link">About Us</Link>
              </li>

              <li className="nav-item">
                <Link to="/contactus" className="nav-link">Contact Us</Link>
              </li>

              <li className="nav-item">
                <Link to="/servicesus" className="nav-link">Services</Link>
              </li>

              <li className="nav-item">
                <Link to="/getEmployee" className="nav-link">View Employee</Link>
              </li>

              <li className="nav-item">
                <Link to="/addEmployee" className="nav-link">Add Employee</Link>
              </li>

              <li className="nav-item">
                <button onClick={logout} className="btn btn-dark logout-btn">Logout</button>
              </li>

            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}
