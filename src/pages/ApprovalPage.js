import  {React ,useState, useEffect} from "react";
import {Link} from 'react-router-dom';
const ApprovalPage = (props)=>{
    const tem = sessionStorage.getItem('leave');
    if (tem==null){
        window.location="/dashboard";
    }
    var leave = JSON.parse(tem);
    // Note: the empty deps array [] means
    // this useEffect will run once
    // similar to componentDidMount()
    const [error, setError] = useState(null);
    const [isLoaded, setIsLoaded] = useState(false);
    const [items, setItems] = useState();

    // Note: the empty deps array [] means
    // this useEffect will run once
    // similar to componentDidMount()
    useEffect(() => {
        fetch("http://localhost:23787/api/employees/"+leave.employeeId)
            .then(res => res.json())
            .then(
                (result) => {
                    setIsLoaded(true);
                    setItems(result);
                },
                // Note: it's important to handle errors here
                // instead of a catch() block so that we don't swallow
                // exceptions from actual bugs in components.
                (error) => {
                    setIsLoaded(true);
                    setError(error);
                }
            )
    }, [])

    const [submit, setSubmit] = useState(null);
    const [inputs, setInputs] = useState({});


    const handleChange = (event) => {
        const name = event.target.id;
        const value = event.target.value;
        setInputs(values => ({ ...values, [name]: value }))
    }
    var status;
    const handleClick=(event)=>{
        status=event.currentTarget.id;
    }
    const handleSubmit = (event) => {
        event.preventDefault();
        // alert(inputs.desc);



        const requestOptions = {
            method: 'PUT',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                leaveId:leave.leaveId,
                leaveStatus: status,
                employeeId: leave.employeeId,
                leaveDays: leave.leaveDays,
                applyDate: leave.applyDate,
                startDate: leave.startDate,
                endDate: leave.endDate,
                leaveReason: leave.leaveReason,
                managerCommnet: inputs.managerCommnet
            })
        };
        fetch('http://localhost:23787/api/leaves/'+leave.leaveId, requestOptions)
            .then(response => response.json())
            .then(setSubmit(1)).then(window.location = "/dashboard");
    }
    if (error) {
        return <div>Error: {error.message}</div>;
    } else if (!isLoaded) {
        return <div>Loading...</div>;
    } else {
        return (
        <div className="App">
            <h1>Approve Deny Leave</h1>
            <form onSubmit={handleSubmit} >
                <div class="mb-3">
                    <pre>
                        <label for="employeeid">Employee ID: {leave.leaveId}</label>
                    </pre>
                    <pre>
                        <label for=" employeeName ">Employee Name: {items.empName}</label>
                    </pre>
                    <pre>
                        <label for="leaveBalance ">Leave Balance:20</label>
                    </pre>
                    <pre>
                        <label htmlFor="date">Start Date: {leave.startDate}</label>
                    </pre>
                    <pre>
                        <label htmlFor="date">End Date: {leave.endDate}</label>
                    </pre>
                    <pre>
                        <label htmlFor="noofdays">Number of Days: {leave.leaveDays}</label>
                    </pre>
                    <pre>
                        <label htmlFor="comment">Comment:</label>
                        <textarea onChange={handleChange} id="managerCommnet" type="text" name="leavereason" />
                    </pre>
                </div>

                <button type="submit" id="Approved" onClick={handleClick} class="btn btn-success btn-sm">
                Approve
                </button>{'   '}
                <button type="submiit" id="Denied" onClick={handleClick} class="btn btn-warning btn-sm">
                Deny
                </button>{'   '}
                <Link to="/dashboard"><button type="button" class="btn btn-primary btn-sm">Cancel</button></Link>
            </form>
        </div>
        )}
};
export default ApprovalPage;