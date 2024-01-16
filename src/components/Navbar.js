import React from 'react';
import Logo from "../assets/hamburgerlogo.png";
import {Link} from "react-router-dom";

export default function Navbar() {
  return (
    <div className='navbar'>
        <div className='leftSide'>
            <img src={Logo} alt=""  />

        </div>
         <div className='rightSide'>
          <Link to="/">Home</Link>   
          <Link to="/menu">Menu</Link>   
          <Link to="/about">About</Link>       
          <Link to="/contact">Contact</Link>
         </div>
        </div>
    
  );
}
