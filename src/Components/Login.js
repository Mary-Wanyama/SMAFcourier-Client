import React from "react";
import { NavLink } from "react-router-dom";
import "./Login.css"

const Login =() =>{
    // const username=

    // function handleSubmit(e) {
    //     e.preventDefault();
    //     fetch("/login", {
    //       method: "POST",
    //       headers: {
    //         "Content-Type": "application/json",
    //       },
    //       body: JSON.stringify({ username }),
    //     })
    //       .then((r) => r.json())
    //       .then((user) => onLogin(user));
    //   }
    return(
        <div className='log-in-container'>
        <div className='box'>
         <form className='login-form'>
          <div className='field text-black'>
              <input id='username'  type='name'
              placeholder='Phone number, username or email'/>
              <label for="username">Phone number, username or email</label>
          </div>    
          <div className='field text-black'>  
              <input id='password' type='password'
              placeholder='password'/>
              <label for="password">Password</label>
          </div>
          <NavLink to ='/orderform'className='login-button' title='login'>Log in</NavLink>
          <div className='separator'>
            <div className='line'></div>
                    <p>OR</p>
            <div className='line'></div>        
          </div>
          <div className='other'>
            <a  href='#' className='forgot-password'>Forgot password</a>
         </div>
         </form>
          <div className='boxacc'>
            <p>Don't have an account?
              <NavLink to ='/signup' className='signup'>Sign Up</NavLink> 
              </p>
          </div>  
        </div>               
        </div>
    )
}

export default Login;