import React from 'react';
import { Link } from 'react-router-dom';

const NavBar = () => {
  return (
    <nav style={{ backgroundColor: '#0033A0', color: 'white', padding: '10px 0' }}>
      <ul style={{ listStyleType: 'none', margin: 0, padding: 0, display: 'flex', justifyContent: 'space-around' }}>
        <li><Link to="/" style={{ color: 'white', textDecoration: 'none' }}>Home</Link></li>
        <li><Link to="/scholarships" style={{ color: 'white', textDecoration: 'none' }}>Scholarship Tracker</Link></li>
        <li><Link to="/discounts" style={{ color: 'white', textDecoration: 'none' }}>Discounts</Link></li>
      </ul>
    </nav>
  );
};

export default NavBar;
