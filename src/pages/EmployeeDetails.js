import React from "react";
import {Link} from "react-router-dom";
const EmployeeDetails = (props)=>{
    return (
        <>
            <div className="float-container-child-employee">
                <div className="App">
                    <h1>My Details Section</h1>
                    <div className="float-container-child-employee-child">
                        <pre>
                            <label htmlFor="employeeid">Employee ID</label>
                        </pre>
                        <pre>
                            <label htmlFor="fullName">Full Name </label>
                        </pre>
                        <pre>
                            <label htmlFor="email">Email Address </label>
                        </pre>
                        <pre>
                            <label htmlFor="mobilenumber">Mobile Number </label>
                        </pre>
                    </div>
                    <div className="float-container-child-employee-child">
                        <pre>
                            <label htmlFor="date">Date Joined</label>
                        </pre>
                        <pre>
                            <label htmlFor="department">Department</label>
                        </pre>
                        <pre>
                            <label htmlFor="balance">Avaliable Leave <br/>Balance </label>
                        </pre> 
                    </div>
                </div> 
            </div> 
        </>    )
};
export default EmployeeDetails;