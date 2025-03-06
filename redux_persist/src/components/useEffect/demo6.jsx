// This effect adds and removes an event listener to track window resizing.

import React, { useState, useEffect } from "react";

function WindowResize() {
  const [width, setWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => setWidth(window.innerWidth);

    window.addEventListener("resize", handleResize);

    // Cleanup function: Runs when the component unmounts
    return () => {
      console.log("Cleanup: Removing event listener");
      window.removeEventListener("resize", handleResize);
    };
  }, []); // Empty dependency array ensures `useEffect` runs only once on mount

  return(
    <>
    <div style={{backgroundColor:"lightgray", padding:"2.2rem"}}>
      <h1>6. Cleanup Function (Unsubscribe Events)</h1>
      <h2>Window Width: {width}px</h2>
    </div>
    </>
  ); 
}

export default WindowResize;
