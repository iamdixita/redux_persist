// This effect runs after every re-render of the component. It's useful for debugging or logging updates.

import React, { useState, useEffect } from "react";

function EveryRender() {
  const [count, setCount] = useState(0);

  // useEffect runs after every render
  useEffect(() => {
    console.log("Component re-rendered! Count:", count);
  });

  return (
    <div style={{backgroundColor:"lightgray", padding:"2.2rem"}}>
    <h1>1. Run useEffect on Every Render</h1>
      <h2>Count: {count}</h2>
      <button style={{backgroundColor:"#e38690"}} onClick={() => setCount(count + 1)}>Increase</button>
    </div>
  );
}

export default EveryRender;
