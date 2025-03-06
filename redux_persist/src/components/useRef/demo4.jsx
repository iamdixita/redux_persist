// Definition: useRef stores and clears timers without re-rendering the component.

import React, { useRef } from "react";

const TimerExample = () => {
  // useRef stores the timer ID without causing re-renders
  const timerRef = useRef(null);

  // Function to start the timer
  const startTimer = () => {
    timerRef.current = setTimeout(() => {
      alert("Timer completed!"); // Displays alert after 2 seconds
    }, 2000);
  };

  // Function to stop the timer before completion
  const stopTimer = () => {
    clearTimeout(timerRef.current); // Clears the timer before it executes
  };

  return (
    <div style={{backgroundColor:"lightgray", padding:"2.2rem"}}>
    <h1>4. Handling Timers</h1>
      <h2>🔄 Timer using useRef</h2>
      <button style={{backgroundColor:"green"}} onClick={startTimer}>Start Timer</button>
      <button style={{backgroundColor:"red"}} onClick={stopTimer}>Stop Timer</button>
    </div>
  );
};

export default TimerExample;

// Explanation:
// useRef stores the setTimeout ID.
// clearTimeout(timerRef.current) cancels the timer without re-rendering.


