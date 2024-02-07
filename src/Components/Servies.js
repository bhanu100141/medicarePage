import React from "react";

const Servies = () => {
  return (
    <div id="servies">
      <div className="servies-container">
        <div className="s-1">
          <div>
            <h1>Clinic With Innovative</h1>
            <p>
              We provide the most full medical services, so every person could
              heave the oppurtunity to receive qualitative medical help.
            </p>
            <button className="s-button">Learn More</button>
          </div>
        </div>
        <div className="servies-cards">
          <div className="s-card">
            <div>
              <img
                src="https://res.cloudinary.com/dgkru5vsg/image/upload/v1707306390/qvuvsrf8jjkf29rcknyl.jpg"
                alt=""
                className="s-image"
              />
            </div>
            <p>Qulified Docters</p>
          </div>

          <div className="s-card">
            <img
              src="https://res.cloudinary.com/dgkru5vsg/image/upload/v1707306389/we77cu5ud4qlqbivz0nl.jpg"
              alt=""
              className="s-image"
            />
            <p>Emergency Care</p>
          </div>
        </div>

        <div className="men-card">
          <div className="s-card-2">
            <div>
              <img
                src="https://res.cloudinary.com/dgkru5vsg/image/upload/v1707306389/r109pitkivubmusdwu2y.webp"
                alt=""
                className="s-image"
              />
            </div>
            <p>24 Hours Service</p>
          </div>
        </div>
      </div>
      <div className="we-have">
        <h1>We Have The Best Specialist</h1>
        <p>
          We have a wide experience in experience design and strategy, <br></br>
          with locally-rooted knowledge.
        </p>
      </div>
      <div className="weHave-card">
        <div className="card1">
          <div className="we-card">
            <h4>Dr. Awaatif Al</h4>
            <p>Dental Care</p>
          </div>
        </div>
        <div className="card1">
          <div className="we-card">
            <h4>Dr. Filipa Gaspar</h4>
            <p>Cardiology</p>
          </div>
        </div>
        <div className="card1">
          <div className="we-card">
            <h4>Dr. Sukhmeet Gorae</h4>
            <p>Neurological</p>
          </div>
        </div>
        <div className="card1">
          <div className="we-card">
            <h4>Dr. Siri Jakobasson</h4>
            <p>Prediatrics</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Servies;
