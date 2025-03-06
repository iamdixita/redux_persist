// This example prevents unnecessary recalculations when a value is unchanged.

// Problem: Without useMemo, an expensive function runs on every render.
// Solution: useMemo caches the result and recalculates only when dependencies change.

import React, { useState, useMemo } from "react";

// Function simulating an expensive computation
const expensiveCalculation = (num) => {
  console.log("🔄 Computing..."); 
  for (let i = 0; i < 1000000000; i++) {} // Heavy computation simulation
  return num * 2; // Returning a computed value
};

const ExpensiveComponent = () => {
  const [count, setCount] = useState(0);
  const [number, setNumber] = useState(5);

  // Memoize the computed value, so it only updates when `number` changes
  const computedValue = useMemo(() => expensiveCalculation(number), [number]);

  return (
    <div style={{backgroundColor:"lightgray", padding:"2.2rem"}}>
    <h1>1. Expensive Calculation (Avoids Unnecessary Re-Runs)</h1>
      <h2>Count: {count}</h2>
      <button style={{backgroundColor:"red"}} onClick={() => setCount(count + 1)}>Increase Count</button>

      <h2>Computed Value: {computedValue}</h2>
      <button style={{backgroundColor:"green"}} onClick={() => setNumber(number + 1)}>Change Number</button>
    </div>
  );
};

export default ExpensiveComponent;
