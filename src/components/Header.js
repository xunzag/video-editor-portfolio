import React from 'react';
import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';

const Header = () => {

  const [navbar,setNavbar] = useState(false);
  const changeBackground = () => {
    if (window.scrollY >= 150) {
      setNavbar(true)
    } else {
      setNavbar(false)
    }
  }
  useEffect(() => {
    changeBackground()
    window.addEventListener("scroll", changeBackground)
  })

  return (
    <header className={navbar ? "dark" : "header"}>
      <Link to="/" className="logo">Rames Waqar.</Link>
      <div className="bx bx-menu" id="menu-icon"></div>
      <nav className="navbar">
        <Link to="/" className="active">Home</Link>
        <Link to="/about">About Me</Link>
        <Link to="/recent">Work</Link>
        <Link to="/contact">Contact</Link>
      </nav>
    </header>
  );
};

export default Header;
