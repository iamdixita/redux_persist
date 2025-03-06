// Definition: useRef can store the previous state value between renders.

import React, { useState, useRef, useEffect } from "react";

const PreviousStateExample = () => {
    const [inputValue, setInputValue] = useState("");
    const previousInputValue = useRef("");
  
    useEffect(() => {
      previousInputValue.current = inputValue;
    }, [inputValue]);
  
    return (
      <>
      <div style={{backgroundColor:"lightgray", padding:"2.2rem"}}>
      <h1>2. Storing Previous State Value</h1>
        <input
          type="text"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
        />
        <h2>Current Value: {inputValue}</h2>
        <h2>Previous Value: {previousInputValue.current}</h2>
      </div>
      </>
    );
};

export default PreviousStateExample;

// Explanation:
// prevCountRef.current holds the previous state value.
// Unlike useState, updating useRef does not trigger a re-render.

