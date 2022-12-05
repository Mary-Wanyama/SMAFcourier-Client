import React from "react";
import { NavLink } from "react-router-dom";
import "../Css/Navbar.css"


const Navbar =() =>{
    return(
        <> 
        <header>
            <div className="container  container-flex">
                <nav>
                    <div className="navbar">
                    <NavLink to ='/' className="navitem"> Home </NavLink>
                    <NavLink to ='/contact' className="navitem"> ContactUs </NavLink>
                    <NavLink to ='/admin' className="navitem"> Admin </NavLink>
                    <NavLink to ='/login' className="navitem"> Login </NavLink>
                    </div>
                </nav>

            </div>
        </header>
        </>

    )
}

export default Navbar;



