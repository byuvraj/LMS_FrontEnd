import React from "react";
import EmpSection from "./EmployeeDetails"
import ReportingEmployees from "./ReportingEmployeeSec";
import Manager from "./Manager";
import MyLeave from "./MyLeave";
const leave = ()=>{
    return (
        <>
        <div className="float-container-top">
            <EmpSection/>
            <Manager/>
        </div>
        <div className="float-container-bottom">
        <h3>My Leaves</h3>
            <div className="float-child-table">
                <MyLeave/>
            </div>
        </div>
        <>
        <div className="float-container-bottom">
            <ReportingEmployees />
        </div>
        </>
        
        
        </>
    )
};
export default leave;