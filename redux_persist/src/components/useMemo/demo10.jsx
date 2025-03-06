// This example Caches API data in localStorage and avoids unnecessary refetching.

// Problem: Fetching API data every time the component renders is inefficient.
// Solution: useMemo caches API data in localStorage and only fetches again when necessary.

import React, { useState, useEffect, useMemo } from "react";

const API_URL = "https://jsonplaceholder.typicode.com/posts";

const CachedApiData = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const cachedData = localStorage.getItem("apiData");

    if (cachedData) {
      setData(JSON.parse(cachedData)); // Load from cache
    } else {
      fetch(API_URL)
        .then((res) => res.json())
        .then((json) => {
          setData(json);
          localStorage.setItem("apiData", JSON.stringify(json)); // Save to cache
        });
    }
  }, []);

  // Memoize filtered data
  const memoizedData = useMemo(() => {
    console.log("🔄 Processing API data...");
    return data.slice(0, 5);
  }, [data]);

  return (
    <div style={{backgroundColor:"lightgray", padding:"2.2rem"}}>
    <h1>10. Caching API Data in Local Storage</h1>
      <h2>Memoized API Data</h2>
      <ul>{memoizedData.map((item) => <li key={item.id}>{item.title}</li>)}</ul>
    </div>
  );
};

export default CachedApiData;
