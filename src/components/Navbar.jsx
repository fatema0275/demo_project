import React from 'react';
import { Link, NavLink } from 'react-router-dom';

export default function Navbar() {
  return (
    <header className="navbar">
      <div className="container navbar-container">
        <Link to="/" className="brand-logo" id="nav-brand">
          <div className="brand-icon">⚡</div>
          <div className="brand-text">NovaTech <span>Solutions</span></div>
        </Link>
        <nav>
          <ul className="nav-links">
            <li>
              <NavLink to="/" end className={({ isActive }) => isActive ? 'nav-link active' : 'nav-link'} id="nav-home">
                Home
              </NavLink>
            </li>
            <li>
              <NavLink to="/about" className={({ isActive }) => isActive ? 'nav-link active' : 'nav-link'} id="nav-about">
                About Us
              </NavLink>
            </li>
            <li>
              <NavLink to="/services" className={({ isActive }) => isActive ? 'nav-link active' : 'nav-link'} id="nav-services">
                Services
              </NavLink>
            </li>
            <li>
              <NavLink to="/resources" className={({ isActive }) => isActive ? 'nav-link active' : 'nav-link'} id="nav-resources">
                Resources & PDFs
              </NavLink>
            </li>
            <li>
              <Link to="/resources" className="nav-cta" id="nav-download-cta">
                Download Center 📥
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}
