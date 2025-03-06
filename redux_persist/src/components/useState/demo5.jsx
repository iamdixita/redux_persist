// Definition: useState controls the visibility of an element.(show/hide)

import React, { useState } from "react";

function ShowHideText() {
  // State to track visibility of the text
  const [isVisible, setIsVisible] = useState(false);

  return (
    <div style={{backgroundColor:"lightgray", padding:"2.2rem"}}>
    <h1>5. controls the visibility of an element</h1>
      {/* Toggles the text visibility */}
      <button style={{backgroundColor:"#e38690"}} onClick={() => setIsVisible(!isVisible)}>
        {isVisible ? "Hide" : "Show"} Text
      </button>

      {/* If isVisible is true, show the text */}
      {isVisible && <p>This is the hidden text!</p>}
    </div>
  );
}

export default ShowHideText;
