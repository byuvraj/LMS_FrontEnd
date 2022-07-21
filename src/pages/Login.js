import { Link } from "react-router-dom";
import  {React} from "react";


const login = (props)=>{
    const tem=sessionStorage.getItem("users");
    if (tem==null){
      window.location = "/";
    }else{
      var jsonObj = JSON.parse(tem);
    }
    const handleSubmit =event=>{
      event.preventDefault();
      window.location="/dashboard";
    }
    const handleKeypress = event => {
      //it triggers by pressing the enter key
      if (event.keyCode === 13) {
        handleSubmit();
      }
    };
    
    return (
    <form class="container" onKeyPress={handleKeypress}>
      <div clas="row">
        <h1>Leave Manegment System</h1>
      </div>        
      <div class="row">
        <div class="col-4">
          <div class="form-group">
            <label for="exampleInputEmail1">Employee Id</label>
            <input type="text" autoFocus defaultValue={jsonObj.empId} className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="EmployeeId" />
          </div>
          <div class="form-group">
            <label for="exampleInputPassword1">Password</label>
            <input type="password" class="form-control" id="exampleInputPassword1" placeholder="Password" />
          </div>
          <p>
          </p>
          <button type="submit" onClick={handleSubmit} class="btn btn-primary">Login</button>
          <space>                    {"     "} </space>
          <Link to={"/"}><button type="cancel" class="btn btn-primary">Cancel</button></Link>
        </div>
      </div>
    </form>
  )
};
export default login;