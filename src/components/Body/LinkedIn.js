import React from "react";

function LinkedIn({ opacity = "opacity-100", order = "" }) {
  return (
    <a
      rel="noreferrer"
      target="_blank"
      href="https://www.linkedin.com/in/atwy/"
      className={`card-container linkedin col-span-1 row-span-1 ${opacity} ${order}`}
    >
      <img
        alt="linkedin icon"
        src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linkedin/linkedin-original.svg"
      />
    </a>
  );
}

export default LinkedIn;
