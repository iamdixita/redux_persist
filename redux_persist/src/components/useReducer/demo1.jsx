// A simple counter that increases or decreases.

import React, { useReducer } from "react"; 

// Reducer function to handle state changes based on action type
const counterReducer = (state, action) => {
  switch (action.type) {
    case "INCREMENT": // If action type is "INCREMENT"
      return { count: state.count + 1 }; // Increase count by 1
    case "DECREMENT": // If action type is "DECREMENT"
      return { count: state.count - 1 }; // Decrease count by 1
    default:
      return state; // Return the current state if action type is not recognized
  }
};

const Counter = () => {
  // Initialize state using useReducer hook
  // state: Current state value
  // dispatch: Function to send actions to the reducer
  const [state, dispatch] = useReducer(counterReducer, { count: 0 });

  return (
    <div style={{backgroundColor:"lightgray", padding:"2.2rem"}}>
    <h1>1. Basic Counter (Increment & Decrement)</h1>
      <h2>Count: {state.count}</h2> {/* Display current count */}
      
      {/* Button to increase count */}
      <button style={{backgroundColor:"#000"}} onClick={() => dispatch({ type: "INCREMENT" })}>+</button>

      {/* Button to decrease count */}
      <button style={{backgroundColor:"#000"}} onClick={() => dispatch({ type: "DECREMENT" })}>-</button>
    </div>
  );
};

export default Counter; 
