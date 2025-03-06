// This example Prevents expensive JSX from re-rendering unless required.

// Problem: JSX elements inside functions are recalculated on every render.
// Solution: useMemo prevents unnecessary re-renders of heavy JSX structures.

import React, { useState, useMemo } from "react";

const ConditionalRendering = () => {
  const [count, setCount] = useState(0);
  const [show, setShow] = useState(true);

  // Memoize JSX to avoid re-rendering unless `show` changes
  const memoizedContent = useMemo(() => {
    console.log("🖥️ Recomputing JSX...");
    return <h2>Component Content</h2>;
  }, [show]);

  return (
    <div style={{backgroundColor:"lightgray", padding:"2.2rem"}}>
    <h1>7. Memoizing Conditional JSX Rendering</h1>
      <button style={{backgroundColor:"red"}} onClick={() => setCount(count + 1)}>Increase Count {count}</button>
      <button style={{backgroundColor:"green"}} onClick={() => setShow(!show)}>Toggle Content</button>

      {/* Memoized JSX content */}
      {show && memoizedContent}
    </div>
  );
};

export default ConditionalRendering;
