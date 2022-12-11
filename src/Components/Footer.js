import React from "react";
import "../Css/Footer.css"
// import { useNavigate } from "react-router-dom"; 


const Footer =() =>{
    // const navigate = useNavigate()

    // const moveToMap = () =>{
    //     alert('you are being navigated to maps')
    //     navigate('/maps')
    // }
    return(
        <div className="copyright"> 
         <footer>
            <div>
            <div className="contact-container">
        <section id="contact-section">
            <div class="cont-container">
                <div className="support">
                    <h1>Get in Touch</h1>
                    <p>For support or an question:</p>
                    <p>Email us at support@smafcourrier.com</p>
                    <div className="icons">
                      <p><InstagramIcon className="icon"/>@SMAF_Courrier</p>
                      <p><FacebookIcon className="icon"/>SMAF_Courrier</p>
                      <p><TwitterIcon className="icon"/> @SMAF_Courrier</p>
                      <p><WhatsAppIcon className="icon"/> 0712345678</p>
                    </div>
                
                </div>
                <div className="contact-info">
                <h2 >SMAF Courrier</h2>
                    <p>Tom Mboya Street</p>
                    <p>Nairobi,Kenya</p>
                        {/* <button onClick={moveToMap}>maps</button> */}
                </div>
            </div>
        </section>
    </div> 

            </div>
        </footer>
        </div>
       

    )
}

export default Footer;