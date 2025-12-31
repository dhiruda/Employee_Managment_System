import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import {
  FaUser,
  FaLock,
  FaEnvelope,
  FaPhone,
  FaIdBadge,
  FaUserTie,
  FaUsers,
} from "react-icons/fa";

export default function RegistrationForm() {
  const [user, setUser] = useState({
    firstname: "",
    lastname: "",
    email: "",
    contactno: "",
    gender: "",
    empid: "",
    username: "",
    password: "",
    confirmpassword: "",
    role: "",
  });

  const [isRegistered, setIsRegistered] = useState(true);
  const [loginData, setLoginData] = useState({ username: "", password: "" });
  const [errors, setErrors] = useState({});
  const [message, setMessage] = useState({ type: "", text: "" });

  const navigate = useNavigate();

  // Prevent browser back
  useEffect(() => {
    window.history.pushState(null, "", window.location.href);
    window.onpopstate = function () {
      window.history.go(1);
    };
  }, []);

  const handleChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
    setErrors({ ...errors, [e.target.name]: "" });
  };

  const handleLoginChange = (e) => {
    setLoginData({ ...loginData, [e.target.name]: e.target.value });
    setMessage({ type: "", text: "" });
  };

  const validate = () => {
    let tempErrors = {};
    let valid = true;

    if (!user.firstname) tempErrors.firstname = "First name required";
    if (!user.lastname) tempErrors.lastname = "Last name required";

    if (!user.email) tempErrors.email = "Email required";
    else if (!/^\S+@\S+\.\S+$/.test(user.email))
      tempErrors.email = "Invalid email";

    if (!user.contactno) tempErrors.contactno = "Contact no required";
    else if (!/^\d{10}$/.test(user.contactno))
      tempErrors.contactno = "Must be 10 digits";

    if (!user.gender) tempErrors.gender = "Select gender";
    if (!user.empid) tempErrors.empid = "Employee ID required";
    if (!user.role) tempErrors.role = "Select role";

    if (!user.username) tempErrors.username = "Username required";

    if (!user.password) tempErrors.password = "Password required";
    else if (user.password.length < 8 || user.password.length > 13)
      tempErrors.password = "Password must be 8–13 characters";

    if (!user.confirmpassword)
      tempErrors.confirmpassword = "Confirm password required";
    else if (user.password !== user.confirmpassword)
      tempErrors.confirmpassword = "Passwords do not match";

    setErrors(tempErrors);
    return Object.keys(tempErrors).length === 0;
  };

  const handleRegister = (e) => {
    e.preventDefault();

    if (!validate()) return;

    axios
      .post("http://localhost:8080/user/register", user)
      .then((res) => {
        setMessage({ type: "success", text: res.data });
        setUser({
          firstname: "",
          lastname: "",
          email: "",
          contactno: "",
          gender: "",
          empid: "",
          username: "",
          password: "",
          confirmpassword: "",
          role: "",
        });

        setIsRegistered(true);
      })
      .catch(() =>
        setMessage({ type: "error", text: "Registration failed" })
      );
  };

  const handleLogin = (e) => {
    e.preventDefault();

    if (!loginData.username || !loginData.password) {
      setMessage({ type: "error", text: "Enter username & password" });
      return;
    }

    axios
      .post("http://localhost:8080/user/login", loginData)
      .then((res) => {
        setMessage({ type: "success", text: "Login successful!" });

        localStorage.setItem("user", JSON.stringify(res.data));

        let user = res.data;

        if (user.role && user.role.trim().toLowerCase() === "admin") {
          navigate("/adminDashboard");
        } else {
          navigate("/employeeDashboard");
        }
      })
      .catch(() => {
        setMessage({ type: "error", text: "Invalid username or password" });
      });
  };

  return (
    <div
      className="d-flex justify-content-center align-items-center min-vh-100"
      style={{
        backgroundImage:
          "url('https://images.pexels.com/photos/7653984/pexels-photo-7653984.jpeg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div
        className="card shadow-lg p-5 rounded-4"
        style={{
          width: "500px",
          backgroundColor: "rgba(255,255,255,0.9)",
          backdropFilter: "blur(5px)",
        }}
      >
        <h2 className="text-center fw-bold text-primary mb-4">
          Employee Management System
        </h2>
        <h4 className="text-center fw-bold mb-3 text-primary">
          {isRegistered ? "Login" : "Employee Registration"}
        </h4>

        {message.text && (
          <div
            className={`alert ${
              message.type === "error" ? "alert-danger" : "alert-success"
            } text-center`}
          >
            {message.text}
          </div>
        )}

        {/* Registration Form */}
        {!isRegistered ? (
          <form onSubmit={handleRegister}>
            {/* First Name */}
            <div className="mb-3">
              <label>First Name</label>
              <div className="input-group">
                <span className="input-group-text">
                  <FaUser />
                </span>
                <input
                  type="text"
                  name="firstname"
                  className="form-control"
                  value={user.firstname}
                  onChange={handleChange}
                />
              </div>
              <small className="text-danger">{errors.firstname}</small>
            </div>

            {/* Last Name */}
            <div className="mb-3">
              <label>Last Name</label>
              <div className="input-group">
                <span className="input-group-text">
                  <FaUserTie />
                </span>
                <input
                  type="text"
                  name="lastname"
                  className="form-control"
                  value={user.lastname}
                  onChange={handleChange}
                />
              </div>
              <small className="text-danger">{errors.lastname}</small>
            </div>

            {/* Email */}
            <div className="mb-3">
              <label>Email</label>
              <div className="input-group">
                <span className="input-group-text">
                  <FaEnvelope />
                </span>
                <input
                  type="email"
                  name="email"
                  className="form-control"
                  value={user.email}
                  onChange={handleChange}
                />
              </div>
              <small className="text-danger">{errors.email}</small>
            </div>

            {/* Contact No */}
            <div className="mb-3">
              <label>Contact Number</label>
              <div className="input-group">
                <span className="input-group-text">
                  <FaPhone />
                </span>
                <input
                  type="number"
                  name="contactno"
                  className="form-control"
                  value={user.contactno}
                  onChange={handleChange}
                />
              </div>
              <small className="text-danger">{errors.contactno}</small>
            </div>

            {/* Gender */}
            <div className="mb-3">
              <label>Gender</label>
              <select
                className="form-control"
                name="gender"
                value={user.gender}
                onChange={handleChange}
              >
                <option value="">Select Gender</option>
                <option value="Male">Male</option>
                <option value="Female">Female</option>
              </select>
              <small className="text-danger">{errors.gender}</small>
            </div>

            {/* Employee ID */}
            <div className="mb-3">
              <label>Employee ID</label>
              <div className="input-group">
                <span className="input-group-text">
                  <FaIdBadge />
                </span>
                <input
                  type="text"
                  name="empid"
                  className="form-control"
                  value={user.empid}
                  onChange={handleChange}
                />
              </div>
              <small className="text-danger">{errors.empid}</small>
            </div>

            {/* Role */}
            <div className="mb-3">
              <label>Role</label>
              <select
                className="form-control"
                name="role"
                value={user.role}
                onChange={handleChange}
              >
                <option value="">Select Role</option>
                <option value="Admin">Admin</option>
                <option value="Employee">Employee</option>
              </select>
              <small className="text-danger">{errors.role}</small>
            </div>

            {/* Username */}
            <div className="mb-3">
              <label>Username</label>
              <div className="input-group">
                <span className="input-group-text">
                  <FaUsers />
                </span>
                <input
                  type="text"
                  name="username"
                  className="form-control"
                  value={user.username}
                  onChange={handleChange}
                />
              </div>
              <small className="text-danger">{errors.username}</small>
            </div>

            {/* Password */}
            <div className="mb-3">
              <label>Password</label>
              <div className="input-group">
                <span className="input-group-text">
                  <FaLock />
                </span>
                <input
                  type="password"
                  name="password"
                  className="form-control"
                  value={user.password}
                  onChange={handleChange}
                />
              </div>
              <small className="text-danger">{errors.password}</small>
            </div>

            {/* Confirm Password */}
            <div className="mb-3">
              <label>Confirm Password</label>
              <input
                type="password"
                name="confirmpassword"
                className="form-control"
                value={user.confirmpassword}
                onChange={handleChange}
              />
              <small className="text-danger">{errors.confirmpassword}</small>
            </div>

            <div className="d-flex justify-content-between">
              <button className="btn btn-success px-4">Register</button>
              <button
                type="button"
                className="btn btn-outline-primary px-4"
                onClick={() => setIsRegistered(true)}
              >
                Back to Login
              </button>
            </div>
          </form>
        ) : (
          /* Login Form */
          <form onSubmit={handleLogin}>
            <div className="mb-3">
              <label>Username</label>
              <div className="input-group">
                <span className="input-group-text">
                  <FaUser />
                </span>
                <input
                  type="text"
                  name="username"
                  className="form-control"
                  value={loginData.username}
                  onChange={handleLoginChange}
                />
              </div>
            </div>

            <div className="mb-3">
              <label>Password</label>
              <div className="input-group">
                <span className="input-group-text">
                  <FaLock />
                </span>
                <input
                  type="password"
                  name="password"
                  className="form-control"
                  value={loginData.password}
                  onChange={handleLoginChange}
                />
              </div>
            </div>

            <button className="btn btn-primary w-100 mt-3">Login</button>

            <button
              type="button"
              className="btn btn-link w-100 mt-3"
              onClick={() => setIsRegistered(false)}
            >
              New employee? Register here
            </button>
          </form>
        )}
      </div>
    </div>
  );
}
