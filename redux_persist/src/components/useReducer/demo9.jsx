// Use useReducer to manage a simple stopwatch with start, pause, and reset functions.

import React, { useReducer, useEffect } from "react";

// Reducer function to handle stopwatch states
const stopwatchReducer = (state, action) => {
  switch (action.type) {
    case "START": 
      return { ...state, isRunning: true }; // Start the stopwatch
    case "PAUSE":
      return { ...state, isRunning: false }; // Pause the stopwatch
    case "RESET":
      return { isRunning: false, time: 0 }; // Reset stopwatch to initial state
    case "TICK":
      return { ...state, time: state.time + 1 }; // Increase time every second
    default:
      return state;
  }
};

const Stopwatch = () => {
  // useReducer hook for managing stopwatch state
  const [state, dispatch] = useReducer(stopwatchReducer, { time: 0, isRunning: false });

  // useEffect to handle timer updates
  useEffect(() => {
    let timer;
    if (state.isRunning) {
      timer = setInterval(() => {
        dispatch({ type: "TICK" }); // Dispatch a "TICK" action every second
      }, 1000);
    }
    return () => clearInterval(timer); // Cleanup interval when the component unmounts or stops running
  }, [state.isRunning]); // Effect runs when `isRunning` changes

  return (
    <div style={{backgroundColor:"lightgray", padding:"2.2rem"}}>
      <h1>9. Stopwatch with Start, Pause, and Reset</h1>
      {/* Display the elapsed time */}
      <h2>⏱ Time: {state.time}s</h2>

      {/* Buttons to control the stopwatch */}
      <button style={{backgroundColor:"green"}} onClick={() => dispatch({ type: "START" })}>Start</button>
      <button style={{backgroundColor:"red"}} onClick={() => dispatch({ type: "PAUSE" })}>Pause</button>
      <button style={{backgroundColor:"orange"}} onClick={() => dispatch({ type: "RESET" })}>Reset</button>
    </div>
  );
};

export default Stopwatch;

