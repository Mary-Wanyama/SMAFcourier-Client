import React, { Fragment, useRef } from 'react';
import emailjs from '@emailjs/browser';
import "./email.css"
 
export const Emailuser = () => {
 const form = useRef();
 
 const sendEmailToUser = (e) => {
   e.preventDefault();
 
   emailjs.sendForm(process.env.REACT_APP_ANOTHER_EMAIL_KEY_ID,
     process.env.REACT_APP_ANOTHER_TEMPLATE_ID,
     form.current,
     process.env.REACT_APP_USER_ID)
     .then((result) => {
         console.log(result.text);
         alert("message sent successfully")
     }, (error) => {
         console.log(error.text);
     });
 };
 
 return (
   <Fragment className="emailus">
    <div id='content'>
    <form ref={form} onSubmit={sendEmailToUser} id="emailform">
     <label>Message:</label>
     
     <textarea name="message" id='title'/>
     <br/>
     <input type="submit" value="Send" className='submitMessage'/>
   </form>
    </div>

   </Fragment>
 
 );
};
 
export default Emailuser