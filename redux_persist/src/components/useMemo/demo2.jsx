// Avoids unnecessary filtering computations.

// Problem: Filtering a large list on every render is inefficient.
// Solution: useMemo ensures the filtering runs only when the search term changes.

import React, { useState, useMemo } from "react";

// Sample user data
const users = [
  { id: 1, name: "Dixita" },
  { id: 2, name: "Darshita" },
  { id: 3, name: "Vishva" },
  { id: 4, name: "Mansi" },
];

const FilteredList = () => {
  const [search, setSearch] = useState("");

  // Memoized filtered list to prevent unnecessary recalculations
  const filteredUsers = useMemo(() => {
    console.log("🔎 Filtering Users...");
    return users.filter((user) => user.name.toLowerCase().includes(search.toLowerCase()));
  }, [search]); // Only run when `search` changes

  return (
    <div style={{backgroundColor:"lightgray", padding:"2.2rem"}}>
    <h1>2. Filtering Large Data Lists</h1>
      <input type="text" placeholder="Search users..." onChange={(e) => setSearch(e.target.value)} />
      <ul>{filteredUsers.map((user) => <li key={user.id}>{user.name}</li>)}</ul>
    </div>
  );
};

export default FilteredList;
