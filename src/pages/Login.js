import { Link } from "react-router-dom";
import { React, useState, useReducer } from "react";

const emailReducer = (state, action) => {
  if (action.type === 'USER_INPUT') {
    return { value: action.val, isValid: action.val.includes('@') };
  }
  if (action.type === 'INPUT_BLUR') {
    return { value: state.value, isValid: state.value.includes('@') };
  }
  return {
    value: '',
    isValid: false
  };
};
const passwdReducer = (state, action) => {
  if (action.type === 'USER_PASSWD') {
    return { value: action.val, isValid: state.value.trim().length > 6 }
  }
  if (action.type === 'INPUT_BLUR') {
    return { value: state.value, isValid: state.value.trim().length > 6 }
  }
  return {
    value: '',
    isValid: false
  }
};
const Login = () => {
  const [formIsValid, setFormIsValid] = useState(false);

  const [emailState, dispatchEmail] = useReducer(emailReducer, { value: '', isValid: null, });
  const [passwdState, dispatchPasswd] = useReducer(passwdReducer, { value: '', isValid: null, })


  const emailChangeHandler = (event) => {
    dispatchEmail({ type: 'USER_INPUT', val: event.target.value });

    setFormIsValid(
      event.target.value.includes('@') && passwdState.isValid
    );
  };

  const passwordChangeHandler = (event) => {
    dispatchPasswd({ type: 'USER_PASSWD', val: event.target.value })

    setFormIsValid(
      emailState.isValid && event.target.value.trim().length > 6
    );
  };
  const validateEmailHandler = () => {
    dispatchEmail({ type: 'INPUT_BLUR' }); //setEmailIsValid(emailState.isValid);
  };

  const validatePasswordHandler = () => {
    dispatchPasswd({ type: 'INPUT_BLUR' });
  };


  const tem = sessionStorage.getItem("users");
  if (tem == null) {
    window.location = "/";
  } else {
    var jsonObj = JSON.parse(tem);
  }
  const handleSubmit = event => {
    event.preventDefault();
    window.location = "/dashboard";
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
            <input type="text" onChange={emailChangeHandler} value={emailState.val} onBlur={validateEmailHandler} autoFocus defaultValue={jsonObj.empId} className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="EmployeeId" />
          </div>
          <div class="form-group">
            <label for="exampleInputPassword1">Password</label>
            <input type="password" value={passwdState.val} onChange={passwordChangeHandler} onBlur={validatePasswordHandler} class="form-control" id="exampleInputPassword1" placeholder="Password" />
          </div>
          <p>
          </p>
          <button type="submit" onClick={handleSubmit} disabled={!formIsValid} class="btn btn-primary">Login</button>
          <space>                    {"     "} </space>
          <Link to={"/"}><button type="cancel" class="btn btn-primary">Cancel</button></Link>
        </div>
      </div>
    </form>
  )
};
export default Login;