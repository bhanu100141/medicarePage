import React from "react";

const Navbar = () => {
  return (
    <nav>
        
      <div className="nav-logo-container">
        <p className="medi">
          Medi<spam className="care">Care+</spam>
        </p>
      </div>
      <div className="navbar-links-container">
        <a href="#home">Home</a>
        <a href="#about">About</a>
        <a href="#servies">Services</a>
        <a href="#news">News</a>
        <a href="#contact" className="primary-button">
          <span className="contact">Contact</span>
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
