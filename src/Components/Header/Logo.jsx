import React from 'react';
import logo from "../../assets/logo/long-logo.png";
import './style.css';

function Logo() {
  return (
    <img src={logo} alt="logo" className='navbar-logo' />
  );
}

export default Logo;    
