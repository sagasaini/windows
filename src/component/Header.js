import React, { useState } from 'react';
import { FaSearch, FaBars,FaAngleDown } from 'react-icons/fa';
import './Header.css';
import logoimage from '../assets/images/logoimage.jpg';

function MobileMenu({ isOpen, toggleMenu }) {
  const [isOpens, setIsOpens] = useState(false);
  const handleClicks = () => {
    setIsOpens(!isOpens);
  };
  const [menuOpens, setMenuOpens] = useState(false);

  const toggleMenus = () => {
    setMenuOpens(!menuOpens);
  };
  return (
    <div className={`mobile-menu ${isOpen ? 'open' : ''}`}>
      <nav style={{position: 'relative',
    top: '33rem',
    background: 'white'}}>
        <ul className="menu">
          <li className="menu-item"><a href="/">Home</a></li>
          <li className="menu-item"><a href="/about-us">About Us</a></li>
          <li onClick={handleClicks} className="menu-item dropdown" >
            Products <FaAngleDown />
            <ul className={`sub-menu ${isOpens ? 'show' : ''}`}>
            <li><a href="/product-page">uPVC </a></li>
              <li><a href="/product-page">Aliminium</a></li>
              <li><a href="/product-page">Glass</a></li>
            </ul>
          </li>
          <li className="menu-item"><a href="/project-gallery">Project Gallery</a></li>
          <li className="menu-item"><a href="/solutions">Solutions</a></li>
          <li className="menu-item"><a href="/contact-us">Contact Us</a></li>
        </ul>
      </nav>
    </div>
  );
}

function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const handleClick = () => {
    setIsOpen(!isOpen);
  };
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <header id="masthead" className="site-header header-area header-in-container clearfix header-padding-1 has_header_icons header_style_2" style={{background:'rgba(28, 156, 217, 1)'}}>
      <div className="header-bottom sticky-bar header-res-padding">
        <div className="container-fluid">
          <div className="row">
            <div className="col-xl-2 col-lg-2 col-md-6 col-4">
              <div className="site-branding logo">
                <a href="/" className="custom-logo-link" rel="home">
                  <img width="250" height="152" src={logoimage} className="custom-logo wp-post-image" alt="Lotus Wiindoors" />
                </a>
                <h1 style={{textAlign: 'center',
    fontSize: '40px'}}>Sat kabir uPVC window & <br />domal section</h1>
              </div>
              <div className="search">
                <input placeholder="Search..." type="text" />
                <button type="submit">Go</button>
              </div>
            </div>
            <div className="col-xl-8 col-lg-8 d-none d-lg-block">
              <div className="main-menu">
                <nav>
                  <ul id="primary-menu" className="menu">
                    <li className="menu-item current-menu-item"><a href="/">Home</a></li>
                    <li className="menu-item"><a href="/about-us">About Us</a></li>
                    <li onClick={handleClick} className="menu-item dropdown" >
            Products <FaAngleDown />
            <ul className={`sub-menu ${isOpen ? 'show' : ''}`}>
              <li><a href="/product-page">uPVC </a></li>
              <li><a href="/product-page">Aliminium</a></li>
              <li><a href="/product-page">Glass</a></li>
            </ul>
          </li>
                    <li className="menu-item"><a href="/project-gallery">Project Gallery</a></li>
                    <li className="menu-item"><a href="/solutions">Solutions</a></li>
                    <li className="menu-item"><a href="/contact">Contact Us</a></li>
                  </ul>
                </nav>
              </div>
            </div>
            <div className="col-xl-2 col-lg-2 col-md-6 col-8">
              <div className="header-right-wrap">
                <div className="mobile-menu-toggle d-lg-none" onClick={toggleMenu}>
                  <FaBars />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <MobileMenu isOpen={menuOpen} toggleMenu={toggleMenu} />
    </header>
  );
}

export default Header;
