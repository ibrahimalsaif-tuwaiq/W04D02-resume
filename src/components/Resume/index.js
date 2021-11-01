import React from "react";
import "./style.css";
import About from "../About";
import Work from "../Work";
import Skills from "../Skills";
import Education from "../Education";

const Resume = () => {
  return (
    <div className="resumeWrapper">
      <About />
      <Work />
      <Skills />
      <Education />
    </div>
  );
};

export default Resume;
