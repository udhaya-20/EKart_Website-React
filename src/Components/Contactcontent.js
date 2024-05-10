import React from 'react'
import { FaPhoneAlt, FaWhatsapp } from 'react-icons/fa';
import { ImLocation2 } from 'react-icons/im';
import {GoMail} from "react-icons/go";

import "./Contactcontent.css";

const ContactContent = () => {
  return (
    <div className='details1'>
        <h1>Contact Us</h1>
        <div className='card-containers'>
            <div className='cards'>
                <h2>Company Details</h2>
                <hr style={{marginLeft:"auto",marginRight:"auto"}}/>
                <br/>
                
                <p>If you have any queries, don't hesitate, please give us a call or send an email.</p>

                <h4>Factory Address:</h4>
                <p><ImLocation2 size={22}/> 30/3 Nethji Street, Vijayamangalam Road, Uthukuli-638751, TamilNadu, India.</p>

                <h4>Call Us:</h4>
                <p><FaPhoneAlt size={20}/>  +91 7010393356</p>
                <p><FaWhatsapp size={24}/>  +91 6380847580</p>

                <h4>Email:</h4>
                <p><GoMail size={25}/> abcdefg@gmail.com</p>
                <p><GoMail size={25} /> hijklmn@gmail.com</p>
            </div>
          
            <div className='cards1'>
                <h2>Company Form</h2>
                <br/>
                <hr style={{marginLeft:"auto",marginRight:"auto"}}/>

                <form className='forms'>
                  <label>Your Name:</label>
                  <input type="text"></input>

                  <label>Email:</label>
                  <input type="email"></input>

                  <label>Phone Number:</label>
                  <input type="tel"></input>

                  <label>Message:</label>
                  <textarea rows="6" placeholder='Type Your Message Here..' />
                  <button className='butn'>Submit</button>
                </form>
            </div>
        </div>
        <div className='card-container1'>
            <div className='map'>
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7828.447393664964!2d77.45099816332468!3d11.171066300000001!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba90ead83cfede7%3A0x4e049e0b5d0fe01!2skavya%20Package!5e0!3m2!1sen!2sin!4v1679308747461!5m2!1sen!2sin" style={{border:"0"}} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
            </div>
        </div>
     </div>
  )
}

export default ContactContent