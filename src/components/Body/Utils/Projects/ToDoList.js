import React from "react";
import ProjectContainer from "../ProjectContainer";

function ToDoList({ opacity }) {
  return (
    <>
      <ProjectContainer
        opacity={opacity}
        title="To-do list"
        tech={["html", "sass", "javascript"]}
        rowSpan="row-span-1"
        repoLink={"https://github.com/atwycodes/js-todo-list"}
        liveLink={"https://atwycodes.github.io/js-todo-list/"}
      />
    </>
  );
}

export default ToDoList;
