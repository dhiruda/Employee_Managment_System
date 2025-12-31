import React, { useState } from "react";
import axios from "axios";
import './AddEmployee.css';

export default function AddEmployee() {
  let [firstname, setFirstname] = useState("");
  let [lastname, setLastname] = useState("");
  let [contactno, setContactno] = useState("");
  let [email, setEmail] = useState("");
  let [dob, setDob] = useState("");
  let [gender, setGender] = useState("");
  let [aadharcardno, setAadharcardno] = useState(0);
  let [panno, setPanno] = useState("");
  let [department, setDepartment] = useState("");
  let [designation, setDesignation] = useState("");
  let [reportingauthority, setReportingauthority] = useState("");
  let [joiningdate, setJoiningdate] = useState("");
  let [exp, setExp] = useState(0);
  let [salary, setSalary] = useState(0.0);
  let [img, setImg] = useState("");


 let handleimg=(event)=>
{
      let file=event.target.files[0];
      console.log(file);
   
      let filepath=`./img/${file.name}`;
      setImg(filepath);
      console.log("file path is"+img);

}

  
  let addemp = (event) => {
    event.preventDefault();
    console.log(firstname + " " + lastname + " " + contactno + " " + gender + " " + img + " " + email + " " + designation + " " + department + " " + dob + " " + aadharcardno + " " + panno + " " + reportingauthority + " " + joiningdate + " " + exp + " " + salary);


    let newemp = {firstname, lastname, contactno, gender, img, email, designation, department, dob, aadharcardno, panno, reportingauthority, joiningdate, exp, salary}
    axios.post("http://localhost:8080/employees/addemp", newemp)
      .then((response) => {
        if (response.data == "Employee added successfully") { 
          alert("Employee Record Added Successfully")
        }
      })
      .catch((error) => {
      alert("Error in adding employee");
      console.error(error);
    })
  
  };


  return (
    <div>
      <h2>Add Employee Details</h2>
      <form onSubmit={addemp}>
        First Name :
        <input type="text" placeholder="First Name" onChange={(event) => { setFirstname(event.target.value)}} />
        <br />
        Last Name :
        <input type="text" placeholder="Last Name" onChange={(event) => { setLastname(event.target.value)}}/>
        <br />
        Contact No :
        <input type="text" placeholder="Contact Number" onChange={(event) => { setContactno(event.target.value)}} />
        <br />
        Email :
        <input type="email" placeholder="Email" onChange={(event) => { setEmail(event.target.value)}} />
        <br />
        Date of Birth
        <input type="date" placeholder="Date of Birth" onChange={(event) => { setDob(event.target.value)}} />
        <br />
        Gender :
        <input type="radio" name="gender" value="Male" onChange={(event) => { setGender(event.target.value)}} />
        Male
        <input type="radio" name="gender" value="Female" onChange={(event) => { setGender(event.target.value)}} />
        Female
        <input type="radio" name="gender" value="Other" onChange={(event) => { setGender(event.target.value)}} />
        Other <br />
        Aadhar Card Number :
        <input type="text" placeholder="Aadhar Card Number" onChange={(event) => { setAadharcardno(event.target.value)}}/>
        <br />
        Pan Card Number :
        <input type="text" name="panno" placeholder="PAN Number" onChange={(event) => { setPanno(event.target.value)}}/>
        <br />
        {/*Office Information */}
        Department :
        <select name="department" onChange={(event) => { setDepartment(event.target.value)}}>
          <option value="">Select Department</option>
          <option value="HR">HR</option>
          <option value="Developer">Developer</option>
          <option value="Tester">Tester</option>
          <option value="Project Manager">Project Manager</option>
          <option value="Web Designer">Web Designer</option>
        </select>
        <br />
        Designation :
        <select name="designation" onChange={(event) => { setDesignation(event.target.value)}}>
          <option value="">Select Designation</option>
          <option value="HR">HR</option>
          <option value="Sr.Developer">Sr.Developer</option>
          <option value="Jr.Developer">Jr.Developer</option>
          <option value="Sr.Tester">Sr.Tester</option>
          <option value="Jr.Tester">Jr.Tester</option>
          <option value="Project Manager">Project Manager</option>
          <option value="Web Designer">Web Designer</option>
        </select>
        <br />
        Reporting Authority :
        <input type="text" placeholder="Reporting Authority" onChange={(event) => { setReportingauthority(event.target.value)}}/>
        <br />
        Joining Date :
        <input type="date" placeholder="Joining Date" onChange={(event) => { setJoiningdate(event.target.value)}} />
        <br />
        Experience :
        <input type="number" placeholder="Experience (Years)" onChange={(event) => { setExp(event.target.value)}} />
        <br />
        Salary :
        <input type="number" placeholder="Salary" onChange={(event) => { setSalary(event.target.value)}}/>
        <br />
        Upload Profile Photo :
        <input type="file" placeholder="Image URL" accept="image/*" onChange={handleimg}/>
        <br />
        <button type="submit">Add Employee</button>
      </form>
    </div>
  );
}