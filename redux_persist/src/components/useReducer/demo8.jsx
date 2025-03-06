// Undo/Redo functionality is essential for applications like text editors, form inputs, and design tools. 
// With useReducer, we can efficiently manage state history for undo/redo actions.

import React, { useReducer } from "react";

// Initial state for the undo/redo reducer
const initialState = {
  past: [], // Stores previous states for undo
  present: "", // Current state
  future: [], // Stores undone states for redo
};

// Reducer function to handle undo/redo actions
const undoRedoReducer = (state, action) => {
  switch (action.type) {
    case "UPDATE_TEXT":
      return {
        past: [...state.past, state.present], // Save current state to past
        present: action.payload, // Update present state
        future: [], // Clear future since new changes invalidate redo history
      };

    case "UNDO":
      if (state.past.length === 0) return state; // Prevent undo if history is empty
      const previousState = state.past[state.past.length - 1];
      return {
        past: state.past.slice(0, -1), // Remove last item from past
        present: previousState, // Set present to last past value
        future: [state.present, ...state.future], // Store current state in future for redo
      };

    case "REDO":
      if (state.future.length === 0) return state; // Prevent redo if future is empty
      const nextState = state.future[0];
      return {
        past: [...state.past, state.present], // Move present to past
        present: nextState, // Set present to first future value
        future: state.future.slice(1), // Remove first item from future
      };

    case "RESET":
      return initialState; // Reset to initial state

    default:
      return state;
  }
};

const UndoRedoExample = () => {
  const [state, dispatch] = useReducer(undoRedoReducer, initialState);

  return (
    <div style={{backgroundColor:"lightgray", padding:"2.2rem"}}>
    <h1>8. Undo/Redo State Management</h1>
    <div style={styles.container}>
      <h2>📝 Undo/Redo Example</h2>

      {/* Text Input */}
      <input
        type="text"
        value={state.present}
        onChange={(e) => dispatch({ type: "UPDATE_TEXT", payload: e.target.value })}
        style={styles.input}
        placeholder="Type something..."
      />

      {/* Display Current State */}
      <p>Current Text: <strong>{state.present}</strong></p>

      {/* Undo/Redo Buttons */}
      <div style={styles.buttonGroup}>
        <button
          style={state.past.length > 0 ? styles.button : { ...styles.button, ...styles.disabledButton }}
          onClick={() => dispatch({ type: "UNDO" })}
          disabled={state.past.length === 0}
        >
          ⬅ Undo
        </button>

        <button
          style={state.future.length > 0 ? styles.button : { ...styles.button, ...styles.disabledButton }}
          onClick={() => dispatch({ type: "REDO" })}
          disabled={state.future.length === 0}
        >
          Redo ➡
        </button>

        <button style={{ ...styles.button, ...styles.resetButton }} onClick={() => dispatch({ type: "RESET" })}>
          🔄 Reset
        </button>
      </div>
    </div>
    </div>
  );
};

// Inline Styles
const styles = {
  container: { textAlign: "center", fontFamily: "Arial, sans-serif", maxWidth: "400px", margin: "auto", padding: "20px" },
  input: { width: "100%", padding: "10px", fontSize: "16px", marginBottom: "10px", borderRadius: "5px", border: "1px solid #ccc" },
  buttonGroup: { marginTop: "20px" },
  button: {
    padding: "10px 15px",
    margin: "5px",
    border: "none",
    cursor: "pointer",
    fontSize: "16px",
    borderRadius: "5px",
    backgroundColor: "#007bff",
    color: "white",
  },
  resetButton: { backgroundColor: "#dc3545" },
  disabledButton: { backgroundColor: "gray", cursor: "not-allowed" },
};

export default UndoRedoExample;
