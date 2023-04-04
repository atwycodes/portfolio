import React, { useState } from "react";
import Header from "./components/Header";
import Main from "./components/Main";

function App() {
  const [mode, setMode] = useState("All");

  const setCurrentMode = (type) => {
    setMode(type);
    console.log(mode);
  };

  return (
    <div className="flex flex-col">
      <Header filterHandler={setCurrentMode} />
      <Main mode={mode} />
    </div>
  );
}

export default App;
