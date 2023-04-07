import React from "react";
import spotifySvg from "./spotify-icon.svg";

function Spotify({ opacity }) {
  return (
    <div className={`card-container col-span-2 flex flex-col gap-1 ${opacity}`}>
      <img className="w-11" alt="spotify icon" src={spotifySvg} />
      <div className="spotify flex flex-row gap-2">
        <div className="flex flex-row items-center gap-0.5">
          <div className="spotify-bar1 font-bold"></div>
          <div className="spotify-bar2 font-bold"></div>
          <div className="spotify-bar3 font-bold"></div>
        </div>
        <div className="text-base">Last played</div>
      </div>
      <a href="-" className="text-xl font-bold">
        Watch The World Burn
      </a>
      <div className="">Falling in Reverse</div>
    </div>
  );
}

export default Spotify;
