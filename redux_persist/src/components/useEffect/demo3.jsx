// This effect runs only when a specific state (count) changes. It's useful for reacting to user input, calculations, or updates. 

import React, { useState, useEffect } from "react";

function EffectWithState() {
  const [count, setCount] = useState(0);

  // Runs when `count` state changes
  useEffect(() => {
    console.log("Count updated:", count);
  }, [count]);

  return (
    <div style={{backgroundColor:"lightgray", padding:"2.2rem"}}>
    <h1>3. Run useEffect When a State Changes (componentDidUpdate)</h1>
      <h2>Count: {count}</h2>
      <button style={{backgroundColor:"#e38690"}} onClick={() => setCount(count + 1)}>Increase</button>
    </div>
  );
}

export default EffectWithState;
