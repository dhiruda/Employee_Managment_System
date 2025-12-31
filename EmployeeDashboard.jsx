import React, { useEffect, useState } from "react";
import axios from "axios";
import EmpNavbar from "./EmpNavbar";

export default function EmployeeDashboard() {
  let [employee, setEmployee] = useState([]);
  let [searchfname, setSearchfname] = useState("");
  let [searchlname, setSearchlname] = useState("");
  let [searchdesignation, setSearchdesignation] = useState("");
  let [searchdpt, setSearchdpt] = useState("");
  let [searchResult, setSearchResult] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:8080/employees/getallemp")
      .then((response) => {
        setEmployee(response.data);
      })
      .catch(() => {
        alert("Error fetching employee data");
      });
  }, []);

  let searchbyfname = () => {
    axios
      .get(`http://localhost:8080/employees/findbyfirstname?firstname=${searchfname}`)
      .then((response) => setSearchResult(response.data))
      .catch(() => alert("Error searching by first name"));
  };

  let searchbylname = () => {
    axios
      .get(`http://localhost:8080/employees/findbylastname?lastname=${searchlname}`)
      .then((response) => setSearchResult(response.data))
      .catch(() => alert("Error searching by last name"));
  };

  let searchbydesignation = () => {
    axios
      .get(`http://localhost:8080/employees/findbydesg?designation=${searchdesignation}`)
      .then((response) => setSearchResult(response.data))
      .catch(() => alert("Error searching by designation"));
  };

  let searchbydpt = () => {
    axios
      .get(`http://localhost:8080/employees/findbydept?department=${searchdpt}`)
      .then((response) => setSearchResult(response.data))
      .catch(() => alert("Error searching by department"));
  };

  return (
    <div
      style={{
        minHeight: "100vh",
        background: "#f3f4f6",
      }}
    >
      <EmpNavbar />

      {/* Header */}
      <div className="text-center py-4">
        <h1 className="fw-bold" style={{ color: "#1d4ed8" }}>
          Employee Dashboard
        </h1>
        <p className="text-muted" style={{ fontSize: "14px" }}>
          Manage and view employee details efficiently
        </p>
      </div>

      {/* Search Section */}
      <div
        className="container p-4 mb-4 rounded-4 shadow"
        style={{ background: "white" }}
      >
        <h5 className="mb-3 text-primary fw-semibold">Search Employees</h5>

        <div className="row g-3">
          <div className="col-md-3">
            <input
              type="text"
              className="form-control"
              placeholder="Search by First Name"
              onChange={(e) => setSearchfname(e.target.value)}
            />
            <button className="btn btn-primary mt-2 w-100" onClick={searchbyfname}>
              Search
            </button>
          </div>

          <div className="col-md-3">
            <input
              type="text"
              className="form-control"
              placeholder="Search by Last Name"
              onChange={(e) => setSearchlname(e.target.value)}
            />
            <button className="btn btn-primary mt-2 w-100" onClick={searchbylname}>
              Search
            </button>
          </div>

          <div className="col-md-3">
            <input
              type="text"
              className="form-control"
              placeholder="Search by Designation"
              onChange={(e) => setSearchdesignation(e.target.value)}
            />
            <button className="btn btn-primary mt-2 w-100" onClick={searchbydesignation}>
              Search
            </button>
          </div>

          <div className="col-md-3">
            <input
              type="text"
              className="form-control"
              placeholder="Search by Department"
              onChange={(e) => setSearchdpt(e.target.value)}
            />
            <button className="btn btn-primary mt-2 w-100" onClick={searchbydpt}>
              Search
            </button>
          </div>
        </div>
      </div>

      {/* Employee Cards */}
      <div className="container">
        <div className="row justify-content-center">
          {(searchResult.length > 0 ? searchResult : employee).map((emp) => (
            <div className="col-md-3 mb-4" key={emp.empid}>
              <div
                className="shadow-sm rounded-4 overflow-hidden"
                style={{
                  background: "white",
                  transition: "0.3s",
                  cursor: "pointer",
                }}
              >
                <img
                  src={emp.img}
                  alt=""
                  style={{
                    width: "100%",
                    height: "220px",
                    objectFit: "cover",
                  }}
                />
                <div className="p-3">
                  <h5 className="fw-bold text-primary">{emp.firstname} {emp.lastname}</h5>
                  <p className="text-muted mb-1">Emp ID: {emp.empid}</p>

                  <p className="mb-0" style={{ fontSize: "14px" }}>
                    <strong>Department:</strong> {emp.department} <br />
                    <strong>Designation:</strong> {emp.designation} <br />
                    <strong>Email:</strong> {emp.email} <br />
                    <strong>Contact:</strong> {emp.contactno}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {(searchResult.length === 0 && employee.length === 0) && (
          <p className="text-center text-danger mt-4">
            No employee records found.
          </p>
        )}
      </div>
    </div>
  );
}
