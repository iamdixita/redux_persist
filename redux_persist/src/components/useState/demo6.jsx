// Definition: useState updates with a new random number on button click.

import React, { useState } from "react";

function RandomNumber() {
  // State to store a random number
  const [number, setNumber] = useState(0);

  return (
    <div style={{backgroundColor:"lightgray", padding:"2.2rem"}}>
    <h1>6. Updates with a new random number on button click</h1>
      <h2>Random Number: {number}</h2>
      {/* Generates a new random number between 0 and 99 */}
      {/* Math.floor() is a built-in JavaScript function that rounds a number down to the nearest whole integer. */}
      {/* Math.random() * 200 generates a decimal, and Math.floor() converts it into an integer between 0 and 199. */}
      <button style={{backgroundColor:"#e38690"}} onClick={() => setNumber(Math.floor(Math.random() * 200))}>
        Generate
      </button>
    </div>
  );
}

export default RandomNumber;
