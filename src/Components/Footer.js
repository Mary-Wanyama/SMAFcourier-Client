import React from "react";
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import "../Css/Footer.css"

const Footer =() =>{
    return(
       
        <> 
         <footer>
        <div className=" container  container-flex">
            <div className="icons">
                <InstagramIcon className="icon"/>
                <FacebookIcon className="icon"/>
                <TwitterIcon className="icon"/>
            </div>
            <div className="foot">
                <hr/>
                <hr/>
                <hr/>
                <hr/>
            </div>
            <div className="copyright">
                <p>All rights reserverd &copy;</p>
                <p>Always at your service</p>
            </div>
        </div> 
        </footer>
        </>
       

    )
}

export default Footer;