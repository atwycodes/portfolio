import React from "react";
import RenderAboutMode from "./Body/Utils/RenderAboutMode";
import RenderAllMode from "./Body/Utils/RenderAllMode";
import RenderProjectsMode from "./Body/Utils/RenderProjectsMode";

function Main({ mode }) {
  // function Main() {
  //   const mode = "About";
  if (mode === "All") return <RenderAllMode />;
  if (mode === "About") return <RenderAboutMode />;
  if (mode === "Projects") return <RenderProjectsMode />;
  if (mode === "Media") return <RenderAllMode />;
}

export default Main;
