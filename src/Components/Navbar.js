import "./Navbar.css";

import React from 'react'
import { Link } from "react-router-dom";
import { useState } from "react";
import {FaBars, FaShoppingCart, FaTimes} from "react-icons/fa";
import {MdAccountCircle} from "react-icons/md";
import LogoImg from "../images/kart_logo.png";
import Searchbar from "./Searchbar";

const Navbar=()=>{
    
    const [click,setClick]=useState(false);
    const handleClick =() =>setClick(!click);

    const [color,setColor]=useState(false);
    const changeColor = ()=>{
        if(window.scrollY >=5)
        {
            setColor(true);
        }
        else{
            setColor(false);
        }
    }
    window.addEventListener("scroll",changeColor);

   return(
    <div className={color ? "header header-bg" : "header" }>
        <Link to="/">
            <img className="logo-img1" src={LogoImg} alt="LogoImg"/>
        </Link>

        <Searchbar/>
        
        <ul className={click ? "nav-menu active" : "nav-menu"}>
            
            <li>
                <Link to="/">Home</Link>
            </li>
            <li>
                <Link to="/about">About</Link>
            </li>
            <li>
                <Link to="/contact">Contact</Link>
            </li>
            <li className="carts">
                <Link to="/cart">
                    <FaShoppingCart size={25} style={{color:"white"}}/>
                </Link>
            </li>
            <li className="account">
                <Link to="/profile">
                    <MdAccountCircle size={25} style={{color:"white"}}/>    
                </Link>
            </li>
        </ul>
        <div className="hamburger" onClick={handleClick}>
            {click ? (<FaTimes size={23} style={{color:"white"}}/>):
            (<FaBars size={23} style={{color:"white"}}/>)}
            
            
        </div>
    </div>
  )
}

export default Navbar;
