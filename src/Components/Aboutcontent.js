import React from 'react';

import "../Components/Aboutcontent.css";
import { GiSelfLove} from "react-icons/gi";
import {TbTruckDelivery} from "react-icons/tb";
import {GiCutDiamond} from "react-icons/gi";

const Aboutcontent = () => {
  return (
    <div className='details'>
        <h1>About Us</h1>
        <div className='card-container'>
            <div className='card'>
                <h3>Passion</h3>
                <span className='bar'></span>
                <p className='icon'>
                    <GiSelfLove size={60}/>           
                </p>
                <p>The success of BoardBox packages is purely based on the passion towards our work.Our passion will reflects in our products.We are providing the needfull for our customers.</p>
            </div>

            <div className='card'>
                <h3>Experience</h3>
                <span className='bar'></span>
                <p className='icon'>
                  <GiCutDiamond size={60}/>           
                </p>
                <p>20+ years of experience</p>
                <p>50+ employes were working</p>
                <p>5000+ orders delivered</p>
                <p>Main branch in Erode</p>
            </div>

            <div className='card'>
                <h3>Delivery</h3>
                <span className='bar'></span>
                <p className='icon'>
                    <TbTruckDelivery size={60}/>           
                </p>
                <p>Customized box/Sheets design</p>
                <p>Bulk orders available</p>
                <p>Cash on delivery/Digital payment</p>
                <p>Fast delivery within a week</p>
            </div>
        </div>
    </div>
  )
}

export default Aboutcontent