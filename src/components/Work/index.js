import React from "react";
import { FaBuilding } from "react-icons/fa";
import "./style.css";
import WorkItem from "../WorkItem";

const Work = () => {
  const work = [
    {
      jobTitle: "Intern, MCIT",
      time: "06/2020 - 09/2020",
      desc: "Educational training in the Website Development track.",
    },
    {
      jobTitle: "Intern, NANA",
      time: "07/2021 - 10/2021",
      desc: "Backend Software Engineer responsible for a digital goods microservice and deal with 3rd party APIs.",
    },
  ];
  return (
    <div className="workWrapper">
      <div className="title">
        <FaBuilding className="title-icon" />
        <h2>WORK EXPERIENCE</h2>
      </div>
      <div className="flex">
        <hr className="resumeLine" />
      </div>
      {work.map((work) => {
        return <WorkItem work={work} />;
      })}
    </div>
  );
};

export default Work;
