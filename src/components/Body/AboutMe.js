import React from "react";

function AboutMe({ opacity = "opacity-100" }) {
  return (
    <div className={`card-container col-span-2 row-span-2 ${opacity}`}>
      <p className="pb-2 text-3xl font-bold">About Me 👋🏻</p>
      <p className="text-lg">
        I'm <span className="text-2xl font-bold">{`<Andrew/>`}</span>, a
        self-taught developer from Petaling Jaya, Malaysia. I am interested in
        working with web technologies. My goal is to work at a company where I
        can deliver business value while growing my skillset as a developer.
      </p>
    </div>
  );
}

export default AboutMe;
