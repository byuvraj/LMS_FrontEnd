import  {React ,useState, useEffect} from "react";
import {Link} from "react-router-dom";

const Home = (props)=>{
    const [error, setError] = useState(null);
    const [isLoaded, setIsLoaded] = useState(false);
    const [items, setItems] = useState();

    // Note: the empty deps array [] means
    // this useEffect will run once
    // similar to componentDidMount()
    useEffect(() => {
        fetch("http://localhost:23787/api/employees/")
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

    var Emid=0;
    var tId=0;
    const handleClick = event => {
        Emid=event.currentTarget.id;
        sessionStorage.setItem("users",JSON.stringify(items[Emid]))
      };
    if (error) {
        return <div>Error: {error.message}</div>;
    } else if (!isLoaded) {
        return <div>Loading...</div>;
    } else {
        return (
            <div className="table-welcome">
            <h1 >Welcome to Leave Management Application</h1>
            <table >
                <tr>
                    <th>Sr.No.</th>
                    <th>Employee Name</th>
                    <th>Designation</th>
                    <th></th>
                </tr>
                {items.map(item => (
                    
                    <tr key={tId}>
                    <td >
                        {tId+1} 
                    </td>
                    <td>
                        {item.empName} 
                    </td>
                    <td>
                        {item.designation}
                    </td>
                    <td > <Link to="login"><button id={tId++} onClick={handleClick}>Login</button></Link>
                    </td>
                    </tr>
                    
                ))}
                
            </table>
          
            </div>
        );
    }
};
export default Home;