import React from "react";
import ProjectContainer from "../ProjectContainer";

function CVGenerator({ opacity }) {
  return (
    <>
      <ProjectContainer
        opacity={opacity}
        projectDescription="My first project utilising ReactJS and Tailwind CSS - feel free to try it out!"
        title="CV Generator"
        tech={["html", "tailwind", "react"]}
        rowSpan="row-span-2"
        repoLink={"https://github.com/atwycodes/cv-generator"}
        liveLink={"https://atwycodes.github.io/cv-generator/"}
      />
    </>
  );
}

export default CVGenerator;
