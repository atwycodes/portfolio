import React from "react";
import AboutMe from "../AboutMe";
import GitHub from "../GitHub";
import LinkedIn from "../LinkedIn";
import Spotify from "../Spotify";
import Portfolio from "./Projects/Portfolio";
import CVGenerator from "./Projects/CVGenerator";
import ToDoList from "./Projects/ToDoList";

function RenderProjectsMode() {
  return (
    <div className="main-container gap-4 grid place-content-center">
      <GitHub opacity="opacity-100" />
      <ToDoList />
      <Portfolio />
      <CVGenerator />
      <Spotify opacity="opacity-100" />
      <AboutMe opacity="opacity-30" />
      <LinkedIn opacity="opacity-30" />
    </div>
  );
}

export default RenderProjectsMode;
