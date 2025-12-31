import React from "react";
import {
  FaUsers,
  FaLaptopCode,
  FaShieldAlt,
  FaChartLine,
  FaCheckCircle,
} from "react-icons/fa";

export default function AboutUs() {
  return (
    <div
      className="py-5"
      style={{
        background: "linear-gradient(to right, #e8f0fe, #e3f2fd)",
        minHeight: "100vh",
      }}
    >
      <div className="container py-4">
        {/* Title Section */}
        <h1 className="text-center fw-bold text-primary mb-4">
          About Employee Management System
        </h1>
        <p className="text-center text-secondary mb-5 fs-5">
          A complete solution to simplify employee administration and improve
          organizational efficiency.
        </p>

        {/* Main Card */}
        <div className="card shadow-lg border-0 p-4 rounded-4">
          <h3 className="fw-bold text-dark mb-3">Our Mission</h3>
          <p className="text-muted">
            The <b>Employee Management System (EMS)</b> is designed to streamline,
            automate, and simplify HR operations. It is built using
            <b> ReactJS</b> (Frontend) and <b>Spring Boot</b> (Backend) to ensure
            modern performance, security, and scalability for organizations.
          </p>

          <hr />

          {/* Features Section */}
          <h3 className="fw-bold text-dark mb-3">Key Features</h3>

          <div className="row g-4">
            <div className="col-md-6 col-lg-4">
              <div className="p-3 bg-light rounded-3 shadow-sm h-100">
                <FaUsers size={30} className="text-primary mb-2" />
                <h5 className="fw-semibold">Employee Management</h5>
                <p className="text-muted mb-0">
                  Add, update, search, and manage employee details seamlessly.
                </p>
              </div>
            </div>

            <div className="col-md-6 col-lg-4">
              <div className="p-3 bg-light rounded-3 shadow-sm h-100">
                <FaLaptopCode size={30} className="text-success mb-2" />
                <h5 className="fw-semibold">Modern Tech Stack</h5>
                <p className="text-muted mb-0">
                  Built using ReactJS & Spring Boot for optimal speed and
                  performance.
                </p>
              </div>
            </div>

            <div className="col-md-6 col-lg-4">
              <div className="p-3 bg-light rounded-3 shadow-sm h-100">
                <FaShieldAlt size={30} className="text-danger mb-2" />
                <h5 className="fw-semibold">Secure Authentication</h5>
                <p className="text-muted mb-0">
                  Role-based access for Admin and Employee with secure login.
                </p>
              </div>
            </div>

            <div className="col-md-6 col-lg-4">
              <div className="p-3 bg-light rounded-3 shadow-sm h-100">
                <FaChartLine size={30} className="text-warning mb-2" />
                <h5 className="fw-semibold">Dashboard Insights</h5>
                <p className="text-muted mb-0">
                  Clean dashboard interface for quick data visualization.
                </p>
              </div>
            </div>

            <div className="col-md-6 col-lg-4">
              <div className="p-3 bg-light rounded-3 shadow-sm h-100">
                <FaCheckCircle size={30} className="text-info mb-2" />
                <h5 className="fw-semibold">Easy to Use</h5>
                <p className="text-muted mb-0">
                  User-friendly UI designed for HR teams and employees.
                </p>
              </div>
            </div>
          </div>

          <hr className="my-4" />

          {/* Vision Section */}
          <h3 className="fw-bold text-dark mb-3">Our Vision</h3>
          <p className="text-muted">
            We aim to provide organizations with an advanced employee
            management solution that reduces paperwork, improves accuracy, and
            supports better decision-making through modern tools and automation.
          </p>
        </div>
      </div>
    </div>
  );
}
