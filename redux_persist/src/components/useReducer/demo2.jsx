// Allows increasing or decreasing by a custom step.

import React, { useReducer } from "react"; 

// Reducer function to manage state changes
const stepReducer = (state, action) => {
  switch (action.type) {
    case "INCREMENT":
      return { count: state.count + action.payload }; // Increase count by payload value
    case "DECREMENT":
      return { count: state.count - action.payload }; // Decrease count by payload value
    default:
      return state; // Return current state if action type is unknown
  }
};

const CounterWithStep = () => {
  // Initializing useReducer with stepReducer and an initial state of { count: 0 }
  const [state, dispatch] = useReducer(stepReducer, { count: 0 });

  return (
    <div style={{backgroundColor:"lightgray", padding:"2.2rem"}}>
    <h1>2. Counter with Custom Step</h1>
      <h2>Count: {state.count}</h2> {/* Display current count */}

      {/* Dispatch INCREMENT action with a payload of 5 when clicked */}
      <button style={{backgroundColor:"#000"}} onClick={() => dispatch({ type: "INCREMENT", payload: 5 })}>+5</button>

      {/* Dispatch DECREMENT action with a payload of 5 when clicked */}
      <button style={{backgroundColor:"#000"}} onClick={() => dispatch({ type: "DECREMENT", payload: 5 })}>-5</button>
    </div>
  );
};

export default CounterWithStep; 
