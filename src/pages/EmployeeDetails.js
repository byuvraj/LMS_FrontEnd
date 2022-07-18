import React from "react";
import {Link} from "react-router-dom";
const EmployeeDetails = (props)=>{

    const tem=sessionStorage.getItem("users");
    if (tem==null){
      alert("Please Login");
      window.location = "/";
    }else{
      var Employee = JSON.parse(tem);
    }
    return (
        <>
    
            <div className="float-container-child-employee">
                <div className="App">

                    <h1>My Details Section</h1>
                    <div className="float-container-child-employee-child">
                        <pre>
                            <label htmlFor="employeeid">Employee ID   : {Employee.empId}</label>
                        </pre>
                        <pre>
                            <label htmlFor="fullName"  >Full Name     : {Employee.empName} </label>
                        </pre>
                        <pre>
                            <label htmlFor="email"     >Email Address : {Employee.empName}@hexaware.com</label>
                        </pre>
                        <pre>
                         <label htmlFor="mobilenumber" >Mobile Number : 00000 00000</label>
                        </pre>
                    </div>
                    <div className="float-container-child-employee-child">
                        <pre>
                            <label htmlFor="designation">Designation     : {Employee.designation}</label>
                        </pre>
                        <pre>
                            <label htmlFor="department">Department      : {Employee.department}</label>
                        </pre>
                        <pre>
                            <label htmlFor="balance"   >Leave Balance   : {Employee.leaveBal}</label>
                        </pre> 
                    </div>
                </div> 
            </div> 
        </>    )
};
export default EmployeeDetails;