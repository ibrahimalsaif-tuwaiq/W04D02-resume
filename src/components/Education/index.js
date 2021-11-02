import React from "react";
import { FaGraduationCap } from "react-icons/fa";
import "./style.css";

const Education = () => {
  return (
    <div className="educationWrapper">
      <div className="title">
        <FaGraduationCap className="title-icon" />
        <h2>EDUCATION</h2>
      </div>
      <div className="flex">
        <hr className="resumeLine" />
      </div>
      <div className="educationPragWrapper">
        <p className="major">Bachelor of Computer Science</p>
        <p className="university">Qassim University</p>
        <p>Studied: 2017 - 2021</p>
      </div>
    </div>
  );
};

export default Education;
