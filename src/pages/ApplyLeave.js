import React, { useState } from "react";
import {Link} from "react-router-dom"


const ApplyLeave = () => {
    const [submit, setSubmit] = useState(null);
    const [inputs, setInputs] = useState({});
    var today = new Date(),
    date = today.getFullYear() + '-' + (today.getMonth() + 1) + '-' + today.getDate();
    const tem = sessionStorage.getItem("users");
    if (tem == null) {
        window.location = "/";
    } else {
        var Employee = JSON.parse(tem);
    }
    function getNumberOfDays(start, end) {
        const date1 = new Date(start);
        const date2 = new Date(end);

        // One day in milliseconds
        const oneDay = 1000 * 60 * 60 * 24;

        // Calculating the time difference between two dates
        const diffInTime = date2.getTime() - date1.getTime();

        // Calculating the no. of days between two dates
        const diffInDays = Math.round(diffInTime / oneDay);

        return diffInDays + 1;
    }
    const handleChange = (event) => {
        const name = event.target.id;
        const value = event.target.value;
        setInputs(values => ({ ...values, [name]: value }))
    }
    const handleSubmit = (event) => {
        event.preventDefault();
        // alert(inputs.desc);

        const requestOptions = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                leaveStatus: "Pending",
                managerId: Employee.managerId,
                employeeId: Employee.empId,
                leaveDays: getNumberOfDays(inputs.startDate, inputs.endDate),
                applyDate: date,
                startDate: inputs.startDate,
                endDate: inputs.endDate,
                leaveReason: inputs.leaveReason,
                managerCommnet: null
            })
        };
        fetch('http://localhost:23787/api/leaves/', requestOptions)
            .then(response => response.json())
            .then(data => setSubmit(data.id)).then(window.location="/dashboard");
    }

    return (
        <div className="App">
            <form onSubmit={handleSubmit} className="form-container">
                <h2>New Leave</h2>
                <div className="row">
                    <div className="col-5">

                        Start Date: <input type="date" id="startDate" onChange={handleChange} className="form-control"></input>
                        <br></br>

                        End Date
                        <input type="date" id="endDate" onChange={handleChange} className="form-control"></input>
                        <br></br>

                        Leave Reason
                        <input type="text" id="leaveReason" onChange={handleChange} className="form-control"></input>
                        <br></br>

                        <input type="submit"></input>
                        {submit && <label>Response Submitted</label>}
                        <Link to="/dashboard"><button>Cancel</button></Link>
                    </div>
                </div>
            </form>
        </div>
    );
}
export default ApplyLeave;
//"leaveId":1007,"leaveStatus":"Pending",
//"managerId":0,"employeeId":0,"leaveDays":0,"applyDate":"1/7/2022","startDate":
//null,"endDate":null,"leaveReason":null,"managerCommnet":null}