import React, { useEffect, useState } from 'react';

import "./HomeImagestyle.css";
import HomeImg from "../images/kart_home.jpg";
import { Link, useNavigate } from 'react-router-dom';
import { useRecoilState } from 'recoil';
import { OrderState } from '../Atoms/Orderdetails';
import Card from './Card';
import axios from 'axios';
 
const Image = () => {
  const navigate=useNavigate();
  const [order,setOrder]=useRecoilState(OrderState);

  const [pro,setPro]=useState([]);
  const handleChange =(p={})=>{

    const{name,price}=p
    // console.log(JSON.stringify(p))
    setOrder([
      ...order,
      {
        name:name,
        price:price,
        count:1,

      }

    ])
    console.log(JSON.stringify(order))
  }
  useEffect(()=>{

    axios.get('http://localhost:3500/products').then((res)=>{
      // console.log(res);
      setPro(res.data);
    })

  },[])
  const handleNavigate=(e)=>{
    e.preventDefault()
    navigate("/ordernow")
  }
  return (
    <div className="hero">
        <div className="mask">
            <img className="intro-img" src={HomeImg} alt="HomeImg"/>
        </div>
        <div className="content12">
            <p>Welcome to our</p>
            <h1>BoardBox Packages</h1>
            <div>
                <Link to="/login" className="btn">Log In</Link>
                <Link to="/signup" className="btn btn-light">Sign Up</Link>
            </div>
        </div>
        <div className='heads'>
        <h3>Our Products</h3>
        </div>
        <div className='categories'>
              <h3>Boxes</h3>
              <hr className='rule'></hr>
        </div>
        <div className='containers'>
              
              {
                pro.map((p)=>{

                  // console.log(JSON.stringify(p))
                  return<Card url={p.imgurl} name={p.name} price={p.price} handleChange={handleChange}/>
                })
              }

              {/* <div className='products'>
                  <img className='prodimg' src="images/product1.jpg" alt='product1.jpg'/>
                  <p>Convention Style CardBoard Boxes</p>
                  <p>Rs:₹ 20</p>
                  <div className='buttons'>
                    <button to="#" variant="contained" className='btn1'>Add to cart</button>
                    <button onClick={handleNavigate} variant="contained" className='btn2'>Order Now</button>
                  </div>
              </div>
              <div className='products'>
                  <img className='prodimg' src="images/product2.jpg" alt='product2.jpg'/>
                  <p>Corrugated Style FireBoard Boxes</p>
                  <p>Rs:₹ 20</p>
                  <div className='buttons'>
                    <button to="#" variant="contained" className='btn1'>Add to cart</button>
                    <button to="#" variant="contained" className='btn2'>Order Now</button>
                  </div>
              </div>
              <div className='products'>
                  <img className='prodimg' src="images/product3.jpg" alt='product3.jpg'/>
                  <p>Grey Paper CardBoard Boxes</p>
                  <p>Rs:₹ 25</p>
                  <div className='buttons'>
                    <button to="#" variant="contained" className='btn1'>Add to cart</button>
                    <button to="#" variant="contained" className='btn2'>Order Now</button>
                  </div>
              </div>
              <div className='products'>
              <img className='prodimg' src="images/product4.jpg" alt='product4.jpg'/>
                  <p>Double Layered CardBoard Boxes</p>
                  <p>Rs:₹ 35</p>
                  <div className='buttons'>
                    <button to="#" variant="contained" className='btn1'>Add to cart</button>
                    <button to="#" variant="contained" className='btn2'>Order Now</button>
                  </div>
              </div>
              <div className='products'>
              <img className='prodimg' src="images/product5.jpg" alt='product5.jpg'/>
                  <p>HoneyComb Layered CardBoard Boxes</p>
                  <p>Rs:₹ 45</p>
                  <div className='buttons'>
                    <button to="#" variant="contained" className='btn1'>Add to cart</button>
                    <button to="#" variant="contained" className='btn2'>Order Now</button>
                  </div>
              </div>
              <div className='products'>
              <img className='prodimg' src="images/product6.jpg" alt='product6.jpg'/>
                  <p>Triple Layered CardBoard Boxes</p>
                  <p>Rs:₹ 70</p>
                  <div className='buttons'>
                    <button to="#" variant="contained" className='btn1'>Add to cart</button>
                    <button to="#" variant="contained" className='btn2'>Order Now</button>
                  </div>
              </div>
              <div className='products'>
              <img className='prodimg' src="images/product7.jpg" alt='product7.jpg'/>
                  <p>Reverse Tuck CardBoard Boxes</p>
                  <p>Rs:₹ 30</p>
                  <div className='buttons'>
                    <button to="#" variant="contained" className='btn1'>Add to cart</button>
                    <button to="#" variant="contained" className='btn2'>Order Now</button>
                  </div>
              </div>
              <div className='products'>
              <img className='prodimg' src="images/product8.jpg" alt='product8.jpg'/>
                  <p>Packaging Pallet CardBoard Boxes</p>
                  <p>Rs:₹ 45</p>
                  <div className='buttons'>
                    <button to="#" variant="contained" className='btn1'>Add to cart</button>
                    <button to="#" variant="contained" className='btn2'>Order Now</button>
                  </div>
            </div> */}
        </div> 
        <div className='categories'>
              <h3>Tapes</h3>
              <hr className='rule'></hr>
        </div>
        <div className='containers'>
              
              <div className='products'>
                  <img className='prodimg' src="images/producttape1.jpg" alt='producttape1.jpg'/>
                  <p>Brown Packaging Tape</p>
                  <p>Rs:₹ 25</p>
                  <div className='buttons'>
                    <button to="#" variant="contained" className='btn1'>Add to cart</button>
                    <button to="#" variant="contained" className='btn2'>Order Now</button>
                  </div>
              </div>
              <div className='products'>
                  <img className='prodimg' src="images/producttape2.jpg" alt='producttape2.jpg'/>
                  <p>Clear Packaging Tape</p>
                  <p>Rs:₹ 30</p>
                  <div className='buttons'>
                    <button to="#" variant="contained" className='btn1'>Add to cart</button>
                    <button to="#" variant="contained" className='btn2'>Order Now</button>
                  </div>
              </div>
              <div className='products'>
                  <img className='prodimg' src="images/producttape3.jpg" alt='producttape3.jpg'/>
                  <p>Black Packaging Tape</p>
                  <p>Rs:₹ 30</p>
                  <div className='buttons'>
                    <button to="#" variant="contained" className='btn1'>Add to cart</button>
                    <button to="#" variant="contained" className='btn2'>Order Now</button>
                  </div>
              </div>
              <div className='products'>
              <img className='prodimg' src="images/producttape4.jpg" alt='producttape4.jpg'/>
                  <p>Pre-Printed Packaging Tape</p>
                  <p>Rs:₹ 35</p>
                  <div className='buttons'>
                    <button to="#" variant="contained" className='btn1'>Add to cart</button>
                    <button to="#" variant="contained" className='btn2'>Order Now</button>
                  </div>
              </div>
          </div>
          <div className='categories'>
              <h3>Sheets</h3>
              <hr className='rule'></hr>
          </div>
          <div className='containers'>
              
              <div className='products'>
                  <img className='prodimg' src="images/productSheet1.jpg" alt='productsheet1.jpg'/>
                  <p>Corrugated Board Flat Sheets</p>
                  <p>Rs:₹ 120</p>
                  <div className='buttons'>
                    <button to="#" variant="contained" className='btn1'>Add to cart</button>
                    <button to="#" variant="contained" className='btn2'>Order Now</button>
                  </div>
              </div>
              <div className='products'>
                  <img className='prodimg' src="images/productsheet2.jpg" alt='productsheet2.jpg'/>
                  <p>A4 Premium Ivory Paper Sheets</p>
                  <p>Rs:₹ 329</p>
                  <div className='buttons'>
                    <button to="#" variant="contained" className='btn1'>Add to cart</button>
                    <button to="#" variant="contained" className='btn2'>Order Now</button>
                  </div>
              </div>
              <div className='products'>
                  <img className='prodimg' src="images/productsheet3.jpg" alt='productsheet3.jpg'/>
                  <p>DI-Kraft MDF Rectangle Sheets</p>
                  <p>Rs:₹ 449</p>
                  <div className='buttons'>
                    <button to="#" variant="contained" className='btn1'>Add to cart</button>
                    <button to="#" variant="contained" className='btn2'>Order Now</button>
                  </div>
              </div>
              <div className='products'>
                  <img className='prodimg' src="images/productsheet4.jpg" alt='productsheet4.jpg'/>
                  <p>Round MDF pine Board Sheets</p>
                  <p>Rs:₹ 230</p>
                  <div className='buttons'>
                    <button to="#" variant="contained" className='btn1'>Add to cart</button>
                    <button to="#" variant="contained" className='btn2'>Order Now</button>
                  </div>
              </div>
              <div className='products'>
              <img className='prodimg' src="images/productsheet5(i).jpg" alt='productsheet5(i).jpg'/>
                  <p>Corrugated Packing Roll Sheets</p>
                  <p>Rs:₹ 230</p>
                  <div className='buttons'>
                    <button to="#" variant="contained" className='btn1'>Add to cart</button>
                    <button to="#" variant="contained" className='btn2'>Order Now</button>
                  </div>
              </div>
            </div>
    </div>
  )
}

export default Image;