// This React program optimizes performance by using useMemo, useCallback, and React.memo to minimize 
// unnecessary re-renders while filtering a list of items.

// To fully optimize React performance,We combining useCallback, useMemo, and React.memo

// useMemo = prevents unnecessary filtering of the list.
// useCallback = ensures the same function reference is used.
// React.memo = prevents unnecessary child re-renders.

import React, { useState, useMemo, useCallback } from "react";

// Memoized child component (prevents unnecessary re-renders)
const ListItem = React.memo(({ item, handleClick }) => {
  console.log(`Rendering: ${item}`); // Logs when the item renders
  return <li onClick={() => handleClick(item)}>{item}</li>;
});

const FilteredList = () => {
  // State to store the search filter
  const [filter, setFilter] = useState("");

  // Static list of items
  const [items] = useState(["Apple", "Banana", "Cherry", "Mango", "Orange", "Peach"]);

  // Memoized filtering logic (only recalculates when `filter` changes)
  const filteredItems = useMemo(() => {
    console.log("Filtering list..."); // Logs when filtering occurs
    return items.filter((item) => item.toLowerCase().includes(filter.toLowerCase()));
  }, [filter, items]);

  // Memoized click handler function (prevents re-creation on every render)
  const handleClick = useCallback((item) => {
    alert(`Clicked: ${item}`); // Alerts the clicked item
  }, []); // Empty dependency array → function reference remains constant

  return (
    <div style={{backgroundColor:"lightgray", padding:"2.2rem"}}>
      <h1>8. Optimizing a List with Filtering and Memoization</h1>

      {/* Search input field */}
      <input 
        type="text" 
        onChange={(e) => setFilter(e.target.value)} 
        placeholder="Search..." 
      />

      {/* Render the filtered list */}
      <ul>
        {filteredItems.map((item) => (
          <ListItem key={item} item={item} handleClick={handleClick} />
        ))}
      </ul>
    </div>
  );
};

export default FilteredList;



