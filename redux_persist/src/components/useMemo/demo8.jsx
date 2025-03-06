// This example ensuring that only the necessary portion of data is displayed at a time.
//  The useMemo hook is used to optimize the slicing operation, preventing unnecessary recalculations.

// Problem: Filtering data for pagination on every render is inefficient.
// Solution: useMemo ensures that paginated results only change when necessary.

import React, { useState, useMemo } from "react";

// Sample dataset
const items = Array.from({ length: 100 }, (_, i) => `Item ${i + 1}`);

const PaginatedList = () => {
  const [page, setPage] = useState(1);
  const itemsPerPage = 10;

  // Memoized paginated items
  const paginatedItems = useMemo(() => {
    console.log("📃 Paginating...");
    const start = (page - 1) * itemsPerPage;
    return items.slice(start, start + itemsPerPage);
  }, [page]); // Only updates when `page` changes

  return (
    <div style={{backgroundColor:"lightgray", padding:"2.2rem"}}>
    <h1>8. Pagination Handling - Memoizing Paginated Data</h1>
      <h2>Page {page}</h2>
      <ul>{paginatedItems.map((item, index) => <li key={index}>{item}</li>)}</ul>
      <button style={{backgroundColor:"orange"}} disabled={page === 1} onClick={() => setPage(page - 1)}>⬅ Prev</button>
      <button style={{backgroundColor:"green"}} disabled={page === 10} onClick={() => setPage(page + 1)}>Next ➡</button>
    </div>
  );
};

export default PaginatedList;
