// Definition: useState stores and displays API data.

import React, { useState, useEffect } from "react";

function FetchData() {
  // State to store API response data
  const [data, setData] = useState([]);

  useEffect(() => {
    // Fetch data from API
    fetch("https://jsonplaceholder.typicode.com/todos")
      .then((response) => response.json())
      .then((json) => setData(json.slice(0, 3))); // Get first 5 posts
  }, []); // Empty dependency array -> runs only once

  return (
    <div style={{backgroundColor:"lightgray", padding:"1rem", marginTop:"1rem"}}>
    <h1>10. Stores and displays API data</h1>
      <h2>API Data:</h2>
      <p>
        {/* Loop through fetched data and display */}
        {data.map((item) => (
          <li key={item.id}>{item.title}</li>
        ))}
      </p>
    </div>
  );
}

export default FetchData;
