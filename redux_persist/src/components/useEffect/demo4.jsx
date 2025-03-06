// This effect runs whenever a prop (name) changes. It's useful for responding to parent component updates.

import React, { useEffect } from "react";

function EffectWithProps({ name }) {
  // Runs when `name` prop changes
  useEffect(() => {
    console.log("Name changed to:", name);
  }, [name]);

  return(
    <>
    <div style={{backgroundColor:"lightgray", padding:"2.2rem"}}>
      <h1>4. Run useEffect When Props Change</h1>
      <h2>Hello, {name}!</h2>
    </div>
    </>
  ); 
}

export default EffectWithProps;
