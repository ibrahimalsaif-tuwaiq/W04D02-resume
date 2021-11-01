import React from "react";
import "./style.css";

const About = () => {
  const about = `I am a computer science fresh graduate, specializes in BackEnd development 
  and has experience in developing web applications using the python framework Flask, seeking to
  leverage my experience as a developer.`;

  return (
    <div className="aboutWrapper">
      <div className="title">
        <i className="fas fa-user-alt title-icon"></i>
        <h2>ABOUT</h2>
      </div>
      <div className="flex">
        <hr className="resumeLine" />
      </div>
      <div className="paragraph">
        <p>{about}</p>
      </div>
    </div>
  );
};

export default About;
