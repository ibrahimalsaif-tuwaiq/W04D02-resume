import React from "react";
import { FaCode } from "react-icons/fa";
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
        <FaCode className="title-icon" />
        <h2>SKILLS</h2>
      </div>
      <div className="flex">
        <hr className="resumeLine" />
      </div>
      <div className="skillWrapper">
        <ul className="skillsList">
          {skills.map((skill,index) => {
            return <SkillItem skill={skill} key={index}/>;
          })}
        </ul>
      </div>
    </div>
  );
};

export default Skills;
