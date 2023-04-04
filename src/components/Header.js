import React from "react";
import Contact from "./Navigation/Contact";
import Logo from "./Navigation/Logo";
import Navbar from "./Navigation/Navbar";

function Header({ filterHandler }) {
  return (
    <div className="flex flex-wrap sm:justify-between justify-center items-center box-border h-24 px-6">
      <Logo />
      <Navbar filterHandler={filterHandler} />
      <Contact />
    </div>
  );
}

export default Header;
