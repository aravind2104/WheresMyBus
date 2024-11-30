// src/components/Navbar.js

import React from 'react';
import { Link } from 'react-router-dom'; // Import Link to use for navigation

const Navbar = () => {
  return (
    <nav className="navbar">
      <ul>
        <li><Link to="/">Home</Link></li> {/* Link to HomePage */}
        <li><Link to="/contact">Contact</Link></li> {/* Link to ContactPage */}
      </ul>
    </nav>
  );
};

export default Navbar;
