import React from 'react';
import './App.css';
import logo from '../assets/icons/favicon.png';
const Navbar = () => {

    return (
        <nav className=" bg-red-200 text-4xl">
            <h4><img src={logo} alt="logo" className="logo"/>Coverview</h4>
            <a href="https://github.com/rutikwankhade/CoverView"
                target="_blank" rel="noopener  noreferrer" class="star-btn">
                <span role="img" aria-label="star">⭐</span> Star on Github
            </a>

        </nav>);

};

export default Navbar;