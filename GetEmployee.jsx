import React, { useEffect, useState } from "react";
import axios from "axios";

export default function GetEmployee() {
  let [employee, setEmployee] = useState([]);
  let [isshow, setIsShow] = useState(false);
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
  let [empid, setEmpId] = useState(0);

  // searching variable
  let [searchfname,setSearchfname]=useState("");
   let [searchlname,setSearchlname]=useState("");
   let [searchdesignation,setSearchdesignation]=useState("");
     let [searchdpt,setSearchdpt]=useState("");

     let [searchResult,setSearchResult]=useState([]);




  let updateemp = (emp) => {
    setIsShow(true);
    setFirstname(emp.firstname);
    setLastname(emp.lastname);
    setContactno(emp.contactno);
    setEmail(emp.email);
    setDob(emp.dob);
    setGender(emp.gender);
    setAadharcardno(emp.aadharcardno);
    setPanno(emp.panno);
    setDepartment(emp.department);
    setDesignation(emp.designation);
    setReportingauthority(emp.reportingauthority);
    setJoiningdate(emp.joiningdate);
    setExp(emp.exp);
    setSalary(emp.salary);
    setImg(emp.img);
    
    setEmpId(emp.empid);
  };


//for update
  let update = (event) =>
  {
   
   event.preventDefault();
    //new object to store data
    let newemp = {
      firstname, lastname, contactno, gender, img, email,
      designation, department, dob, aadharcardno, panno, reportingauthority, joiningdate, exp, salary
    }

  axios.put(`http://localhost:8080/employees/updateemp?empid=${empid}`,newemp)
    .then((response) => {
      if (response.data == "Employee record updated successfully") {
        alert ("Employee record updated successfully");
        setIsShow(false);
      }
    })
      .catch((error) => {
      alert("error in update operation")
    })
  }
  
  //for image
  let handleimg = (event) => {
    let file = event.target.files[0];
    console.log(file);

    let filepath =` ./img/${file.name}`;
    setImg(filepath);
    console.log("file path is" + img);
  };

  useEffect(() => {
    axios
      .get("http://localhost:8080/employees/getallemp")
      .then((response) => {
        // console.log(response.data);
        setEmployee(response.data);
      })
      .catch((error) => {
        alert("Error in data retrieving");
        // console.error(error);
      });
  }, [employee]);

  let deleteemp = (empid) => {
    axios
      .delete(`http://localhost:8080/employees/deleteemp?empid=${empid}`)
      .then((response) => {
        if (response.data == "Employee record deleted successfully") {
          alert("Employee record deleted sucessfully");
        }
      })
      .catch((error) => {
        alert("Error in delete operation");
      });
  };
  let searchbyfname=()=>
{
 
  axios.get(`http://localhost:8080/employees/findbyfirstname?firstname=${searchfname}`)
  .then((response)=>{
    setSearchResult(response.data);
  })
  .catch((error)=>{
    alert("Error");
  })
}
let searchbylname=()=>
{
  axios.get(`http://localhost:8080/employees/findbylastname?lastname=${searchlname}`)
  .then((response)=>
  {
    setSearchResult(response.data);
  })
  .catch(()=>
  {
    alert("error") 
  })
}
let searchbydesignation=()=>
{
  axios.get(`http://localhost:8080/employees/findbydesg?designation=${searchdesignation}`)
  .then((response)=>
  {
    setSearchResult(response.data);
  })
  .catch(()=>
  {
    alert("Error")
  })
}
let searchbydpt=()=>
{
  axios.get(`http://localhost:8080/employees/findbydept?department=${searchdpt}`)
  .then((response)=>
  {
    setSearchResult(response.data);
  })
  .catch(()=>
  {
    alert("Error")
  })
}

  return (
    <div>
      <div className="container-fluid" style={{"marginBottom":"30px"}}>
        <div className="row">
          <div className="col-3">
            <input type="text" placeholder="Enter firstname" onChange={(event)=>{setSearchfname(event.target.value)}} ></input>
            <button className="btn btn-danger" onClick={()=>{searchbyfname()}}>Search</button>
             

          </div>
          <div className="col-3">
            <input type="text" placeholder="Enter lastname" onChange={(event)=>{setSearchlname(event.target.value)}} ></input>
            <button className="btn btn-danger" onClick={()=>{searchbylname()}}>Search</button>
             

          </div>
          
          <div className="col-3">
            <input type="text" placeholder="Enter Designation" onChange={(event)=>{setSearchdesignation(event.target.value)}} ></input>
            <button className="btn btn-danger" onClick={()=>{searchbydesignation()}}>Search</button>
             

          </div>
          
          <div className="col-3">
            <input type="text" placeholder="Enter Department" onChange={(event)=>{setSearchdpt(event.target.value)}} >
            </input><button className="btn btn-danger" onClick={()=>{searchbydpt()}}>Search</button>
             

          </div>
          
          

        </div>

      </div>
      <div className="container mt-4">
        <div className="row justify-content-center">
          {(searchResult.length>0?searchResult:employee).map((emp) => (
            <div className="col-md-2 mb-4" key={emp.empid}>
              <div className="card shadow-sm h-100 text-center">
                <img
  src={emp.img}
  className="card-img-top"
  alt={`${emp.firstname} ${emp.lastname}`}
  style={{ height: "230px", objectFit: "cover" }}
/>

               
                <div className="card-body">
                  <h6 className="text-muted mb-1">Emp Id: {emp.empid}</h6>
                  <h5 className="card-title">
                    {emp.firstname} {emp.lastname}
                  </h5>

                  <p className="card-text text-start">
                    <strong>Department:</strong> {emp.department}
                    <br />
                    <strong>Designation:</strong> {emp.designation}
                    <br />
                    <strong>Email:</strong> {emp.email}
                    <br />
                    <strong>Contact No:</strong> {emp.contactno}
                  </p>

                  <div className="d-flex justify-content-around mt-3">
                    <button className="btn btn-danger btn-sm"onClick={() => deleteemp(emp.empid)}>Delete</button>
                    <button className="btn btn-success btn-sm" onClick={() => {updateemp(emp);}}>Update </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {isshow ? (
        <form onSubmit={update}>
          <h1>Update Form</h1>
          First Name :
        <input type="text" value={firstname} placeholder="First Name" onChange={(event) => { setFirstname(event.target.value)}} />
        <br />
        Last Name :
        <input type="text" value={lastname} placeholder="Last Name" onChange={(event) => { setLastname(event.target.value)}}/>
        <br />
        Contact No :
        <input type="text" value={contactno} placeholder="Contact Number" onChange={(event) => { setContactno(event.target.value)}} />
        <br />
        Email :
        <input type="email" value={email} placeholder="Email" onChange={(event) => { setEmail(event.target.value)}} />
        <br />
        Date of Birth
        <input type="date" value={dob} placeholder="Date of Birth" onChange={(event) => { setDob(event.target.value)}} />
        <br />
        Gender :
        <input type="radio" name="gender" value="Male" checked={gender === "Male"} onChange={(event) => { setGender(event.target.value)}} />
        Male
        <input type="radio" name="gender" value="Female" checked={gender === "Female"} onChange={(event) => { setGender(event.target.value)}} />
        Female
        <input type="radio" name="gender" value="Other" checked={gender === "Other"} onChange={(event) => { setGender(event.target.value)}} />
        Other <br />
        Aadhar Card Number :
        <input type="text" value={aadharcardno} placeholder="Aadhar Card Number" onChange={(event) => { setAadharcardno(event.target.value)}}/>
        <br />
        Pan Card Number :
        <input type="text" value={panno} name="panno" placeholder="PAN Number" onChange={(event) => { setPanno(event.target.value)}}/>
        <br />
        {/*Office Information */}
        Department :
        <select name="department" value={department} onChange={(event) => { setDepartment(event.target.value)}}>
          <option value="">Select Department</option>
          <option value="HR">HR</option>
          <option value="Developer">Developer</option>
          <option value="Tester">Tester</option>
          <option value="Project Manager">Project Manager</option>
          <option value="Web Designer">Web Designer</option>
        </select>
        <br />
        Designation :
        <select name="designation" value={designation} onChange={(event) => { setDesignation(event.target.value)}}>
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
        <input type="text" value={reportingauthority} placeholder="Reporting Authority" onChange={(event) => { setReportingauthority(event.target.value)}}/>
        <br />
        Joining Date :
        <input type="date" value={joiningdate} placeholder="Joining Date" onChange={(event) => { setJoiningdate(event.target.value)}} />
        <br />
        Experience :
        <input type="number" value={exp} placeholder="Experience (Years)" onChange={(event) => { setExp(event.target.value)}} />
        <br />
        Salary :
        <input type="number" value={salary} placeholder="Salary" onChange={(event) => { setSalary(event.target.value)}}/>
        <br />
        Upload Profile Photo :
        <input type="file" placeholder="Image URL" accept="image/*" onChange={handleimg}/>
        <br />
          <button type="submit">Update Employee Record</button>
        </form>
      ) : null}
    </div>
  );
}