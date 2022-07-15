import React from "react";
import { Link } from "react-router-dom";
const ApplyLeave = ()=>{
    return(
        <div className="App">
        <h1>Apply Leave</h1>
        <form>
            <div class="mb-3">
            <pre>
                <label htmlFor="date">Start Date </label>
                <input id="date" type="date" name="date" />
            </pre>
            <pre>
                <label htmlFor="date">End Date </label>
                <input id="date" type="date" name="date" />
            </pre>
            <pre>
                <label htmlFor="noofdays">Number of Days </label>
                <input id="noofdays" type="number" name="noofdays" />
            </pre>
            <pre>
                <label for="cars">Leave Type </label>
                <select name="type" id="type">
                <option value="volvo">Earned Leave</option>
                <option value="volvo">Casual Leave</option>
                <option value="saab">Medical Leave</option>
                <option value="opel">Maternity Leave</option>
                <option value="audi">Paternity Leave</option>
                <option value="audi">Half-day Leave</option>
                <option value="audi">One-day Leave</option>
                </select>
            </pre>
            <pre>
                <label htmlFor="leavereason">Leave Reason </label>
                <input id="leavereason" type="text" name="leavereason" />
            </pre>
            </div>
            <button type="button" class="btn btn-primary btn-sm">
            Apply
            </button>
            <Link to="/dashboard">
                <button type="button" class="btn btn-primary btn-sm">Cancel</button>
            </Link>
        </form>
    </div>
    );
}
export default ApplyLeave;