import React from 'react'
import { NavLink } from "react-router-dom";
import "./Signup.css"

function Signup() {
  function handleSubmit(e) {
    // e.preventDefault();
    // fetch("http://127.0.0.1:4000/signup", {
    //   method: "POST",
    //   headers: {
    //     "Content-Type": "application/json",
    //   },
    //   body: JSON.stringify({
    //     username,
    //     password,
    //     password_confirmation: passwordConfirmation,
    //   }),
    // })
    //   .then((r) => r.json())
    //   .then();
  }
  return (
    <div className="signup-content">
        <div className ="signup">   
          <h1>Sign Up for Free</h1>
          <form className='signup-form' onSubmit={handleSubmit}>
          <div class="top-row">
            <div class="field-wrap">
              <label>
                First Name<span class="req">*</span>
              </label>
              <input type="text" required autocomplete="off" />
            </div>
            <div class="field-wrap">
              <label>
                Last Name<span class="req">*</span>
              </label>
              <input type="text"required autocomplete="off"/>
            </div>
          </div>
          <div class="field-wrap">
            <label>
              Email Address<span class="req">*</span>
            </label>
            <input type="email"required autocomplete="off"/>
          </div>
          <div class="field-wrap">
            <label>
              Set A Password<span class="req">*</span>
            </label>
            <input type="password"required autocomplete="off"/>
          </div>
          </form>
          <div className='signup-btn'>
            <NavLink to="/login" className="button-block" >Get Started</NavLink>
          </div>
         </div>  
         </div>
  )
}

export default Signup