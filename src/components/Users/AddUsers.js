import React, { useState } from "react";
import { notify } from "../../helpers/Notification/notification";
import Button from "../UI/Button";
import Card from "../UI/Card";
import classes from "./AddUser.module.css";

const AddUser = (props) => {
  const [enteredUser, setEnteredUser] = useState("");
  const [enteredAge, setEnteredAge] = useState("");
  const AddUserHandler = (event) => {
    event.preventDefault();
    if(enteredUser.trim().length===0 || enteredAge.trim().length===0){
      return;
    }
    if(+enteredAge<1)return;
    props.onAddUser(enteredUser,enteredAge)
    console.log(enteredUser,"the age is ",enteredAge)
    setEnteredUser("");
    setEnteredAge("");
  };
  const handleChange = (e) => {
  const {id,value } =e.target;
  (id==="username")?setEnteredUser(value):(id==="age")?setEnteredAge(value):notify.showError("form Id name didn't match")
  };

  return (
    <>
      <Card className={classes.input}>
        <form onSubmit={AddUserHandler}>
          <label htmlFor="username">Username</label>
          <input
            type="text"
            placeholder="Username"
            id="username"
            name="username"
            value={enteredUser}
            onChange={handleChange}
          ></input>
          <label htmlFor="age">Age (Years)</label>
          <input 
          type="number"
           placeholder="Age"
            id="age" 
            name="age"
            value={enteredAge}
            onChange={handleChange}
            ></input>
          <Button type="submit">Add User</Button>
        </form>
      </Card>
    </>
  );
};
export default AddUser;
