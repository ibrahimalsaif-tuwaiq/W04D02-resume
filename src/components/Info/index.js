import React from "react";
import { FaLocationArrow, FaEnvelope, FaGithub } from "react-icons/fa";
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
          <FaLocationArrow className="info-icon" />
          <p className="info-parag">Qassim, Saudi Arabia</p>
        </div>
        <div className="felx-container">
          <FaEnvelope className="info-icon" />
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
          <FaGithub className="github" />
        </a>
      </div>
    </div>
  );
};

export default Info;
