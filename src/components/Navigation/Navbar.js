import React from "react";

const handleActiveClasses = (event) => {
  const nodes = Array.from(document.querySelectorAll(".navbar-icons-active"));
  nodes.map((navIcon) => {
    navIcon.classList.add("navbar-icons");
    navIcon.classList.remove("navbar-icons-active");
  });
  event.target.classList.add("navbar-icons-active");
  event.target.classList.remove("navbar-icons");
};

function Navbar({ filterHandler }) {
  const clickHandler = (event, type) => {
    handleActiveClasses(event);
    filterHandler(type);
  };

  return (
    <div className="grid grid-flow-col gap-4 rounded-full border-2 border-slate-400 bg-slate-900 p-1 text-sm sm:text-base">
      <button
        onClick={(event) => clickHandler(event, "All")}
        className="navbar-icons navbar-icons-active"
      >
        All
      </button>
      <button
        onClick={(event) => clickHandler(event, "About")}
        className="navbar-icons"
      >
        About
      </button>
      <button
        onClick={(event) => clickHandler(event, "Projects")}
        className="navbar-icons"
      >
        Projects
      </button>
      <button
        onClick={(event) => clickHandler(event, "Media")}
        className="navbar-icons"
      >
        Media
      </button>
    </div>
  );
}

export default Navbar;
