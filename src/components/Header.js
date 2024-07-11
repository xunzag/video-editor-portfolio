import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header className="header">
      <Link to="/" className="logo">Rames Waqar.</Link>
      <div className="bx bx-menu" id="menu-icon"></div>
      <nav className="navbar">
        <Link to="/" className="active">Home</Link>
        <Link to="/about">About Me</Link>
        <Link to="/recent">Work</Link>
        <Link to="/services">Services</Link>
        <Link to="/contact">Contact</Link>
      </nav>
    </header>
  );
};

export default Header;
