import React from "react";
import ProjectContainer from "../ProjectContainer";

function Portfolio({ opacity }) {
  return (
    <>
      <ProjectContainer
        opacity={opacity}
        projectDescription="I wanted to create a portfolio from scratch to showcase my works and my current skillset in a concise format."
        title="This Portfolio!"
        tech={["html", "tailwind", "react"]}
        rowSpan="row-span-2"
        repoLink={"https://github.com/atwycodes/portfolio"}
        liveLink={"https://github.com/atwycodes/portfolio"}
      />
    </>
  );
}

export default Portfolio;
