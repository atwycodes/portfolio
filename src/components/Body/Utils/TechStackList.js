import React from "react";

function TechStackList({ techArray }) {
  return (
    <div className="flex justify-center gap-1 py-2">
      {techArray.map((techItem) => {
        return techItem === "html" ? (
          <img
            key={techItem}
            className="tech-icons"
            alt="html icon"
            src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-plain-wordmark.svg"
          />
        ) : techItem === "css" ? (
          <img
            key={techItem}
            className="tech-icons"
            alt="css icon"
            src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-plain-wordmark.svg"
          />
        ) : techItem === "javascript" ? (
          <img
            key={techItem}
            className="tech-icons"
            alt="javascript icon"
            src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg"
          />
        ) : techItem === "react" ? (
          <img
            key={techItem}
            className="tech-icons"
            alt="react icon"
            src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg"
          />
        ) : techItem === "tailwind" ? (
          <img
            key={techItem}
            className="tech-icons"
            alt="tailwind-css icon"
            src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-plain.svg"
          />
        ) : techItem === "sass" ? (
          <img
            key={techItem}
            className="tech-icons"
            alt="sass icon"
            src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/sass/sass-original.svg"
          />
        ) : null;
      })}
    </div>
  );
}

export default TechStackList;

// if (techItem === "html") {
//   return (
//     <img
//       alt="html icon"
//       src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original-wordmark.svg"
//     />
//   );
// } else if (techItem === "css") {
//   return (
//     <img
//       alt="css icon"
//       src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original-wordmark.svg"
//     />
//   );
// }
