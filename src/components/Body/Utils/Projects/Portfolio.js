import React from "react";
import ProjectContainer from "../ProjectContainer";

function Portfolio({ opacity, order = "" }) {
  return (
    <>
      <ProjectContainer
        order={order}
        opacity={opacity}
        projectDescription="This portfolio - made from scratch to showcase my works."
        title="This Portfolio!"
        tech={["html", "tailwind", "react"]}
        rowSpan="row-span-2"
        repoLink={"https://github.com/atwycodes/portfolio"}
        liveLink={"https://atwycodes.github.io/portfolio/"}
      />
    </>
  );
}

export default Portfolio;
