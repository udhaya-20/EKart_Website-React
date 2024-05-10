import React from 'react'

import "../Components/Profilecontent.css";
import AvatarImg from "../images/user_avatar.jpg";
import { BiLogOut } from "react-icons/bi";
import { TbMap2 } from "react-icons/tb";
import { Link } from 'react-router-dom';

const Profilecontent = () => {
  return (
    <div className='propage'>
        <div className='procards'>
            <div className='headdiv'>
                <img className='avatarimg' src={AvatarImg} alt="user_avatar.jpg"/>
                <p>Hello,</p>
                <p style={{fontSize:"1.5rem",color:"Black" }}>UdhayaKumar</p>
                <br></br>
                <hr></hr>
            </div>
            <br></br>
            <form className='formstyle'>
            <a href='#' style={{color:"blue",textAlign:"right"}}><u>Edit</u></a>
              <label>Your Name:</label>
                <input type="text" style={{width:"21rem"}}></input>
                
              <label>Your Gender:</label>
              <div>
                <input type='radio'/>Male
                <input type='radio' value="Female"/>Female        
              </div>

              <label>Email Address:</label>
                <input type="email" style={{width:"21rem"}}></input>

              <label>Phone Number:</label>
                <input type="tel" style={{width:"21rem"}}></input>

              <label for="states">State:</label>
              <select name="state" id='states'>
                  {/* <option >select your state</option> */}
                  <option value="" disabled selected hidden>Select your state</option>
                  <option value="andhra Pradesh">Andhra Pradesh</option>
                  <option value="arunachal Pradesh">Arunachal Pradesh</option>
                  <option value="assam">Assam</option>
                  <option value="bihar">Bihar</option>
                  <option value="chhattisgarh">Chhattisgarh</option>
                  <option value="goa">Goa</option>
                  <option value="gujarat">Gujarat</option>
                  <option value="haryana">Haryana</option>
                  <option value="himachal pradesh">Himachal Pradesh</option>
                  <option value="jharkand">Jharkhand</option>
                  <option value="karnataka">Karnataka</option>
                  <option value="kerala">Kerala</option>
                  <option value="madhya pradesh">Madhya Pradesh</option>
                  <option value="maharashtra">Maharashtra</option>
                  <option value="manipur">Manipur</option>
                  <option value="meghalaya">Meghalaya</option>
                  <option vlaue="mizoram">Mizoram</option>
                  <option vlaue="nagaland">Nagaland</option>
                  <option vlaue="odisha">Odisha</option>
                  <option vlaue="punjab">Punjab</option>
                  <option vlaue="rajasthan">Rajasthan</option>
                  <option vlaue="sikkim">Sikkim</option>
                  <option vlaue="tamil nadu">Tamil Nadu</option>
                  <option vlaue="telangana">Telangana</option>
                  <option vlaue="tripura">Tripura</option>
                  <option vlaue="uttarakhand">Uttarakhand</option>
                  <option vlaue="uttar pradesh">Uttar Pradesh</option>
                  <option vlaue="west bengal">West Bengal</option>
                </select>

              <label for="state">Address:</label>
              <input type="text" style={{width:"21rem"}}></input>

              <button className='buttn'>Save</button>
              <br></br>
              <hr></hr>
              <br></br>
            </form>

            <div className="footdiv">
              <div className="footcard">
                  <Link to=""><BiLogOut size={20} />&nbsp; &nbsp; Logout</Link>
              </div>
              <div className="footcard">
                  <Link to="">Track Orders &nbsp; <TbMap2 size={20}/></Link>
              </div>
            </div>
        </div>
  </div>
  )
}

export default Profilecontent