// This example Avoids unnecessary regex executions. and recomputes only when text updates.

// Problem: Running regex matching on every render is inefficient.
// Solution: useMemo ensures regex runs only when the input changes.

import React, { useState, useMemo } from "react";

const REGEX_PATTERN = /\bReact\b/gi;

const RegexHighlighter = () => {
  const [text, setText] = useState("");

  // Memoize regex matching
  const highlightedText = useMemo(() => {
    console.log("🔍 Running Regex...");
    return text.replace(REGEX_PATTERN, (match) => `<strong>${match}</strong>`);
  }, [text]); // Runs only when `text` changes

  return (
    <div style={{backgroundColor:"lightgray", padding:"2.2rem"}}>
    <h1>9. Avoiding Expensive Regex Computation</h1>
      <textarea onChange={(e) => setText(e.target.value)} placeholder="Type something about React..." />
      <p dangerouslySetInnerHTML={{ __html: highlightedText }}></p>
    </div>
  );
};

export default RegexHighlighter;
