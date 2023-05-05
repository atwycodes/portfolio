import React from "react";
import ProjectContainer from "../ProjectContainer";

function KDLandingPage({ opacity, order = "" }) {
  return (
    <>
      <ProjectContainer
        order={order}
        opacity={opacity}
        projectDescription="Take home task for a Frontend Developer role at an agency, completed in 2 days"
        title="Landing Page"
        tech={["html", "tailwind", "javascript"]}
        rowSpan="row-span-2"
        repoLink={"https://github.com/atwycodes/kd-take-home-task"}
        liveLink={"https://main--whimsical-youtiao-cd4cbc.netlify.app/"}
      />
    </>
  );
}

export default KDLandingPage;
