import React, { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import '../App.css';

export default function Navbar(props) {

  const location = useLocation();
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (location.pathname === '/') {
        if (window.scrollY > 0) {
          setScrolled('scrolled-main-pg');
        } else {
          setScrolled(' ');
        }
      } else {
        setScrolled('scrolled-oth-pg');
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };

  }, [location.pathname]);

  return (
    <>
      <nav id="mainNavbar" className={`px-4 py-3 navbar navbar-expand-lg fixed-top ${scrolled ? scrolled : ''}`}>
        <div id="innerNav" className="container-fluid">
          <Link className={`navbar-brand mx-3 ${scrolled ? scrolled : ''}`} to="/">व्याकुल</Link>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav ms-auto">
              <li className="nav-item disabled">
                <Link className={`nav-link mx-3 ${scrolled ? scrolled : ''}`} to="/blogs">blogs.</Link>
              </li>
              <li className="nav-item">
                <Link className={`nav-link mx-3 ${scrolled ? scrolled : ''}`} to="/gallery">gallery.</Link>
              </li>
              <li className="nav-item">
                <Link className={`nav-link mx-3 ${scrolled ? scrolled : ''}`} to="/portfolio">portfolio.</Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  )
}