import React from "react";
import AboutMe from "../AboutMe";
import GitHub from "../GitHub";
import LinkedIn from "../LinkedIn";
import Spotify from "../Spotify";
import Portfolio from "./Projects/Portfolio";
import CVGenerator from "./Projects/CVGenerator";
import ToDoList from "./Projects/ToDoList";
import MyTechStack from "../MyTechStack";

function RenderAllMode() {
  return (
    <div className="main-container grid place-content-center gap-4">
      <AboutMe />
      <LinkedIn />
      <Portfolio />
      <CVGenerator />
      <MyTechStack />
      {/* <Spotify /> */}
      <GitHub />
      <ToDoList />
    </div>
  );
}

export default RenderAllMode;
