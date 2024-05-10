import React, { useState } from "react";
import "../Components/Loginstyle.css";
import{BsXCircleFill} from 'react-icons/bs';
import {FaGooglePlusG} from 'react-icons/fa';
import{BsXCircle, BsArrowRightCircleFill} from 'react-icons/bs';
import {AiFillEyeInvisible,AiFillEye} from 'react-icons/ai';
import { Link } from "react-router-dom";
// import { useRecoilState } from "recoil";
// import { UserLoginState, UserSignupState } from "../Atoms/Userdata";

const Login = ()=> {
    //hooks for user details

    // const [signupUser,setUser]=useRecoilState(UserSignupState);
    // const [loginUser,setUser]=useRecoilState(UserLoginState);

    const [popupStyle,showPopup]=useState("hide")

    const popup=()=>{
        showPopup("login-popup-false")
        setTimeout(()=> showPopup("hide"),2500)
    }
     const [email,setEmail]=useState("");
     const [ password,setPassword]=useState("");

    // passwor show or hide 
    const [passwordType, setPasswordType] = useState("password");
    const [passwordInput, setPasswordInput] = useState("");
    const handlePasswordChange =(evnt)=>{
        setPasswordInput(evnt.target.value);
    }
    const togglePassword =()=>{
      if(passwordType==="password")
      {
       setPasswordType("text")
       return;
      }
      setPasswordType("password")
    }

  return (
    <div className="page">
    <div className="cover">
        <div className="loghead1">
            <Link to='/'className="backhome"><BsXCircle size={30}/></Link>
            <Link to="/signup" className="backcard"><BsArrowRightCircleFill size={30}/></Link>
        </div>
        <div className="loghead2">
            <h1>LOGIN</h1>
        </div>
    
        <input className="user" type="text" placeholder="Email"/>
        
        {/* pwd show or hide */}
        <input  className="user" type={passwordType} onChange={handlePasswordChange} value={passwordInput} name="password" placeholder="Password" />
            {/* <button onClick={togglePassword} >
                { passwordType==="password"? <AiFillEyeInvisible size={20}/> :<AiFillEye size={20}/> }
            </button> */}
        
        
            <p className="link">
                <Link to="#">forgot password?</Link> / <Link to="/signup">Sign up</Link>
            </p>

        <div className="login-btn" onClick={popup}>Login</div>
        <p className="usertext">or login using</p>
        <div className="alt-login">
            <div className="google">
                <FaGooglePlusG size={25}/><pre>   Google</pre></div>
        </div>
        {/* if password is wrong */}
        <div className={popupStyle}>
            <BsXCircleFill size={40} />
            <h3>Login failed</h3>
            <p>Email or Password is incorret</p>  
        </div>

        {/* if password is correct */}
        {/* <div className={popupStyle}>
            <h3>Successfully LoggedIn</h3> 
            <BsFillCheckCircleFill size={40}/>  
        </div> */}



        {/* google account */}
        {/* <GoogleOAuthProvider clientId="553178735863-bnbulbau06cht8pf075im64f6c1f3c8v.apps.googleusercontent.com">
        <GoogleLogin
            onSuccess={credentialResponse => {
                console.log(credentialResponse);
            }}
            onError={() => {
                console.log('Login Failed');
            }}
        />;
        </GoogleOAuthProvider> */}
    </div>
    </div>
  )
}
export default Login;