import React from "react";
import "./style.css";

const WorkItem = ({ work }) => {
  return (
    <div className="workItem">
      <p className="job">{work.jobTitle}</p>
      <p className="date">{work.time}</p>
      <p className="jobDesc">{work.desc}</p>
    </div>
  );
};

export default WorkItem;
