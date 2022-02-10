import React from "react";
import './AudioPlayer.css';

export const AudioPlayer = ({source, trackName}) => {
  return (
      <>
        <div className="audio-player">
          <div className="audio-title">
            <p>{trackName}</p>
            <audio src={source} controls></audio>
          </div>
          
          </div> 
      </>
    );
}; 