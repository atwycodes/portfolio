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
      <p className="font-bold text-xl text-center">{title}</p>
      <div className="flex-1 flex flex-col items-center">
        <TechStackList techArray={tech} />
        <p className="hidden sm:block">{projectDescription}</p>
      </div>

      {/* links to projects */}
      <div className="grid grid-rows-2 gap-2">
        <a
          rel="noreferrer"
          target="_blank"
          className="transition-all font-bold duration-300 border bg-slate-800 hover:bg-slate-500 cursor-pointer  border-slate-500 rounded-full text-center"
          href={repoLink}
        >
          Code
        </a>
        <a
          rel="noreferrer"
          target="_blank"
          className="transition-all font-bold duration-300 border bg-slate-800 hover:bg-slate-500 cursor-pointer  border-slate-500 rounded-full text-center"
          href={liveLink}
        >
          Live Project
        </a>
      </div>
    </div>
  );
}

export default ProjectContainer;
