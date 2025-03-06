// Definition: useState manages an array and updates it dynamically.

import React, { useState } from "react";

function ItemList() {
  // State to store an array of items
  const [items, setItems] = useState([]);

  return (
    <div style={{backgroundColor:"lightgray", padding:"2.2rem"}}>
     <h1>8. Manages an array and updates it dynamically</h1>
      {/* Adds a new item to the list when clicked */}
      <button style={{backgroundColor:"#e38690"}} onClick={() => setItems([...items, `Item ${items.length + 1}`])}>
        Add Item
      </button>
      <p>
        {/* Maps through items array and displays each item */}
        {items.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </p>
    </div>
  );
}

export default ItemList;
