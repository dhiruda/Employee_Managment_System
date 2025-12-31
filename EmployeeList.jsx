import React, { useEffect, useState } from "react";
import axios from "axios";

export default function EmployeeList() {
  const [employee, setEmployee] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:8080/employees/getallemp")
      .then((response) => {
        setEmployee(response.data);
      })
      .catch((error) => {
        alert("Error in data retrieving");
        console.error(error);
      });
  }, []);

  return (
    <div style={{ textAlign: "center", marginTop: "30px" }}>
      <h1>Employee Records</h1>

      <table
        border="1"
        cellPadding="8"
        cellSpacing="0"
        style={{
          margin: "auto",
          width: "95%",
          borderCollapse: "collapse",
          fontFamily: "Arial, sans-serif",
        }}
      >
        <thead style={{ backgroundColor: "#f2f2f2" }}>
          <tr>
            <th>Emp ID</th>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Email</th>
            <th>Department</th>
            <th>Contact No</th>
            <th>Gender</th>
            <th>Designation</th>
            <th>DOB</th>
            <th>Joining Date</th>
            <th>Reporting Authority</th>
            <th>Experience (yrs)</th>
            <th>Aadhar Card No</th>
            <th>PAN No</th>
            <th>Image</th>
            <th>Action</th>
            
          </tr>
        </thead>

        <tbody>
          {employee.length > 0 ? (
            employee.map((emp) => (
              <tr key={emp.empid}>
                <td>{emp.empid}</td>
                <td>{emp.firstname}</td>
                <td>{emp.lastname}</td>
                <td>{emp.email}</td>
                <td>{emp.department}</td>
                <td>{emp.contactno}</td>
                <td>{emp.gender}</td>
                <td>{emp.designation}</td>
                <td>{emp.dob}</td>
                <td>{emp.joiningdate}</td>
                <td>{emp.reportingauthority}</td>
                <td>{emp.exp}</td>
                <td>{emp.adharcardno}</td>
                <td>{emp.panno}</td>
                
                
                <td>
                  {emp.img ? (
                    <img
                      src={emp.img}
                      alt="Profile Pic"
                      width="50"
                      height="50"
                      style={{ borderRadius: "50%" }}
                    />
                  ) : (
                    "No Image"
                  )}
                </td>
                <td>{emp.salary}</td>
                <td>
                  <button style={{ marginRight: "10px" }}>Update</button>
                  <button>Delete</button>
                </td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="17">No employees found</td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
}