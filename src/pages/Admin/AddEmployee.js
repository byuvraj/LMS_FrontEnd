import { React, useReducer, useState } from 'react';
import classes from './AddEmployee.module.css';
import Button from '../UI/Button/Button';

const nameReducer = (action, state) => {
    if (action.type === 'EMP_NAME') {
        return { value: action.val, isValid: state.value.trim().length > 3 }
    }
    if (action.type === 'NAME_BLUR') {
        return { value: state.value, isValid: state.value.trim().length > 3 }
    }
    return {
        value: '',
        isValid: false
    }
}
export default function AddEmloyee() {
    const [empNameState, dispatchEmpName] = useReducer(nameReducer, { value: '', isValid: false });
    const [inputs, setInputs] = useState({});
    const[formIsValid, setFormIsValid]= useState(false);
    const [submit, setSubmit] = useState(null);
    const handleChange = (event) => {
        const name = event.target.id;
        const value = event.target.value;
        setInputs(values => ({ ...values, [name]: value }))
        if (event.target.id==='empName'){
            dispatchEmpName({action:'EMP_NAME', val:event.target.value});
            setFormIsValid(
                event.target.value.trim().length>3
              );
        }
    }
    const handleSubmit = (event) => {
        event.preventDefault();

        const requestOptions = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                empName: inputs.empName,
                department: inputs.department,
                designation: inputs.designation,
                leaveBal: 0,
                managerId: inputs.managerId,
                mE_asMNG_Id: 0
            })
        };
        fetch('http://localhost:23787/api/employees/', requestOptions)
            .then(response => response.json())
            .then(data => setSubmit(data.id)).then(window.location = "/dashboard");
    }
    
    return (
        <>
            <div className={classes.input}>
                <header><h2>New Employee</h2></header>
                <form onSubmit={handleSubmit}>
                    <label >Employee name :</label>
                    <input onChange={handleChange} value={empNameState.val} type="text" placeholder='Employee Full Name' id='empName'></input>
                    <label >Manager ID :</label>
                    <input onChange={handleChange} type="number" placeholder='Manager' id='managerId'></input>
                    <label >Department :</label>
                    <input onChange={handleChange} type="text" placeholder='Department' id='department'></input>
                    <label >Designation</label>
                    <div className={classes.select}>
                        <select onChange={handleChange} name='Select' id='designation' placeholder='Select one'>
                            <option value="">Select option</option>
                            <option value="Trainee">Trainee</option>
                            <option value="Jr_SoftwareDeveloper">Jr Software Developer</option>
                            <option value="Sr_SoftwareDeveloper">Sr Software Developer</option>
                        </select>
                    </div>
                    <Button type="submit" disabled={!formIsValid}>
                        Add New Employee
                    </Button>
                </form>
            </div>
        </>
    );
};