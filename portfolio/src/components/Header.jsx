import React from 'react';
import { NavLink } from 'react-router-dom';

function Header() {
    return (
        <ul className="nav nav-tabs">
          <li className="nav-item">
              Home
          </li>
          <li className="nav-item">
              Project
          </li>
          <li className="nav-item">
              Project Gallery
          </li>
          <li className="nav-item">
              Contact
          </li>
        </ul>
      );
};

export default Header;


