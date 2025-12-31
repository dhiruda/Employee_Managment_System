import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './EmpNavbar.css';

export default function EmpNavbar() {
  let userinfo = JSON.parse(localStorage.getItem("user"));

  let navigate = useNavigate();
  let logout = () => {
    localStorage.removeItem("user");
    navigate("/");
  };

  return (
    <div>

      <nav className="navbar navbar-expand-lg bg-warning shadow-sm custom-navbar">
        <div className="container-fluid">

          {/* LOGO */}
          <div className="navbar-brand d-flex align-items-center fw-bold text-dark">
            <img
              src="https://cdn-icons-png.flaticon.com/512/907/907717.png"
              alt="EMS Logo"
              className="ems-logo"
            />
            Employee Management
          </div>

          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent">
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

              {/* REMOVED Add Employee */}
              {/* REMOVED View Employee */}

              <li className="nav-item">
                <button onClick={logout} className="btn btn-dark logout-btn">Logout</button>
              </li>

            </ul>

            <h1 className="welcome-text mb-0">Welcome, {userinfo.username}</h1>
          </div>
        </div>
      </nav>

    </div>
  );
}
