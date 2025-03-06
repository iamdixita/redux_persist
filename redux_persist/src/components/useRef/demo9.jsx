// This example demonstrates how to dynamically measure the width and height of a <div> using useRef and useEffect.

import React, { useRef, useState, useEffect } from "react";

const MeasureDiv = () => {
  const divRef = useRef(null); // Reference to the div element
  const [size, setSize] = useState({ width: 0, height: 0 });

  useEffect(() => {
    const updateSize = () => {
      if (divRef.current) {
        setSize({
          width: divRef.current.offsetWidth,
          height: divRef.current.offsetHeight,
        });
      }
    };

    // Measure the div when the component mounts
    updateSize();

    // Listen for window resize events
    window.addEventListener("resize", updateSize);

    // Cleanup function to remove event listener
    return () => window.removeEventListener("resize", updateSize);
  }, []); // Runs once on mount

  return (
    <div style={{backgroundColor:"lightgray", padding:"2.2rem"}}>
    <div ref={divRef} style={{ width: "50%", height: "200px", background: "darkblue", padding: "20px",alignContent:"center",marginLeft:"22rem", color:"white" }}>
    <h1>9. Measure Element Size (Dynamic Resizing)</h1>
      <p>📏 Width: {size.width}px</p>
      <p>📐 Height: {size.height}px</p>
    </div>
    </div>
  );
};

export default MeasureDiv;
