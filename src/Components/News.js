import React from "react";

function News() {
  return (
    <div id="news">
      <div className="news-container">
        <div>
          <h2 className="new-head">What Our Customers Say</h2>
        </div>
        <div className="news">
          <Card
            content="I wanted to thanks everyone at this facility for the quality of care and compassion they showed during my stay."
            imageSrc="https://res.cloudinary.com/dgkru5vsg/image/upload/v1691830506/cld-sample.jpg"
            name="Alexandra Williams"
            para="Patient"
          />
          <Card
            content="I wanted to thanks everyone at this facility for the quality of care and compassion they showed during my stay."
            imageSrc="https://res.cloudinary.com/dgkru5vsg/image/upload/v1694707673/360_F_574955019_gk0EfaPbwaIzRf3HtS8KJdKmduOx8V5G_lvyjak.jpg"
            name="Jane Doe"
            para="Patient"
          />
        </div>
      </div>
    </div>
  );
}

function Card({ imageSrc, name, content, para }) {
  return (
    <div className="news-card">
      <p>{content}</p>
      <div className="comment">
        <div>
          <img src={imageSrc} alt="" className="news-image" />
        </div>
        <div>
          <h3>{name}</h3>
          <p>{para}</p>
        </div>
      </div>
    </div>
  );
}

export default News;
