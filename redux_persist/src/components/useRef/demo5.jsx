// Definition: useRef stores values that event listeners can access without re-renders.

import React, { useState, useRef, useEffect } from "react";

const EventListenerExample = () => {
  const [count, setCount] = useState(0);
  const countRef = useRef(count); // Store latest count
  const containerRef = useRef(null); // Reference to the div container

  // Update the ref whenever count changes
  useEffect(() => {
    countRef.current = count;
  }, [count]);

  useEffect(() => {
    const handleClick = (event) => {
      // Only trigger alert if the click happened inside our div
      if (containerRef.current && containerRef.current.contains(event.target)) {
        alert(`Current count: ${countRef.current}`);
      }
    };

    // Attach event listener only to the component div
    containerRef.current.addEventListener("click", handleClick);

    return () => {
      containerRef.current.removeEventListener("click", handleClick);
    };
  }, []); // Runs only once when component mounts

  return (
    <div style={{backgroundColor:"lightgray", padding:"2.2rem"}}>
       <div ref={containerRef} style={{ padding: "20px" }}>
       <h1>5. Persisting Values in Event Listeners</h1>
      <h2>Count: {count}</h2>
      <button style={{backgroundColor:"#e38690"}} onClick={() => setCount(count + 1)}>Increment</button>
    </div>
    </div>
  );
};

export default EventListenerExample;

// Explanation:
// countRef.current keeps the latest value for event listeners without triggering re-renders.
