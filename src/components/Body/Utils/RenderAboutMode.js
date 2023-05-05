import React from "react";
import AboutMe from "../AboutMe";
import GitHub from "../GitHub";
import LinkedIn from "../LinkedIn";
import Portfolio from "./Projects/Portfolio";
import CVGenerator from "./Projects/CVGenerator";
import ToDoList from "./Projects/ToDoList";
import MyTechStack from "../MyTechStack";
import KDLandingPage from "./Projects/KDLandingPage";

function RenderAboutMode() {
  return (
    <div className="main-container grid place-content-center gap-4">
      <AboutMe opacity="opacity-100" order="order-1" />
      <LinkedIn opacity="opacity-100" order="order-3 md:order-2" />
      <GitHub opacity="opacity-100" order="order-4 md:order-3" />
      <MyTechStack opacity="opacity-100" order="order-2 md:order-4" />
      <Portfolio opacity="opacity-30" order="order-5" />
      <CVGenerator opacity="opacity-30" order="order-6" />
      <KDLandingPage opacity="opacity-30" order="order-7" />
      <ToDoList opacity="opacity-30" order="order-8" />
    </div>
  );
}

export default RenderAboutMode;
