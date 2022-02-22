import React, { useState } from "react";
import { notify } from "../../helpers/Notification/notification";
import Button from "../UI/Button";
import Card from "../UI/Card";
import ErrorModal from "../UI/ErrorModal";
import classes from "./AddUser.module.css";

const AddUser = (props) => {
  const [enteredUser, setEnteredUser] = useState("");
  const [enteredAge, setEnteredAge] = useState("");
  const [error ,setError]= useState();
  const AddUserHandler = (event) => {
    event.preventDefault();
    if(enteredUser.trim().length===0 || enteredAge.trim().length===0){
      setError({
        title:"Invalid Input",
        message :"please enter valid input for name and age"
      })
      return;


    }
    if(+enteredAge<1){
      setError({
        title:"Invalid age ",
        message:"please enter age value (>0)"
      })
      return;
    };
    props.onAddUser(enteredUser,enteredAge)
    console.log(enteredUser,"the age is ",enteredAge)
    setEnteredUser("");
    setEnteredAge("");
  };
  const handleChange = (e) => {
  const {id,value } =e.target;
  (id==="username")?setEnteredUser(value):(id==="age")?setEnteredAge(value):notify.showError("form Id name didn't match")
  };
  const Errorhandler = () =>{
    setError(null);
  }

  return (
    <>
   {error &&( <ErrorModal title={error.title} message={error.message} onConfirm={Errorhandler}/>)}
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
