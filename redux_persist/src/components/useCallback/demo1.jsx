// This example Avoids creating a new function instance on every render.

// Problem: Without useCallback, handleClick is re-created on every render.
// Solution: useCallback ensures that the function reference stays the same unless needed.

import React, { useState, useCallback } from "react";

const ClickCounter = () => {
  const [count, setCount] = useState(0);

  // Memoized function prevents unnecessary re-creation
  const handleClick = useCallback(() => {
    setCount((prev) => prev + 1);
  }, []); // No dependencies, so function is created only once

  return (
    <div style={{backgroundColor:"lightgray", padding:"2.2rem"}}>
    <h1>1. Preventing Function Recreation in an Event Handler</h1>
      <h2>Count: {count}</h2>
      <button style={{backgroundColor:"#e38690"}} onClick={handleClick}>Click Me</button>
    </div>
  );
};

export default ClickCounter;
