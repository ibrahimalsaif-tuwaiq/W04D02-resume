import React from "react";
import "./style.css";

const Info = () => {
  return (
    <div className="infoWrapper">
      <div className="felx-container">
        <img
          src="https://avatars.githubusercontent.com/u/92247874?v=4"
          className="profileImage"
          alt="profileImage"
        />
      </div>
      <div className="felx-container">
        <h2 className="name">Ibrahim Alsaif</h2>
      </div>
      <div className="felx-container">
        <h2 className="jobTitle">Software Engineer</h2>
      </div>
      <hr className="line" />
      <div className="loction-email">
        <div className="felx-container">
          <i className="fas fa-location-arrow info-icon"></i>
          <p className="info-parag">Qassim, Saudi Arabia</p>
        </div>
        <div className="felx-container">
          <i className="fas fa-envelope info-icon"></i>
          <p className="info-parag">
            <a href="mailto:Ibrahim.Husain.elq.js@tuwaiq.edu.sa">
              Ibrahim.Husain.elq.js@tuwaiq.edu.sa
            </a>
          </p>
        </div>
      </div>
      <hr className="line" />
      <div className="felx-container">
        <a href="https://github.com/ibrahimalsaif-tuwaiq">
          <i className="fab fa-github github"></i>
        </a>
      </div>
    </div>
  );
};

export default Info;
