import React from "react";
import Contact from "./Navigation/Contact";
import Logo from "./Navigation/Logo";
import Navbar from "./Navigation/Navbar";

function Header({ filterHandler }) {
  return (
    <div className="box-border flex h-24 flex-wrap items-center justify-center px-6 md:justify-between">
      <Logo />
      <Navbar filterHandler={filterHandler} />
      <Contact />
    </div>
  );
}

export default Header;
