import React,{useState} from 'react'
import {useNavigate } from "react-router-dom";
import "./Admin.css"

function Admin() {
  const navigate = useNavigate()
  // if (username === "admin" && password === "admin") {
  //   toast("Login Successfully")
  //   navigate('/booking')
  //   } else {
  //   toast.error("User not found!", {
  //   });
  //   }
  const [errorMessages, setErrorMessages] = useState({});
const [isSubmitted, setIsSubmitted] = useState(false);

const renderErrorMessage = (name) =>
  name === errorMessages.name && (
    <div className="error">{errorMessages.message}</div>
  );
  const database = [
    {
      username: "user1",
      password: "pass1"
    },
    {
      username: "user2",
      password: "pass2"
    }
  ];
  
  const errors = {
    uname: "invalid username",
    pass: "invalid password"
  };
  
  const handleSubmit = (event) => {
    //Prevent page reload
    event.preventDefault();
  
    var { uname, pass } = document.forms[0];
  
    // Find user login info
    const userData = database.find((user) => user.username === uname.value);
  
    // Compare user info
    if (userData) {
      if (userData.password !== pass.value) {
        // Invalid password
        setErrorMessages({ name: "pass", message: errors.pass });
      } else {
        setIsSubmitted(true);
      }
    } else {
      // Username not found
      setErrorMessages({ name: "uname", message: errors.uname });
    }
  };
  return (
    <div className="form" onSubmit={handleSubmit}>
      <div className='admin-box'>
     <form>
       <div className="input-container">
         <label>Username </label>
         <input type="text" name="uname" required />
         {renderErrorMessage("uname")}
       </div>
       <div className="input-container">
         <label>Password </label>
         <input type="password" name="pass" required />
         {renderErrorMessage("pass")}
       </div>
       <div className="button-container">
         <button className='admin-btn' type="submit" onClick={()=>{navigate("/admindashboard")}}>Login</button>
       </div>
     </form>
     </div>
   </div>
  )
}

export default Admin;