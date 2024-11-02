import React from 'react';
import { Link } from 'react-router-dom';

function NavBar() {
  return (
    <nav>
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/discounts">Discounts</Link></li>
        <li><Link to="/scholarships">Scholarships</Link></li>
      </ul>
    </nav>
  );
}

export default NavBar;
