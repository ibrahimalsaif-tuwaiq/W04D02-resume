import React from "react";
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
        <svg
          aria-hidden="true"
          focusable="false"
          data-prefix="fas"
          data-icon="building"
          class="title-icon svg-inline--fa fa-building fa-w-14"
          role="img"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 448 512"
        >
          <path
            fill="currentColor"
            d="M436 480h-20V24c0-13.255-10.745-24-24-24H56C42.745 0 32 10.745 32 24v456H12c-6.627 0-12 5.373-12 12v20h448v-20c0-6.627-5.373-12-12-12zM128 76c0-6.627 5.373-12 12-12h40c6.627 0 12 5.373 12 12v40c0 6.627-5.373 12-12 12h-40c-6.627 0-12-5.373-12-12V76zm0 96c0-6.627 5.373-12 12-12h40c6.627 0 12 5.373 12 12v40c0 6.627-5.373 12-12 12h-40c-6.627 0-12-5.373-12-12v-40zm52 148h-40c-6.627 0-12-5.373-12-12v-40c0-6.627 5.373-12 12-12h40c6.627 0 12 5.373 12 12v40c0 6.627-5.373 12-12 12zm76 160h-64v-84c0-6.627 5.373-12 12-12h40c6.627 0 12 5.373 12 12v84zm64-172c0 6.627-5.373 12-12 12h-40c-6.627 0-12-5.373-12-12v-40c0-6.627 5.373-12 12-12h40c6.627 0 12 5.373 12 12v40zm0-96c0 6.627-5.373 12-12 12h-40c-6.627 0-12-5.373-12-12v-40c0-6.627 5.373-12 12-12h40c6.627 0 12 5.373 12 12v40zm0-96c0 6.627-5.373 12-12 12h-40c-6.627 0-12-5.373-12-12V76c0-6.627 5.373-12 12-12h40c6.627 0 12 5.373 12 12v40z"
          ></path>
        </svg>
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
