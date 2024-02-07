import React from "react";
const Contact = () => {
  return (
    <div id="contact">
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
        </div>
      </nav>
      <div className="social-icons">
        <a href="https://www.facebook.com">
          <i className="fab fa-facebook icon"></i>
        </a>
        <a href="https://www.google.com">
          <i className="fab fa-google icon"></i>
        </a>
        <a href="https://twitter.com">
          <i className="fab fa-twitter icon"></i>
        </a>
      </div>
      <script>
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.4/css/all.min.css"
        />
      </script>
      <footer className="footer">
        <p>©2020 PodPayment - 2</p>
      </footer>
    </div>
  );
};
export default Contact;
