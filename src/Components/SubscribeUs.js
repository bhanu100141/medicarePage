import React from "react";

const SubscribeUs = () => {
  return (
    <div className="sub-container">
      <div>
        <div className="sub-out">
          <div className="sub-in">
            <h1>Subscribe to Newsletter</h1>
            <p>We have a wide experience in experience design and strategy,</p>
            <div className="sun-input">
              <input
                type="mail"
                placeholder="Enter your email address"
                className="input"
              />
              <button className="button">Send Now</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SubscribeUs;
