import React from "react";

function AboutMe({ opacity = "opacity-100", order = "" }) {
  return (
    <div
      className={`card-container col-span-2 row-span-2 ${opacity} overflow-auto ${order}`}
    >
      <p className="pb-2 text-2xl font-bold">About Me 👋🏻</p>
      <p className=" text-lg">
        I'm <span className="text-xl font-bold">{`<Andrew/>`}</span>, a
        self-taught developer from Petaling Jaya, Malaysia. I love working with
        web technologies. My goal is to work at a company where I can deliver
        business value while developing my skillset as a developer.
      </p>
    </div>
  );
}

export default AboutMe;
