import React, { useEffect } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import Home from '../Home/Home';
import Features from '../Features/Features';
import Company from '../Company/Company';
import './header.css'
import Logo1 from '../../assets/home-1024/logo1.jpg';
import Logo2 from '../../assets/home-1024/logo2.png';
import Tinvio from '../../assets/home-1024/tinvio.png';
import ChangeLanguage from '../Helpers/changeLanguage/ChangeLanguage';
import { Button } from '@mui/material';
import MyButton from '../Helpers/MyButton';
import Logo from '../../assets/header-1920/header_Logo.png';
import Text from '../../assets/header-1920/header_Text.png';
import '../../index.css';
import KeyboardArrowDown from '../../assets/header-1920/keyboardArrowDown.png';

function Header() {
  const location = useLocation();

  return (
    <>    
    <div className='main'>
        <div className='logo_text_container'>
            <span className="logo">
              <img src={Logo}/>
            </span>

            <span>
              <img src={Text} id="tinvio-text"/>
            </span>
            <span className='change-language'>
              En <img src={KeyboardArrowDown}/>
            </span>
        </div>

        <nav className='links_container'>
          <NavLink to="/" activeclassname="active">Home</NavLink>
          <NavLink to="/features" activeclassname="active"> Features</NavLink>
          <NavLink to="/company" activeclassname="active">Company</NavLink>
        </nav>
        
        <div className='header-button'>
          <Button variant='contained'>Get Started</Button>
        </div>

    </div>
    
    </>
  )
}

export default Header