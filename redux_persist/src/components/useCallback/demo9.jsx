// Optimize a component that performs expensive calculations while allowing 
// a counter to update independently without triggering unnecessary recalculations.

import React, { useState, useMemo, useCallback } from "react";

// Memoized HeavyComponent to prevent unnecessary re-renders
const HeavyComponent = React.memo(({ value }) => {
  console.log("Heavy computation running..."); // Logs when the component re-renders
  return <h2>Heavy Computed Value: {value}</h2>;

  
});

const Counter = () => {
  // State for count (used in button click)
  const [count, setCount] = useState(0);

  // State for number (used in heavy computation)
  const [number, setNumber] = useState(5);

  // Memoized expensive computation (only runs when `number` changes)
  const computedValue = useMemo(() => {
    console.log("Performing heavy computation...");
    return number * 2; // Example of an expensive operation
  }, [number]);

  // Memoized increment function (prevents re-creation on every render)
  const increment = useCallback(() => {
    setCount((prev) => prev + 1);
  }, []); // No dependencies → function reference remains the same

  return (
    <div style={{backgroundColor:"lightgray", padding:"2.2rem"}}>
    <h1>9. Optimized Counter with Heavy Calculation</h1>
      {/* Button to increment count (does not trigger HeavyComponent re-render) */}
      <button style={{backgroundColor:"#e38690"}} onClick={increment}>Count: {count}</button>

      {/* Button to change the number (triggers computation and re-renders HeavyComponent) */}
      <button style={{backgroundColor:"#e38690"}} onClick={() => setNumber(number + 1)}>Change Number</button>

      {/* Renders HeavyComponent with the computed value */}
      <HeavyComponent value={computedValue} />
    </div>
  );
};

export default Counter;
