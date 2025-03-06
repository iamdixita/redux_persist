// This effect animates text opacity when the component mounts.

import React, { useEffect, useState } from "react"; 

function AnimatedText() {
  // State to control the opacity of the text
  const [opacity, setOpacity] = useState(0); // Initially invisible (opacity = 0)

  useEffect(() => {
    // Set a timeout to change opacity to 1 after 500ms (fade-in effect)
    let timeout = setTimeout(() => setOpacity(1), 500);

    // Cleanup function: Clears the timeout if the component unmounts
    return () => clearTimeout(timeout);
  }, []); // Runs only once when the component mounts

  return (
    <>
    <div style={{backgroundColor:"lightgray", padding:"2.2rem"}}>
    <h1>10. Animate Component on Mount</h1>
    <h2 style={{ opacity, transition: "opacity 1s" }}>
      Hello, React!
    </h2>
    </div>
    </>
  );
}

export default AnimatedText; 
