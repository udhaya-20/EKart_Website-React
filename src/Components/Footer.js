import "./Footerstyle.css";

import React from 'react';
import { FaFacebookSquare,FaTwitterSquare,FaLinkedin,FaInstagramSquare,FaYoutubeSquare } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="footer">
        <div className="footer-container">
            <div className="center">
               <h4>Find us on Social Media</h4> 
               <p>Connect with us on our social media platforms to know more about our updates and why boxes are extraordinary.</p>
               <div className="socialmedia">
                    <FaFacebookSquare size={35} style={{color:"white" ,marginRight:"1rem"}}/>
                    <FaLinkedin size={35} style={{color:"white" ,marginRight:"1rem"}}/>
                    <FaTwitterSquare size={35} style={{color:"white" ,marginRight:"1rem"}}/>
                    <FaInstagramSquare size={35} style={{color:"white" ,marginRight:"1rem"}}/>
                    <FaYoutubeSquare size={35} style={{color:"white" ,marginRight:"1rem"}}/>
                </div>
               <p className="footerbottom">Copyright © 2023 BoardBox Packages | Powered by BoardBox Enterprises</p>
            </div>
        </div>
    </div>
  )
}

export default Footer