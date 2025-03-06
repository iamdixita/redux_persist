// Definition: useState stores and updates input field values.

import React, { useState } from "react";

function TextInput() {
  // State to store the input text
  const [text, setText] = useState("");

  return (
    <div style={{backgroundColor:"lightgray", padding:"2.2rem"}}>
    <h1>3. Stores and updates input field values </h1>
      {/* Input field updates the state on every change */}
      <input
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      <p>You typed: {text}</p>
    </div>
  );
}

export default TextInput;
