// Definition: useState toggles between two values (true / false).

import React, { useState } from "react";

function Toggle() {
  // State to track ON/OFF status, default is OFF (false)
  const [isOn, setIsOn] = useState(false);

  return (
    <>
    <br></br><div style={{backgroundColor:"lightgray", padding:"2.2rem"}}>
    <h1>2. Toggles between two values (true / false) </h1>
    <button style={{backgroundColor:"#e38690"}} onClick={() => setIsOn(!isOn)}>
      {/* If isOn is true, display "ON", otherwise "OFF" */}
      {isOn ? "ON" : "OFF"}
    </button>
    </div><br></br>
    </>
  );
}

export default Toggle;
