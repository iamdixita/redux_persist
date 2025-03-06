// Avoids unnecessary API calls on every keystroke.

// Problem: Calling the API on every keystroke is inefficient.
// Solution: useCallback with useMemo ensures API calls only trigger when needed.

import React, { useState, useCallback } from "react";

const SearchBar = () => {
  const [query, setQuery] = useState("");

  // Memoized API call function
  const fetchResults = useCallback(() => {
    console.log(`Fetching results for: ${query}`);
    // Simulate API request
  }, [query]); // Only recreates when `query` changes

  return (
    <div style={{backgroundColor:"lightgray", padding:"2.2rem"}}>
    <h1>3. Optimizing API Calls in a Search Bar</h1>
      <input type="text" onChange={(e) => setQuery(e.target.value)} placeholder="Search..." />
      <button style={{backgroundColor:"#e38690"}} onClick={fetchResults}>Search</button>
    </div>
  );
};

export default SearchBar;
