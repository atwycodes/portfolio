import React from "react";
import TechStackList from "./TechStackList";

function ProjectContainer({
  title,
  tech,
  repoLink,
  liveLink,
  rowSpan,
  opacity,
  projectDescription = "",
}) {
  return (
    <div
      className={`card-container ${rowSpan} ${opacity} flex flex-col justify-between`}
    >
      {/* description of projects */}
      <p className="text-center text-xl font-bold">{title}</p>
      <div className="flex flex-1 flex-col items-center">
        <TechStackList techArray={tech} />
        <p className="hidden sm:block">{projectDescription}</p>
      </div>

      {/* links to projects */}
      <div className="grid grid-rows-2 gap-2">
        <a
          rel="noreferrer"
          target="_blank"
          className="cursor-pointer rounded-full border border-slate-500 bg-slate-800 text-center font-bold  transition-all duration-300 hover:bg-slate-500"
          href={repoLink}
        >
          Code
        </a>
        <a
          rel="noreferrer"
          target="_blank"
          className="cursor-pointer rounded-full border border-slate-500 bg-slate-800 text-center font-bold  transition-all duration-300 hover:bg-slate-500"
          href={liveLink}
        >
          Live Project
        </a>
      </div>
    </div>
  );
}

export default ProjectContainer;
