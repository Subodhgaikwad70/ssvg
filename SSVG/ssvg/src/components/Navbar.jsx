import React, { useState } from 'react'
import Login from './Login';
import './navbar.css'
import { NavLink, Navigate, useNavigate } from 'react-router-dom';
import logo from '../assets/logo1.png';

const Navbar = (props) => {
    const setPopup = props.setPopup;

    const navigate = useNavigate();

    return (
        <>
            <header className="header sticky top-0" style={{ top: '0px' }}>
                <div className="logo cursor-pointer" onClick={() => navigate('/')}>
                    <img src={logo} alt="" />
                    <h1 className=' text-white font-bold text-[32px]' >SSVG</h1>
                </div>
                <div className="nav-button">
                    <NavLink className="nav-button-NavLink " to='/'>Home</NavLink>
                    <NavLink className="nav-button-NavLink " to='laptop'>Explore</NavLink>
                    <NavLink className="nav-button-NavLink " to='services'>Services</NavLink>
                    <NavLink className="nav-button-NavLink " to='plans'>Premium</NavLink>
                    <NavLink className="nav-button-NavLink " to='contacts'>Contact Us</NavLink>
                    <NavLink className="nav-button-NavLink " onClick={(e) => setPopup(e)} to='login'>Login</NavLink>
                    <div className="toggle-icon"></div>
                </div>
            </header>
        </>
    )
}

export default Navbar