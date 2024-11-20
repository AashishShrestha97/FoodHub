import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom'; // Import useNavigate
import '../Components/Navbar.css';

const Navbar = () => {
  const [isSearchActive, setIsSearchActive] = useState(false);
  const navigate = useNavigate(); // Initialize navigate

  const toggleSearchBar = () => {
    setIsSearchActive(!isSearchActive);
  };

  return (
    <nav id="navbox">
      {/* Logo Section */}
      <div id="Logo">
        <img src="Logo.png" alt="Logo" />
      </div>

      {/* Navigation Links */}
      <div id="navinfo">
        <Link to="/">Home</Link>
        <Link to="/menu">Menu</Link>
        <Link to="/categories">Categories</Link>
        <Link to="/services">Services</Link>
        <Link to="/aboutus">About Us</Link>
      </div>

      {/* User Actions Section */}
      <div id="navuses">
        {/* Search Icon */}
        <img
          id="search"
          src="Search.png"
          alt="Search"
          onClick={toggleSearchBar}
          className={isSearchActive ? 'hidden' : ''}
          style={{ cursor: 'pointer' }} // Optional: Change cursor to pointer
        />

        {/* Search Bar */}
        <div className={`search-bar ${isSearchActive ? 'active' : ''}`}>
          <input
            type="text"
            className="search-input"
            placeholder="Search..."
            aria-label="Search"
          />
          <button
            type="button"
            className="close-btn"
            onClick={toggleSearchBar}
            aria-label="Close Search"
          >
            &times;
          </button>
        </div>

        {/* Account Button */}
        <button
          type="button"
          onClick={() => navigate('/Login')}
          className="account-button"
          aria-label="Account"
        >
          <img id="account" src="Account.png" alt="Account" />
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
