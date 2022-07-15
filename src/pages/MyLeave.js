import React from "react";
import {Link} from "react-router-dom";

const MyLeave =()=>{
    return(
        <>
        <table>
            <tr>
                <th>Leave ID</th>
                <th>Number of Days</th>
                <th>Start Date</th>
                <th>End Date</th>
                <th>Leave Type</th>
                <th>Status</th>
                <th>Reason</th>
                <th>Applied On</th>
            </tr>
            <tr>
                <td>1</td>
                <td>2</td>
                <td>02/07/2022</td>
                <td>04/07/2022</td>
                <td>Earned Leave</td>
                <td>Pending</td>
                <td>Exam</td>
                <td>28/06/2022</td>
            </tr>
            <tr>
                <td>1</td>
                <td>2</td>
                <td>02/07/2022</td>
                <td>04/07/2022</td>
                <td>Earned Leave</td>
                <td>Pending</td>
                <td>Exam</td>
                <td>28/06/2022</td>
            </tr>
            <tr>
                <td>1</td>
                <td>2</td>
                <td>02/07/2022</td>
                <td>04/07/2022</td>
                <td>Earned Leave</td>
                <td>Pending</td>
                <td>Exam</td>
                <td>28/06/2022</td>
            </tr>
        </table>
        <Link to="/newleave"><button>New Application</button></Link>
        </>
    )
}
export default MyLeave;