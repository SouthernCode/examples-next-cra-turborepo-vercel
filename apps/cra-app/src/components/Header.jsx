import React from 'react';
import './Header.css';
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header>
        <Link to="/" className='logo'>Chori Commerce</Link>
        <ul className='navbar'>
          <li><Link to="/" className='header-link'>Home</Link></li>
          <li><Link to="/about-us" className='header-link' reloadDocument={true}>About Us</Link></li>
        </ul>
      </header>
  );
};

export default Header;