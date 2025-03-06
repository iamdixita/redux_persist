// Definition: useState switches between light and dark mode.

import React, { useState } from "react";

function LightDarkMode() {
  // State to track dark mode status
  const [darkMode, setDarkMode] = useState(false);

  return (
    <div style={{ 
        background: darkMode ? "#333" : "#fff", 
        color: darkMode ? "#fff" : "#000", 
        height: "25vh",
        // textAlign: "center",
        paddingTop:"3rem"
      }}>
    <h1>7. Switches between light and dark mode</h1>
      <button style={{backgroundColor:"#e38690"}} onClick={() => setDarkMode(!darkMode)}>
          {darkMode? "Toggle Light Mode": "Toggle Dark mode"}
      </button>
    </div>
  );
}

export default LightDarkMode;
