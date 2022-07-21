import {React, useState, useEffect} from 'react'

const ReportingEmployeeSec = (props) => {
  const [error, setError] = useState(null)
  const [isLoaded, setIsLoaded] = useState(false)
  const [item, setItems] = useState([])
  const tem = sessionStorage.getItem('users')
  var Employee = JSON.parse(tem)

  // Note: the empty deps array [] means
  // this useEffect will run once
  // similar to componentDidMount()
  useEffect(() => {
    fetch('http://localhost:23787/api/leaves')
      .then((res) => res.json())
      .then(
        (result) => {
          setIsLoaded(true)
          setItems(result)
        },
        // Note: it's important to handle errors here
        // instead of a catch() block so that we don't swallow
        // exceptions from actual bugs in components.
        (error) => {
          setIsLoaded(true)
          setError(error)
        },
      )
  }, [])

  if (error) {
    return <div>Error: {error.message}</div>
  } else if (!isLoaded) {
    return <div>Loading...</div>
  } else {
    return (
      <>
        <h3>My Reporting Employees</h3>
        <div classempName="float-child-table-item">
          {item.map((item) => {
            if (item.managerId === Employee.mE_asMNG_Id && item.leaveStatus==="Pending") {
              return (
                <div>
                  <table border="1">
                    <tr>
                      <th>Employee ID</th>
                      <th>{item.employeeId}</th>
                      <th colspan="2">Employee name</th>
                      <th colspan="2">{Employee.empName}</th>
                      <th>Employee Leave Balance </th>
                      <th>04</th>
                    </tr>

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
                      <td>{item.leaveId}</td>
                      <td>{item.leaveDays}</td>
                      <td>{item.startDate}</td>
                      <td>{item.endDate}</td>
                      <td>Earned Leave</td>
                      <td>{item.leaveStatus}</td>
                      <td>{item.leaveReason}</td>
                      <td>{item.applyDate}</td>
                    </tr>
                  </table>
                </div>
              )
            }
            return null
          })}
        </div>
      </>
    )
  }
}

export default ReportingEmployeeSec
