// This effect fetches API data whenever the username prop changes.

import React, { useState, useEffect } from "react";

function SearchUser() {
  // State to store the username input
  const [username, setUsername] = useState("");
  // State to store the fetched user data
  const [userData, setUserData] = useState(null);

  useEffect(() => {
    if (!username) return; // Exit early if username is empty

    async function fetchUser() {
      try {
        const response = await fetch(`https://api.github.com/users/${username}`);
        const json = await response.json();
        setUserData(json); // Store the fetched data
      } catch (error) {
        console.error("Error fetching user:", error);
      }
    }

    fetchUser();
  }, [username]); // Runs when `username` changes

  return (
    <div style={{backgroundColor:"lightgray", padding:"2.2rem"}}>
      <h1>8. GitHub User Search</h1>

      {/* Input field to enter GitHub username */}
      <input
        type="text"
        placeholder="Enter GitHub username"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />

      {/* Display GitHub user details or show 'Not Found' */}
      <h2>GitHub User: {userData?.login || "Not Found"}</h2>
    </div>
  );
}

export default SearchUser;
