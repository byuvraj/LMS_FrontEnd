import { Link } from "react-router-dom";
import  {React} from "react";


const login = (props)=>{
    const tem=sessionStorage.getItem("users");
    if (tem==null){
      var jsonObj={id:null,name:"Yuvraj"}
    }else{
      jsonObj = JSON.parse(tem);
    }
    return (
    <form class="container">
      <div clas="row">
        <h1>Leave Manegment System</h1>
      </div>        
      <div class="row">
        <div class="col-4">
          <div class="form-group">
            <label for="exampleInputEmail1">Employee Id</label>
            <input type="text" defaultValue={jsonObj.empName} className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="EmployeeId" />
            <small id="emailHelp" class="form-text text-muted"></small>
          </div>
          <div class="form-group">
            <label for="exampleInputPassword1">Password</label>
            <input type="password" class="form-control" id="exampleInputPassword1" placeholder="Password" />
          </div>
          <p>
          </p>
          <Link to="/dashboard"><button type="submit" class="btn btn-primary">Login</button></Link>
          <space>                    {"     "} </space>
          <Link to={"/"}><button type="cancel" class="btn btn-primary">Cancel</button></Link>
        </div>
      </div>
    </form>
  )
};
export default login;