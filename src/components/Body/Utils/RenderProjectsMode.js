import React from "react";
import AboutMe from "../AboutMe";
import GitHub from "../GitHub";
import LinkedIn from "../LinkedIn";
import Portfolio from "./Projects/Portfolio";
import CVGenerator from "./Projects/CVGenerator";
import ToDoList from "./Projects/ToDoList";
import MyTechStack from "../MyTechStack";
import KDLandingPage from "./Projects/KDLandingPage";

function RenderProjectsMode() {
  return (
    <div className="main-container grid place-content-center gap-4">
      <GitHub opacity="opacity-100" order="order-5 md:order-4" />
      <ToDoList order="order-4 md:order-3" />
      <Portfolio order="order-1" />
      <CVGenerator order="order-2" />
      <KDLandingPage order="order-3" />
      <MyTechStack opacity="opacity-30" order="order-7" />
      <AboutMe opacity="opacity-30" order="order-8" />
      <LinkedIn opacity="opacity-30" order="order-6" />
    </div>
  );
}

export default RenderProjectsMode;
