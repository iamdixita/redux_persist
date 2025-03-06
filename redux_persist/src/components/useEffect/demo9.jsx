// This effect changes the background color when dark mode is toggled.

import React, { useState, useEffect } from "react"; 

function DarkMode() {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    // Apply background color based on `darkMode` state
    document.body.style.backgroundColor = darkMode ? "#333" : "#fff";

    // Cleanup function to reset background color when component unmounts
    return () => {
      document.body.style.backgroundColor = "#fff";
    };
  }, [darkMode]); // Runs whenever `darkMode` state changes

  return (
    <>
    {/* <div style={{backgroundColor:"lightgray", padding:"2.2rem"}}> */}
     <div
      style={{
        background: darkMode ? "#333" : "#fff", 
        color: darkMode ? "#fff" : "#000", 
        height: "25vh",
        paddingTop:"3rem"
      }}
    >
    <h1>9. Dark Mode Toggle</h1>
      <button
        onClick={() => setDarkMode(!darkMode)}
        style={{
          padding: "10px 20px",
          fontSize: "16px",
          backgroundColor: darkMode ? "#fff" : "#333",
          color: darkMode ? "#000" : "#fff",
          border: "none",
          cursor: "pointer",
          borderRadius: "5px",
          transition: "all 0.3s ease",
        }}
      >
      {darkMode ? "Toggle light mode" : " Toggle Dark Mode"}
      </button>
    </div>
    </>
  );
}

export default DarkMode; 
