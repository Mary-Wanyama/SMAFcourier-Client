import React from "react";
import "../Css/Footer.css"
import { useNavigate } from "react-router-dom"; 
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';


const Footer =() =>{
    const navigate = useNavigate()

    const moveToMap = () =>{
        alert('you are being navigated to maps')
        navigate('/maps')
    }
    return(
        <div className="copyright"> 
         <footer>

            <div class="cont-container">
                <div className="support">
                    <h1>Speak to us directly</h1>
                    <div className="icons">
                      <p><InstagramIcon className="icon"/>@SMAF_Courrier</p>
                      <p><FacebookIcon className="icon"/>SMAF_Courrier</p>
                      <p><TwitterIcon className="icon"/> @SMAF_Courrier</p>
                      <p><WhatsAppIcon className="icon"/> 0712345678</p>
                    </div>
                
                </div>
                <div className="contact-info">
                    <p>Nairobi,Kenya</p>
                        <button onClick={moveToMap}>maps</button>

                 </div> 

            </div>
        </footer>
        </div>
       

    )
}

export default Footer;