import React from "react";
import gitHubSvg from "./github-icon.svg";

function MyTechStack({ opacity = "opacity-100", order = "" }) {
  return (
    <div
      className={`card-container ${opacity} col-span-2 flex flex-col text-lg font-bold ${order}`}
    >
      <div className="pb-4 text-center">Current Tech Stack</div>
      <div className="grid flex-1 grid-cols-4">
        <img
          className="h-8 w-8 justify-self-center"
          alt="html icon"
          src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-plain-wordmark.svg"
        />
        <img
          className="h-8 w-8 justify-self-center"
          alt="css icon"
          src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-plain-wordmark.svg"
        />
        <img
          className="h-8 w-8 justify-self-center"
          alt="javascript icon"
          src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg"
        />
        <img
          className="h-8 w-8 justify-self-center"
          alt="git icon"
          src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-plain-wordmark.svg"
        />
        <img
          className="h-8 w-8 justify-self-center"
          alt="reactjs icon"
          src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg"
        />
        <img
          className="h-8 w-8 justify-self-center"
          alt="tailwind-css icon"
          src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-plain.svg"
        />
        <img
          className="h-8 w-8 justify-self-center"
          alt="sass icon icon"
          src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/sass/sass-original.svg"
        />
        <img
          className="h-8 w-8 justify-self-center"
          alt="github icon"
          src={gitHubSvg}
        />
      </div>
    </div>
  );
}

export default MyTechStack;
