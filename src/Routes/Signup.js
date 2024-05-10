import React, { useEffect } from 'react';
import "../Components/Signupstyle.css";
import { useState } from 'react';
import {BsFillCheckCircleFill,BsArrowLeftCircleFill, BsXCircle, BsXCircleFill} from "react-icons/bs";
import { FaGooglePlusG } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import axios from "axios";

const Signup = () => {

    // const [popupStyle,showPopup]=useState("hide")
    // const [popupStyle1,showPopup1]=useState("hide")

    // const popup=()=>{
    //     showPopup("signup-popup")
    //     setTimeout(()=> showPopup("hide"),2500)
    // }
    // const popup1=()=>{
    //     showPopup1("signup-popup1")
    //     setTimeout(()=> showPopup1("hide"),2500)
    // }

    const[name,setName]=useState("");
    const[email,setEmail]=useState("");
    const[password,setPassword]=useState("");
    // const[confirmPassword,setConfirmPassword]=useState("");
    // const[passCheck,setPassCheck]=useState(false);
    // useEffect(()=>{
    //     if(confirmPassword!==password)
    //     {
    //         setPassCheck(false);
    //         // popup1()
    //     }
    //     else{
    //         setPassCheck(true);
    //     }
    // },[confirmPassword,password])
    const handleSubmit=(e)=>{
        e.preventDefault();
        axios.post("http://localhost:3500/user",{name:name,email:email,password:password}).then((res)=>{
            // console.log(res)
            // if(res.dat)

            // popup()
        });
    }

    

  return (
    <div className="page1">
    <div className="cover1">
        <div className='signhead'>
            <Link to="/login" className='front'><BsArrowLeftCircleFill size={30}/></Link>
            <Link to="/" className='backhome'><BsXCircle size={30}/></Link>
        </div>
        <div className='signhead2'>    
            <h1>SIGN UP</h1>
        </div>
        <input className="user1" type="text" placeholder="Username" 
        value={name}
        onChange={(e)=>{
            setName(e.target.value);
        }}
        />
        <input className="user1" type="email" required="email" placeholder="Email"
        value={email} 
            onChange={(e)=>{
                setEmail(e.target.value);
            }}
        />
        <input className="user1" type="password" placeholder="Password"
        value={password}
            onChange={(e)=>{
                setPassword(e.target.value);
        }}
        />
        {/* <input className="user1" type="password" placeholder="Confirm password"
        value={confirmPassword}
        onChange={(e)=>{
            setConfirmPassword(e.target.value);
    }}/> */}

        <button className="signup-btn" type='submit' 
        // disabled={!passCheck}
        onClick={handleSubmit}>Submit</button>
        <p className="usertext">or Signup using</p>
        <p></p>
        <div className="alt-signup">
            <div className="google">
            <FaGooglePlusG size={25}/><pre>   Google</pre>
            </div>
        </div>
        {/* if password is wrong */}

        {/* <div className={popupStyle1}>
            <br/>
            <h3>Signup failed</h3>
            <p>Password and Confirm Password are not same</p>  
        </div> */}

        {/* if password is correct */}

        {/* <div className={popupStyle}>
            <h3>Signed up Successfully</h3>
            <br/>
            <p>
            <BsFillCheckCircleFill size={65}/></p>  
        </div> */}
    </div>
    </div>
  )
}

export default Signup;