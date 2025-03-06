//  Ensures API is only called after the user stops typing.

// Problem: API calls should wait until the user stops typing.
// Solution: useCallback with setTimeout creates a debounced function.

import React, { useState, useEffect } from "react";

const DebouncedSearch = () => {
  const [query, setQuery] = useState("");
  const [debouncedQuery, setDebouncedQuery] = useState("");

  // Debounce effect: Waits 500ms before updating `debouncedQuery`
  useEffect(() => {
    const handler = setTimeout(() => {
      setDebouncedQuery(query);
    }, 500); // 500ms debounce delay

    return () => {
      clearTimeout(handler); // Clears timeout if user types again before 500ms
    };
  }, [query]); // Runs only when `query` changes

  // Effect to simulate API call or console log
  useEffect(() => {
    if (debouncedQuery) {
      console.log(`Searching for: ${debouncedQuery}`);
    }
  }, [debouncedQuery]); // Runs only when `debouncedQuery` updates

  return (
    <div style={{backgroundColor:"lightgray", padding:"2.2rem"}}>
    <h1>4. Debouncing a Function (Delaying Execution)</h1>
      <input
        type="text"
        onChange={(e) => setQuery(e.target.value)}
        placeholder="Type and wait..."
      />
    </div>
  );
};

export default DebouncedSearch;

