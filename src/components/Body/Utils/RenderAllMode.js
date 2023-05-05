import React from "react";
import AboutMe from "../AboutMe";
import GitHub from "../GitHub";
import LinkedIn from "../LinkedIn";
import Portfolio from "./Projects/Portfolio";
import CVGenerator from "./Projects/CVGenerator";
import ToDoList from "./Projects/ToDoList";
import MyTechStack from "../MyTechStack";
import KDLandingPage from "./Projects/KDLandingPage";

function RenderAllMode() {
  return (
    <div className="main-container grid place-content-center gap-4">
      <AboutMe order="order-1" />
      <LinkedIn order="order-3 md:order-2" />
      <Portfolio order="order-4 md:order-3" />
      <CVGenerator order="order-5 md:order-4" />
      <MyTechStack order="order-2 md:order-5" />
      <GitHub order="order-6" />
      <KDLandingPage order="order-7" />
      <ToDoList order="order-8" />
    </div>
  );
}

export default RenderAllMode;
