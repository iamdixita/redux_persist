// // This example demonstrates how to optimize an expensive recursive Fibonacci calculation using the useMemo hook in React.

import React, { useState, useMemo } from "react";

// Optimized Fibonacci function (Iterative)
const fibonacci = (n) => {
    let a = 0, b = 1;
    for (let i = 2; i <= n; i++) {
      [a, b] = [b, a + b];
    }
    return n === 0 ? 0 : b;
  };
  
  const FibonacciCalculator = () => {
    const [num, setNum] = useState(10);
  
    // Memoized Fibonacci calculation to avoid redundant recomputation
    const fibValue = useMemo(() => {
      console.log("Computing Fibonacci for:", num);
      return fibonacci(num);
    }, [num]);
  
    return (
      <div style={{backgroundColor:"lightgray", padding:"2.2rem"}}>
        <h1>4. Fibonacci Calculator</h1>
        <h2>Fibonacci of {num}: {fibValue}</h2>
        <button style={{backgroundColor:"#D32D41"}} onClick={() => setNum(num + 1)}>Increase Number</button>
      </div>
    );
  };
  
  export default FibonacciCalculator;

  
