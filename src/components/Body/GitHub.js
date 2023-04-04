import React from "react";
import gitHubSvg from "./github-icon.svg";

function GitHub({ opacity = "opacity-100" }) {
  return (
    <a
      rel="noreferrer"
      target="_blank"
      href="https://github.com/atwycodes"
      className={`card-container github col-span-1 row-span-1 ${opacity}`}
    >
      <img alt="github icon" src={gitHubSvg} />
    </a>
  );
}

export default GitHub;
