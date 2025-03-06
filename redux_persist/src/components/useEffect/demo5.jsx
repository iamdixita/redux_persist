// This effect fetches API data once when the component mounts.

import React, { useState, useEffect } from "react";

function FetchData() {
  const [data, setData] = useState([]);

  useEffect(() => {
    // Here we are using async await asyncronous process to fetc api
    async function fetchData() {
      const response = await fetch("https://jsonplaceholder.typicode.com/posts");
      const json = await response.json();
      setData(json.slice(0, 4)); // Get first 5 posts
    }
    fetchData();
  }, []);

  return (
    <div style={{backgroundColor:"lightgray", padding:"2.2rem"}}>
    <h1>5. Fetch Data from an API (componentDidMount)</h1>
      <h2>Fetched Data:</h2>
      <ul>
        {data.map((item) => (
          <li key={item.id}>{item.title}</li>
        ))}
      </ul>
    </div>
  );
}

export default FetchData;
