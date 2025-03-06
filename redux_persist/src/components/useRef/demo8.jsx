// This example demonstrates how to control an HTML <video> element using the useRef hook without re-rendering the component.

import React, { useRef } from "react";

const VideoControl = () => {
  const videoRef = useRef(null); // Reference to the video element

  // Play the video
  const handlePlay = () => {
    if (videoRef.current) videoRef.current.play();
  };

  // Pause the video
  const handlePause = () => {
    if (videoRef.current) videoRef.current.pause();
  };

  // Restart the video (Set time to 0 and play)
  const handleRestart = () => {
    if (videoRef.current) {
      videoRef.current.currentTime = 0;
      videoRef.current.play();
    }
  };

  return (
    <div style={{backgroundColor:"lightgray", padding:"2.2rem"}}>
    <h1>8. Control a Video Player</h1>
      {/* Video element controlled by ref */}
      <video ref={videoRef} width="300" src="https://www.w3schools.com/html/mov_bbb.mp4" controls />

      {/* Video control buttons */}
      <div>
        <button style={{backgroundColor:"green"}} onClick={handlePlay}>▶ Play</button>
        <button style={{backgroundColor:"red"}} onClick={handlePause}>⏸ Pause</button>
        <button style={{backgroundColor:"orange"}} onClick={handleRestart}>🔄 Restart</button>
      </div>
    </div>
  );
};

export default VideoControl;
