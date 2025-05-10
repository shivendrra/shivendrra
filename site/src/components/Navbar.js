import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { ThemeContext } from '../context/AppThemeContext';
import '../App.css';

export default function Navbar(props) {
  const { theme, toggleTheme } = useContext(ThemeContext);

  return (
    <>
      <nav id="mainNavbar" className={`px-4 py-3 navbar navbar-expand-md`}>
        <div id="innerNav" className="container-md">
          <Link className={`navbar-brand mx-3 `} to="/">व्याकुल</Link>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav ms-auto">
              <li className="nav-item disabled">
                <Link className={`nav-link mx-3 `} to="/blogs">blogs.</Link>
              </li>
              <li className="nav-item">
                <Link className={`nav-link mx-3 `} to="/gallery">gallery.</Link>
              </li>
              <li className="nav-item">
                <Link className={`nav-link mx-3 `} to="/portfolio">portfolio.</Link>
              </li>
              <li className="nav-item">
                <button className="btn btn-theme-toggle" onClick={toggleTheme} aria-label="Toggle dark/light mode">
                  {theme === 'light' ? <span className="material-symbols-outlined"> light_mode </span> : <span className="material-symbols-outlined"> dark_mode </span>}
                </button>
              </li>
            </ul>
          </div>
          {/* <button className="btn btn-theme-toggle" onClick={toggleTheme} aria-label="Toggle dark/light mode">
            {theme === 'light' ? <span className="material-symbols-outlined"> light_mode </span> : <span className="material-symbols-outlined"> dark_mode </span>}
          </button> */}
        </div>
      </nav>
    </>
  )
}