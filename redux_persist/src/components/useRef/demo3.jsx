// Definition: useRef can count how many times a component renders.

import React, { useState, useRef } from "react";

const RenderCounter = () => {
  const [count, setCount] = useState(0);
  const renderCount = useRef(1); // Track the number of renders

  renderCount.current += 1; // Increment render count

  return (
    <div style={{backgroundColor:"lightgray", padding:"2.2rem"}}>
    <h1>3. Tracking Component Renders</h1>
      <h2>Render Count: {renderCount.current}</h2>
      <button style={{backgroundColor:"#e38690"}} onClick={() => setCount(count + 1)}>Re-render</button>
    </div>
  );
};

export default RenderCounter;

// Explanation:
//  renderCount.current updates without causing a re-render.
//  Used for debugging performance issues.
