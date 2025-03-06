//  Use Case: Store unsaved text input without causing frequent re-renders.

import React, { useState, useRef } from "react";

const SaveDraft = () => {
  const [displayText, setDisplayText] = useState(""); // Stores visible draft
  const draftRef = useRef(""); // Stores draft without re-rendering

  const handleChange = (e) => {
    draftRef.current = e.target.value; // Store input value
    setDisplayText(e.target.value); // Update visible text (triggers re-render)
  };

  return (
    <div style={{backgroundColor:"lightgray", padding:"2.2rem"}}>
    <h1>7. Save Draft Using useRef Without Re-rendering</h1>
      <input type="text" placeholder="Type something..." onChange={handleChange} />
      <p>Saved Draft: {displayText}</p>
    </div>
  );
};

export default SaveDraft;
