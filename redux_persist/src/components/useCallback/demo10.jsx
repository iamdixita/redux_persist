// This React program demonstrates efficient API data fetching and rendering using 
// useEffect, useCallback, useMemo, and React.memo to optimize performance.

import React, { useState, useEffect, useMemo, useCallback } from "react";

// Memoized child component to prevent unnecessary re-renders
const DataDisplay = React.memo(({ data }) => {
  console.log("Rendering DataDisplay...");
  return (
    <ul>
      {data.map((item) => (
        <li key={item.id}>{item.title}</li>
      ))}
    </ul>
  );
});

const ApiFetcher = () => {
  // State to store fetched data
  const [data, setData] = useState([]);

  // State to trigger a refresh (not directly related to API fetching)
  const [refresh, setRefresh] = useState(false);

  // Memoized function to fetch data (prevents unnecessary recreation)
  const fetchData = useCallback(() => {
    console.log("Fetching API Data...");
    fetch("https://jsonplaceholder.typicode.com/posts?_limit=5")
      .then((res) => res.json())
      .then((json) => setData(json)); // Update state with API response
  }, []); // No dependencies → function reference remains the same

  // Fetch data when the component mounts
  useEffect(() => {
    fetchData();
  }, [fetchData]); // Runs only when `fetchData` changes

  // Memoized API data transformation (converts titles to uppercase)
  const processedData = useMemo(() => {
    console.log("Processing Data...");
    return data.map((item) => ({ ...item, title: item.title.toUpperCase() }));
  }, [data]); // Runs only when `data` changes

  return (
    <div style={{backgroundColor:"lightgray", padding:"2.2rem"}}>
      <h1>10. Optimized API Fetching with Memoized Response Processing</h1>
      {/* Clicking this button toggles the refresh state, causing re-render */}
      <button style={{backgroundColor:"#e38690"}} onClick={() => setRefresh(!refresh)}>Refresh Data</button>

      {/* Pass processed data to the memoized component */}
      <DataDisplay data={processedData} />
    </div>
  );
};

export default ApiFetcher;
