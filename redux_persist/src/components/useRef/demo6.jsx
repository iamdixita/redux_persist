// This example demonstrates how to use useRef to scroll to the bottom of a div smoothly when a button is clicked.

import React, { useRef } from "react";

const ScrollToBottom = () => {
  // useRef to store reference to the bottom div
  const bottomRef = useRef(null);

  // Function to scroll to the bottom element
  const scrollToBottom = () => {
    bottomRef.current.scrollIntoView({ behavior: "smooth" }); // Scrolls smoothly to the bottom
  };

  return (
    <div style={{backgroundColor:"lightgray", padding:"2.2rem"}}>
    <h1>6. Implementing a Scroll to Bottom Feature</h1>
      {/* Scrollable container */}
      <div style={{ height: "200px", overflowY: "auto", border: "1px solid black", marginBottom: "10px" }}>
        {/* Large content to make scrolling necessary */}
        <div style={{ height: "500px" }}>Scroll Down</div>

        {/* Element we scroll to */}
        <div ref={bottomRef}>⬇ Bottom of Content</div>
      </div>

      {/* Move the button outside to avoid interference */}
      <button style={{backgroundColor:"#e38690"}} onClick={scrollToBottom}>Scroll to Bottom</button>
    </div>
  );
};

export default ScrollToBottom;
