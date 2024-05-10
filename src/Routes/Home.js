import React from 'react';
import "../Components/Navbar";
import Navbar from '../Components/Navbar';
import Homeimg from '../Components/HomeImage'
import Footer from '../Components/Footer';

const Home = () => {
  return (
    <div>
        <Navbar/>
        <Homeimg/>
        <Footer/>
    </div>
  )
}

export default Home;