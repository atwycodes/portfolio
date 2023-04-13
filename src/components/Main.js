import React from "react";
import RenderAboutMode from "./Body/Utils/RenderAboutMode";
import RenderAllMode from "./Body/Utils/RenderAllMode";
import RenderProjectsMode from "./Body/Utils/RenderProjectsMode";

function Main({ mode }) {
  if (mode === "All") return <RenderAllMode />;
  if (mode === "About") return <RenderAboutMode />;
  if (mode === "Projects") return <RenderProjectsMode />;
}

export default Main;
