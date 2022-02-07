import React from "react";
import './AudioPlayer.css';

export const AudioPlayer = ({source, trackName}) => {
  return (
      <>
        <div className="audio-player flex">
          <div className="audio-title flex"><p>{trackName}</p></div>
          <audio src={source} controls></audio>
          </div> 
      </>
    );
}; 