import React from 'react';
import './App.css';
import logo from '../assets/icons/favicon.png';
import githubIcon from '../assets/icons/github.png';
const Navbar = () => {

    return (
        <nav className="navbar bg-dark">

            <h4><img src={logo} alt="logo" className="logo"></img>CoverView</h4>
            <a href="https://github.com/rutikwankhade/CoverView">
                <img src={githubIcon} className="logo" alt="giticon"></img>
            </a>
        </nav>);



};

export default Navbar;