import React from "react";
const ApprovalPage = (props)=>{
    return (
    <div className="App">
        <h1>Approve Deny Leave</h1>
        <form>
            <div class="mb-3">
                <pre>
                    <label for="employeeid">Employee ID:</label>
                    <input id="a" type="text" name="text" />
                </pre>
                <pre>
                    <label for=" employeeName ">Employee Name:</label>
                    <input id="a" type="text" name="text" />
                </pre>
                <pre>
                    <label for="leaveBalance ">Leave Balance:</label>
                    <input id="a" type="text" name="text" />
                </pre>
                <pre>
                    <label htmlFor="date">Start Date:</label>
                    <input id="a" type="date" name="date" />
                </pre>
                <pre>
                    <label htmlFor="date">End Date:</label>
                    <input id="a" type="date" name="date" />
                </pre>
                <pre>
                    <label htmlFor="noofdays">Number of Days:</label>
                    <input id="a" type="number" name="noofdays" />
                </pre>
                <pre>
                    <label id="a" for="leave">
                    Leave Type:{" "}
                    </label>
                    <select name="type" id="type">
                    <option value="Earned Leave">Earned Leave</option>
                    <option value="Casual Leave">Casual Leave</option>
                    <option value="Medical Leave">Medical Leave</option>
                    <option value="Maternity Leave">Maternity Leave</option>
                    <option value="Paternity Leave">Paternity Leave</option>
                    <option value="Half-day Leave">Half-day Leave</option>
                    <option value="aOne-day Leave<">One-day Leave</option>
                    </select>
                </pre>
                <pre>
                    <label htmlFor="leavereason">Reason:</label>
                    <input id="a" type="text" name="leavereason" />
                </pre>
                <pre>
                    <label htmlFor="comment">Comment:</label>
                    <textarea id="a" type="text" name="leavereason" />
                </pre>
            </div>

            <button type="button" class="btn btn-primary btn-sm">
            Approve
            </button>
            <button type="button" class="btn btn-primary btn-sm">
            Deny
            </button>
            <button type="button" class="btn btn-primary btn-sm">
            Cancel
            </button>
        </form>
    </div>
    )
};
export default ApprovalPage;