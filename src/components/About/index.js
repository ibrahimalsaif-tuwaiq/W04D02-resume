import React from "react";
import "./style.css";

const About = () => {
  const about = `I am a computer science fresh graduate, specializes in BackEnd development 
  and has experience in developing web applications using the python framework Flask, seeking to
  leverage my experience as a developer.`;

  return (
    <div className="aboutWrapper">
      <div className="title">
        <svg
          aria-hidden="true"
          focusable="false"
          data-prefix="fas"
          data-icon="user-alt"
          class="title-icon svg-inline--fa fa-user-alt fa-w-16"
          role="img"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 512 512"
        >
          <path
            fill="currentColor"
            d="M256 288c79.5 0 144-64.5 144-144S335.5 0 256 0 112 64.5 112 144s64.5 144 144 144zm128 32h-55.1c-22.2 10.2-46.9 16-72.9 16s-50.6-5.8-72.9-16H128C57.3 320 0 377.3 0 448v16c0 26.5 21.5 48 48 48h416c26.5 0 48-21.5 48-48v-16c0-70.7-57.3-128-128-128z"
          ></path>
        </svg>
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
