import  {React ,useState, useEffect} from "react";
import {Link} from "react-router-dom";

const MyLeave =()=>{
    const tem=sessionStorage.getItem("users");
    if (tem==null){
      window.location = "/";
    }else{
      var Employee = JSON.parse(tem);
    }
    const [error, setError] = useState(null);
    const [isLoaded, setIsLoaded] = useState(false);
    const [items, setItems] = useState();


    // Note: the empty deps array [] means
    // this useEffect will run once
    // similar to componentDidMount()
    useEffect(() => {
        fetch("http://localhost:23787/api/leaves/")
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

    if (error) {
        return <div>Error: {error.message}</div>;
    } else if (!isLoaded) {
        return <div>Loading...</div>;
    } else {
    return(
        <>
          <table>
            <tr>
                <th>Leave ID</th>
                <th>Number of Days</th>
                <th>Start Date</th>
                <th>End Date</th>
                <th>Status</th>
                <th>Reason</th>
                <th>Applied On</th>
            </tr>
                {items.map(item => {
                    if(item.employeeId===Employee.empId){
                        return(
                            <tr >
                                <td >
                                    {item.leaveId}
                                </td>
                                <td>
                                    {item.leaveDays}
                                </td>
                                <td>
                                    {item.startDate}
                                </td>
                                <td>
                                    {item.endDate}
                                </td>
                                <td>
                                    {item.leaveStatus}
                                </td>
                                <td>
                                    {item.leaveReason}
                                </td>
                                <td>
                                    {item.applyDate}
                                </td>
                            </tr>
                        )
                    }return null;
                })}
        </table>
        <Link to="/newleave"><button>New Application</button></Link>
        </>
    )
}
};
export default MyLeave;