import React from "react";
import ProjectContainer from "../ProjectContainer";

function ToDoList({ opacity, order = "" }) {
  return (
    <>
      <ProjectContainer
        order={order}
        opacity={opacity}
        projectDescription="Simple CRUD app that utilises localStorage."
        title="To-do list"
        tech={["html", "sass", "javascript"]}
        rowSpan="row-span-2"
        repoLink={"https://github.com/atwycodes/js-todo-list"}
        liveLink={"https://atwycodes.github.io/js-todo-list/"}
      />
    </>
  );
}

export default ToDoList;
