import React from "react";
import AdminNavbar from "./Navbar";

export default function AdminDashboard() {
  return (
    <div style={{ fontFamily: "Arial, sans-serif" }}>
      {/* Header Section */}
      <div
        style={{
          background: "linear-gradient(135deg, #1d3557, #457b9d)",
          padding: "25px 0",
          textAlign: "center",
          color: "white",
          marginBottom: "20px",
          boxShadow: "0px 4px 10px rgba(0,0,0,0.2)",
        }}
      >
        <h1 style={{ fontSize: "45px", margin: 0, letterSpacing: "1px" }}>
          Welcome to Admin Dashboard
        </h1>
      </div>

      {/* Navbar */}
      <AdminNavbar />

      {/* Body Section */}
      <div
        style={{
          width: "100%",
          height: "850px",
          backgroundImage:
            "url('https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          borderRadius: "12px",
          marginTop: "20px",
          boxShadow: "0px 4px 20px rgba(0,0,0,0.3)",
        }}
      >
        {/* Overlay */}
        <div
          style={{
            width: "100%",
            height: "100%",
            backgroundColor: "rgba(0, 0, 0, 0.35)",
            borderRadius: "12px",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            color: "white",
            fontSize: "32px",
            fontWeight: "bold",
          }}
        >
          Manage Employees | View Reports | Settings
        </div>
      </div>
    </div>
  );
}
