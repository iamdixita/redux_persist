// Prevents adding/removing multiple event listeners unnecessarily.

//Problem: Creating a new event listener on every render wastes resources.
// Solution: useCallback ensures the event listener remains the same.

import React, { useEffect, useCallback } from "react";

const KeyPressListener = () => {
  // Memoized event handler
  const handleKeyPress = useCallback((event) => {
    console.log(`Key Pressed: ${event.key}`);
  }, []);

  useEffect(() => {
    window.addEventListener("keydown", handleKeyPress);

    return () => {
      window.removeEventListener("keydown", handleKeyPress);
    };
  }, [handleKeyPress]);

  return (
    <>
    <div style={{backgroundColor:"lightgray", padding:"2.2rem"}}>
    <h1>2. Optimizing Event Listeners</h1>
    <h2>Press any key and check the console</h2>
    </div>
    </>
  );
};

export default KeyPressListener;
