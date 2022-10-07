import React from 'react';
import classes from './AddEmployee.module.css';
import Button from '../UI/Button/Button';
export default function AddEmloyee() {
    return (
        <>
            <div className={classes.input}>
            <header><h2>New Employee</h2></header>
                <form>
                    <label >Employee name :</label>
                    <input type="text" placeholder='Employee Full Name'></input>
                    <label >Manager :</label>
                    <input type="text" placeholder='Manager'></input>
                    <label >Department :</label>
                    <input type="text" placeholder='Department'></input>
                    <label >Designation</label>
                    <div className={classes.select}>
                        <select name='Select' id='Designation' placeholder='Select one'>
                            <option value="">Select option</option>
                            <option value="Trainee">Trainee</option>
                            <option value="Jr_SoftwareDeveloper">Jr Software Developer</option>
                            <option value="Sr_SoftwareDeveloper">Sr Software Developer</option>
                        </select>
                    </div>
                    <Button type="submit" >
                        Add New Employee
                    </Button>
                </form>
            </div>
        </>
    );
};