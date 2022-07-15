import React from "react";
const login = ()=>{
    return (
    <form class="container">
      <div clas="row">
        <h1>Leave Manegment System</h1>
      </div>        
      <div class="row">
        <div class="col-4">
          <div class="form-group">
            <label for="exampleInputEmail1">Employee Id</label>
            <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="EmployeeId" />
            <small id="emailHelp" class="form-text text-muted"></small>
          </div>
          <div class="form-group">
            <label for="exampleInputPassword1">Password</label>
            <input type="password" class="form-control" id="exampleInputPassword1" placeholder="********" />
          </div>
          <p>
          </p>
          <button type="submit" class="btn btn-primary">Submit</button>
          <space>                    {"     "} </space>
          <button type="cancel" class="btn btn-primary">Cancel</button>
        </div>
      </div>
    </form>
  )
};
export default login;