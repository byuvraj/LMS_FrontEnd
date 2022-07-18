import React, { useState } from "react";
const ApplyLeave = () => {
    const [submit, setSubmit] = useState(null);
    const [inputs, setInputs] = useState({});

    const handleChange = (event) => {
        const name = event.target.id;
        const value = event.target.value;
        setInputs((values) => ({ ...values, [name]: value }));
    }
    const handleSubmit = (event) => {
        event.preventDefault();
        // alert(inputs.desc);
        const requestOptions = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                leaveStatus:"Pending",
                leaveDays: inputs.leaveDays,
                applyDate: inputs.applyDate,
                startDate: inputs.startDate,
                endDate: inputs.endDate,
                leaveReason: inputs.leaveReason
            })
        };
        fetch("http://localhost:23786/api/leaves/", requestOptions)
            .then((response) => response.json())
            .then((data) => setSubmit(data.id));
    };
    return (
        <div className="App">
            <form onSubmit={handleSubmit} className="form-container">
                <h2>New Leave</h2>
                <div className="row">
                    <div className="col-5">
                        Start Date: <input type="text" id="startDate" onChange={handleChange} className="form-control"></input>
                        <br></br>

                        End Date 
                        <input type="text" id="endDate" onChange={handleChange} className="form-control"></input>
                        <br></br>

                        Number of Daabel
                        <input type="number" id="leaveDays" onChange={handleChange} className="form-control"></input>
                        <br></br>

                        Apply Date
                        <input type="text" id="applyDate" onChange={handleChange} className="form-control"></input>
                        <br></br>

                        Leave Reasonl
                        <input type="text" id="leaveReason" onChange={handleChange} className="form-control"></input>
                        <br></br>

                        <input type="submit"></input>
                        <br />
                        {submit && <label>Response Submitted</label>}
                    </div>
                </div>
            </form>
        </div>
    );
};

export default ApplyLeave;