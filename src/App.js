import React,{useState} from "react";
import AddUser from "./components/Users/AddUsers";
import {ToastContainer} from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';
import UserList from "./components/Users/UserList";
const App = () => {
const [userList ,setUserList] =useState([]);
const AddUserHandler =(uname,uage) =>{
  console.log("the value of name and age is ",uname,"age is ",uage)
  setUserList((prevUserList)=>{
    return [...prevUserList,{name:uname,age:uage}];
  })
}
  return (
    <div>
      <ToastContainer/>
      <AddUser onAddUser={AddUserHandler}/>
      <UserList user={userList}/>
    </div>
  );
}

export default App;
