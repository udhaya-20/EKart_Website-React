import React from "react";
import "./index";
import Home from "./Routes/Home";
import About from "./Routes/About";
import Contact from "./Routes/Contact";
import Cart from "./Routes/Cart";
import Profile from "./Routes/Profile";
import { Routes ,Route} from "react-router-dom";
import Login from "./Routes/Login";
import Signup from "./Routes/Signup";
import OrderNow from "./Components/Ordernow";
import { RecoilRoot } from "recoil";

function App() {
  return (
    <>
    <RecoilRoot>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/about" element={<About/>}/>
        <Route path="/contact" element={<Contact/>}/>
        <Route path="/cart" element={<Cart/>}/>
        <Route path="/profile" element={<Profile/>}/>
        <Route path="/login" element={<Login/>}/>
        <Route path="/signup" element={<Signup/>}/>
        <Route path="/ordernow" element={<OrderNow/>}/>
      </Routes>
      </RecoilRoot>
    </>
  );
}

export default App;
