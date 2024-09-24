import React from 'react';
import './Header.css';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header className="header">
      <nav className="navbar">
        <div className="logo">Smart Patient Card</div>
        <ul className="nav-links">
          <li><Link to="/">Home</Link></li>
          <li><Link to="/patients">Patients</Link></li>
          <li><Link to="/about">About</Link></li>
          <li><Link to="/contact">Contact us</Link></li>
        </ul>
        <div className="redirects">
          <Link to="/login"><button>Login</button></Link>
          <Link to="/signup"><button>Signup</button></Link>
        </div>
      </nav>
    </header>
  );
};

export default Header;
