// This effect runs only once when the component mounts. It's useful for initializing data, analytics tracking, etc.

import React, { useEffect } from "react";

function RunOnceEffect() {
  useEffect(() => {
    console.log("This runs only once when component mounts!");

    return () => console.log("Component unmounted!");
  }, []); // Empty dependency array → Runs only once

  return (
    <>
    <div style={{backgroundColor:"lightgray", padding:"2.2rem"}}>
      <h1>2. Run useEffect Only Once on Mount (componentDidMount)</h1>
      <h2>Check the console!</h2>
    </div>
    </>
    );
}

export default RunOnceEffect;
