// Definition: useRef helps directly access and modify DOM elements without re-rendering.

import React, { useRef } from "react";

const FocusInput = () => {
  const inputRef = useRef(); // Create a reference for the input field

  const focusInput = () => {
    inputRef.current.focus(); // Directly focus on the input field
  };

  return (
    <div style={{backgroundColor:"lightgray", padding:"2.2rem"}}>
    <h1>1. Accessing DOM Elements (Focus on Input Field)</h1>
      <input ref={inputRef} type="text" placeholder="Enter something..." />
      <button style={{backgroundColor:"#e38690"}} onClick={focusInput}>Focus Input</button>
    </div>
  );
};

export default FocusInput;

// Explanation:
// inputRef.current.focus() sets focus to the input field.
// This doesn’t cause re-renders, improving performance.