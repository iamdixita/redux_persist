// Processes API data only when needed.

// Problem: Transforming API data every render is inefficient.
// Solution: useMemo caches transformed data to optimize performance.

import React, { useState, useMemo } from "react";

// Sample API data
const rawData = [
  { name: "Alice", age: 25 },
  { name: "Bob", age: 30 },
];

const TransformedData = () => {
  const [filterAge, setFilterAge] = useState(0);

  // Memoized transformation function
  const transformedData = useMemo(() => {
    console.log("🔄 Transforming API Data...");
    return rawData.map((user) => ({
      ...user,
      ageCategory: user.age > filterAge ? "Old" : "Young",
    }));
  }, [filterAge]); // Recalculates only when `filterAge` changes

  return (
    <div style={{backgroundColor:"lightgray", padding:"2.2rem"}}>
    <h1>5. Memoizing API Response Data Transformations</h1>
      <button style={{backgroundColor:"#D32D41"}} onClick={() => setFilterAge(filterAge + 5)}>Increase Age Filter</button>
      <pre>{JSON.stringify(transformedData, null, 2)}</pre>
    </div>
  );
};

export default TransformedData;
