import React, { useState, useRef, useEffect } from 'react';
import './Header.css';
import { Link } from 'react-router-dom';

const Header = ({ isLoggedIn, onLogin, onLogout }) => {
  const [dropdownVisible, setDropdownVisible] = useState(false);
  const dropdownRef = useRef(null);

  const handleLogout = () => {
    onLogout(); // Call the logout function passed as a prop
    setDropdownVisible(false); // Close dropdown after logout
  };

  const toggleDropdown = () => {
    setDropdownVisible((prev) => !prev);
  };

  // Close dropdown if clicked outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setDropdownVisible(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

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
          {isLoggedIn ? (
            <div className="profile-icon" onClick={toggleDropdown} ref={dropdownRef}>
              <span>👤</span>
              {dropdownVisible && (
                <div className="dropdown-menu">
                  <button onClick={handleLogout}>Logout</button>
                </div>
              )}
            </div>
          ) : (
            <>
              <Link to="/login"><button>Login</button></Link>
              <Link to="/signup"><button>Signup</button></Link>
            </>
          )}
        </div>
      </nav>
    </header>
  );
};

export default Header;
