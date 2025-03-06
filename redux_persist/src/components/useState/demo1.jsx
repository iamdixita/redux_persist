// Definition: useState manages a simple counter.

import React, { useState } from "react";

function Counter() {
  // Declare a state variable `count` with initial value 0
  const [count, setCount] = useState(0);

  return (
    <div style={{backgroundColor:"lightgray", padding:"2.2rem"}}>
      <h1>1. Manages a simple counter </h1>
      <h2>Count: {count}</h2>
      {/* When the button is clicked, increase the count by 1 */}
      <button style={{backgroundColor:"#e38690"}} onClick={() => setCount(count + 1)}>Increase</button>
    </div>
  );
}

export default Counter;

