// This effect starts a timer when mounted and stops it when unmounted.

import React, { useState, useEffect } from "react"; 

function Timer() {
  const [seconds, setSeconds] = useState(0);

  useEffect(() => {
    // Start an interval that increments `seconds` every 1 second
    const interval = setInterval(() => {
      setSeconds((s) => s + 1);
    }, 1000);

    // Cleanup function: Runs when the component unmounts
    return () => {
      clearInterval(interval); // Stop the timer to prevent memory leaks
      console.log("Timer stopped!"); 
    };
  }, []); // Empty dependency array ensures `useEffect` runs only once on mount

  return(
    <>
    <div style={{backgroundColor:"lightgray", padding:"2.2rem"}}>
      <h1>7. Timer with Cleanup Function</h1>
      <h2>Time Elapsed: {seconds} sec</h2>
    </div>
    </>
  ); 
}

export default Timer; 
