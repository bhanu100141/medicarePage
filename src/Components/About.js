import React from "react";

function About() {
  return (
    <div id="about">
      <div className="about-container">
        <div className="about-content">
          <h2>Our Services</h2>
          <p>
            We provide the most full medical services, so every person could{" "}
            <br></br> heave the oppurtunity to receive qualitative medical help.
          </p>
        </div>
        <div className="card-container">
          <Card
            title="Dental Care"
            imageSrc="https://res.cloudinary.com/dgkru5vsg/image/upload/v1707304522/suqhe5g1gh8riowvfjsy.avif"
          />
          <Card
            title="Pulmonary"
            imageSrc="https://res.cloudinary.com/dgkru5vsg/image/upload/v1707303618/bey02pekqxvt2misbds0.png"
          />
          <Card
            title="Neurological"
            imageSrc="https://res.cloudinary.com/dgkru5vsg/image/upload/v1707304632/l3mfexqjpkdihtqgucgj.png"
          />
          <Card
            title="Prediatrics"
            imageSrc="https://res.cloudinary.com/dgkru5vsg/image/upload/v1707303617/eabnx7z2v1gvm7dy84wt.png"
          />
        </div>
      </div>
    </div>
  );
}

function Card({ title, imageSrc }) {
  return (
    <div className="card">
      <img src={imageSrc} alt="" className="image" />
      <h3 className="name">{title}</h3>
    </div>
  );
}

export default About;
