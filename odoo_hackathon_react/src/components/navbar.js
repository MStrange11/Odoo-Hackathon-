import React from "react";
// import { Link } from 'react-router-dom';
import "./navbar.css"; // Assuming you're using a separate CSS file

const Navbar = () => {
  return (
    <div className="navbar">
      <img src="media\logo.jpg" alt="Logo" className="logo" />

      <ul className="nav-links">
        <li>
          <a href="">Home</a>
        </li>
        <li>
          <a href="">About</a>
        </li>
        <li>
          <a href="">Services</a>
        </li>
        <li>
          <a href="">Contact</a>
        </li>
      </ul>

      <div className="search-box">
        <input type="text" placeholder="Search" />
        <i class="bi bi-search fs-2"></i>
      </div>
    </div>
  );
};

export default Navbar;
