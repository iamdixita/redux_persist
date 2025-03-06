//  Controls modal open/close state.
// A modal is a popup or dialog box that appears on top of a web page. We will use useReducer to toggle the visibility of a modal.

import React, { useReducer, useEffect } from "react";

// Reducer function to handle modal visibility
const modalReducer = (state, action) => {
  switch (action.type) {
    case "OPEN":
      return { isVisible: true };
    case "CLOSE":
      return { isVisible: false };
    default:
      return state;
  }
};

const EnhancedModal = () => {
  const [state, dispatch] = useReducer(modalReducer, { isVisible: false });

  // Close modal when the ESC key is pressed
  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.key === "Escape") {
        dispatch({ type: "CLOSE" });
      }
    };

    // Attach event listener when modal is open
    if (state.isVisible) {
      window.addEventListener("keydown", handleKeyDown);
    }

    // Cleanup event listener when modal closes
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [state.isVisible]);

  return (
    <div style={{backgroundColor:"lightgray", padding:"2.2rem"}}>
    <h1>5. Modal Visibility Toggle</h1>
      {/* Button to open modal */}
      <button style={{backgroundColor:"#e38690"}} onClick={() => dispatch({ type: "OPEN" })}>Open Modal</button>

      {/* Modal - Only show when state.isVisible is true */}
      {state.isVisible && (
        <div className="modal-overlay" role="dialog" aria-hidden={!state.isVisible}>
          <div className="modal-content">
            <h2>Enhanced Modal</h2>
            <p>Press "ESC" to close or click the button below.</p>
            {/* Button to close modal */}
            <button style={{backgroundColor:"red"}} onClick={() => dispatch({ type: "CLOSE" })}>Close</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default EnhancedModal;


// Use useState if modal state is simple (true/false toggle).
//  Use useReducer if modal state may expand with more actions (e.g., animations, different types of modals, logging modal interactions).
