import  {React ,useState, useEffect} from "react";

const Manager = (props) => {
    const [error, setError] = useState(null);
    const [isLoaded, setIsLoaded] = useState(false);
    const [items, setItems] = useState();
    const tem=sessionStorage.getItem("users");
    var Employee = JSON.parse(tem);
    var thisMgr;
    // Note: the empty deps array [] means
    // this useEffect will run once
    // similar to componentDidMount()
    useEffect(() => {
        fetch("http://localhost:23786/api/managers/")
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
    return (
        <div className="float-container-child-manager"> 
        {items.map((item) => {
        if (item.managerId === Employee.managerId) {
            thisMgr = item;
            sessionStorage.setItem("manager",JSON.stringify(item));
            return null;
        }
        return null;
        })
        }
            <div className="App">
                <h1 className="heading">Manager Details Section</h1>
                <pre>
                    <label htmlFor="employeeid">Manager ID   : {thisMgr.managerId}</label>
                </pre>
                <pre>
                    <label htmlFor="employeeid">Manager Name : {thisMgr.name}</label>
                </pre>
                <pre>
                    <label htmlFor="employeeid">Department   : {thisMgr.dept}</label>
                </pre>
            </div> 
        </div>
        )
    };
}
export default Manager;