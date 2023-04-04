import React from "react";
import AboutMe from "../AboutMe";
import GitHub from "../GitHub";
import LinkedIn from "../LinkedIn";
import Spotify from "../Spotify";
import Portfolio from "./Projects/Portfolio";
import CVGenerator from "./Projects/CVGenerator";
import ToDoList from "./Projects/ToDoList";

function RenderAboutMode() {
  return (
    <div className="main-container gap-4 grid place-content-center">
      <AboutMe opacity="opacity-100" />
      <LinkedIn opacity="opacity-100" />
      <GitHub opacity="opacity-100" />
      <Portfolio opacity="opacity-30" />
      <CVGenerator opacity="opacity-30" />
      <Spotify opacity="opacity-30" />
      <ToDoList opacity="opacity-30" />
    </div>
  );
}

export default RenderAboutMode;
