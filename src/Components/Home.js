import React from "react";
import { NavLink } from "react-router-dom";
import homeimage from '../Assets/delivery.jpg'
import "../Css/Home.css"

const Home =() =>{
    return(
        <> 
       <div className="mainsection">
        <div className="contentbox">
            <h1>Sending Parcels Made <span>Easy With SMAFcourier</span></h1>
            <p> Sending parcels Locally? SMAFcourier simplifies your sending needs.
                 Choose the best package to suit your courier needs.</p>
                 <div className="btnBox">
                    <div className="btn">
                    <NavLink to ='/login' className="SendNow bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full"> Send Parcel </NavLink>
                    </div>

                 </div>
        </div>
        <div className="imageContainer">
            <img src ={homeimage} alt = "home" />
        </div>
       </div>
        </>

    )
}

export default Home;