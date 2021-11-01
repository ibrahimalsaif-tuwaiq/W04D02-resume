import React from "react";
import "./style.css";
import SkillItem from "../SkillItem";

const Skills = () => {
  const skills = [
    "HTML",
    "CSS",
    "Javascript",
    "Python",
    "jQuery",
    "Github",
    "Bootstrap",
    "MySQL",
    "Git",
  ];
  return (
    <div className="skillsWrapper">
      <div className="title">
        <i className="fas fa-code title-icon"></i>
        <h2>SKILLS</h2>
      </div>
      <div className="flex">
        <hr className="resumeLine" />
      </div>
      <div className="skillWrapper">
        <ul className="skillsList">
          {skills.map((skill) => {
            return <SkillItem skill={skill} />;
          })}
        </ul>
      </div>
    </div>
  );
};

export default Skills;
