import React from "react";
import spotifySvg from "./spotify-icon.svg";

function Spotify({ opacity }) {
  return (
    <div className={`card-container flex flex-col gap-1 col-span-2 ${opacity}`}>
      <img className="w-11" alt="spotify icon" src={spotifySvg} />
      <div className="spotify flex flex-row gap-2">
        <div className="flex flex-row gap-0.5 items-center">
          <div className="font-bold spotify-bar1"></div>
          <div className="font-bold spotify-bar2"></div>
          <div className="font-bold spotify-bar3"></div>
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
