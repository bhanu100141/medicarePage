import React from "react";
import Navbar from "./Navbar";

const Home = () => {
  return (
    <div id="home" className="home-container #home">
      <Navbar />
      <div className="home-banner-container">
        <div className="flex">
          <div className="home-text-section">
            <p className="primary-text">Welcome to MediCare+ Clinic</p>
            <h1 className="primary-heading">Best Specialists</h1>
            <p className="primary-text-2">
              We are on the leading edge of cancer care. Providing the full{" "}
              <br></br> continuum of cancer treatments and supportive care
              services in a single convenient location.
            </p>
            <button className="secondary-button">Make an Appointment</button>
            <button className="secondary-button button-2">Department</button>
          </div>
          <div className="home-box-section">
            <button className="button"></button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
