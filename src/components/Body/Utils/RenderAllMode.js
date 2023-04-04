import React from "react";
import AboutMe from "../AboutMe";
import GitHub from "../GitHub";
import LinkedIn from "../LinkedIn";
import Spotify from "../Spotify";
import Portfolio from "./Projects/Portfolio";
import CVGenerator from "./Projects/CVGenerator";
import ToDoList from "./Projects/ToDoList";

function RenderAllMode() {
  return (
    <div className="main-container gap-4 grid place-content-center">
      <AboutMe />
      <LinkedIn />
      <Portfolio />
      <CVGenerator />
      <Spotify />
      <GitHub />
      <ToDoList />
    </div>
  );
}

export default RenderAllMode;
