import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const toggleMenu = () => setIsOpen(!isOpen);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Experience', path: '/experience' },
    { name: 'Projects', path: '/projects' },
    { name: 'Media', path: '/media' },
    { name: 'Contact', path: '/contact' }
  ];

  return (
    <nav className="navbar glass">
      <div className="navbar-container">
        <Link to="/" className="navbar-logo">
          NKM<span className="accent">.</span>
        </Link>
        <div className="menu-icon" onClick={toggleMenu}>
          <i className={isOpen ? 'fas fa-times' : 'fas fa-bars'}></i>
          <span className="hamburger">
            <span className={`bar ${isOpen ? 'open' : ''}`}></span>
            <span className={`bar ${isOpen ? 'open' : ''}`}></span>
            <span className={`bar ${isOpen ? 'open' : ''}`}></span>
          </span>
        </div>
        <ul className={isOpen ? 'nav-menu active glass' : 'nav-menu'}>
          {navLinks.map((link, index) => (
            <li className="nav-item" key={index}>
              <Link
                to={link.path}
                className={location.pathname === link.path ? 'nav-links active-link' : 'nav-links'}
                onClick={() => setIsOpen(false)}
              >
                {link.name}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
