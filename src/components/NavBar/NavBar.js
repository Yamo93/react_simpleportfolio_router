import React from 'react';
import { NavLink } from 'react-router-dom';
import './NavBar.css';

const NavBar = (props) => {
    return (
        <nav className="main-nav">
        <ul>
            <li><NavLink to="/" exact activeClassName="active-link">Home</NavLink></li>
            <li><NavLink to="/what-i-do" activeClassName="active-link">What I Do</NavLink></li>
            <li><NavLink to="/my-approach" activeClassName="active-link">My Approach</NavLink></li>
            <li><NavLink to="/about" activeClassName="active-link">About</NavLink></li>
            <li><NavLink to="/contact" activeClassName="active-link">Contact</NavLink></li>
        </ul>
    </nav>
    );
};

export default NavBar;