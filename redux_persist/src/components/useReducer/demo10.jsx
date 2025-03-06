// This example demonstrates how to manage user authentication state (Login/Logout) using useReducer. 
// It simulates a simple login/logout functionality, where a user enters their name and gets "authenticated."

import React, { useReducer } from "react";

// Initial authentication state
const initialAuthState = {
  isAuthenticated: false, // User is not logged in initially
  user: null, // No user data initially
  loading: false, // No API request is in progress
};

// Reducer function to manage authentication states and actions
const authReducer = (state, action) => {
  switch (action.type) {
    case "LOGIN_START":
      return { ...state, loading: true }; // Set loading to true while logging in
    case "LOGIN_SUCCESS":
      return { isAuthenticated: true, user: action.payload, loading: false }; // Store user data on successful login
    case "LOGOUT":
      return initialAuthState; // Reset state to initial values
    default:
      return state; // Return unchanged state if action type is unknown
  }
};

const AuthComponent = () => {
  // useReducer hook to manage authentication state
  const [state, dispatch] = useReducer(authReducer, initialAuthState);
  
  // useState to handle username input field
  const [username, setUsername] = React.useState("");

  // Function to handle login action
  const handleLogin = () => {
    if (username.trim() === "") return alert("Please enter a username!"); // Ensure username is not empty

    dispatch({ type: "LOGIN_START" }); // Set loading state

    // Simulate API delay (1.5 seconds) before logging in
    setTimeout(() => {
      dispatch({ type: "LOGIN_SUCCESS", payload: username }); // Dispatch successful login with username
    }, 1500);
  };

  return (
    <div style={{backgroundColor:"lightgray", padding:"2.2rem"}}>
    <h1>10. User Authentication State - Simulating login/logout.</h1>
    <div style={styles.container}>
      <h2>🔐 Authentication</h2>

      {/* Show loading indicator when login is in progress */}
      {state.loading ? (
        <p>Loading... ⏳</p>
      ) : state.isAuthenticated ? ( // If user is logged in, show welcome message
        <div>
          <h3>Welcome, {state.user} 🎉</h3>
          {/* Logout button to reset state */}
          <button style={styles.logoutButton} onClick={() => dispatch({ type: "LOGOUT" })}>
            Logout 🚪
          </button>
        </div>
      ) : (
        <div>
          {/* Input field for username */}
          <input
            type="text"
            placeholder="Enter your username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            style={styles.input}
          />
          {/* Login button */}
          <button style={styles.loginButton} onClick={handleLogin}>
            Login 🚀
          </button>
        </div>
      )}
    </div>
    </div>

  );
};

// Inline Styles for UI elements
const styles = {
  container: {
    textAlign: "center",
    fontFamily: "Arial, sans-serif",
    maxWidth: "400px",
    margin: "auto",
    padding: "20px",
  },
  input: {
    width: "80%",
    padding: "10px",
    fontSize: "16px",
    marginBottom: "10px",
    borderRadius: "5px",
    border: "1px solid #ccc",
  },
  loginButton: {
    padding: "10px 15px",
    border: "none",
    cursor: "pointer",
    fontSize: "16px",
    borderRadius: "5px",
    backgroundColor: "#28a745", // Green button for login
    color: "white",
  },
  logoutButton: {
    padding: "10px 15px",
    border: "none",
    cursor: "pointer",
    fontSize: "16px",
    borderRadius: "5px",
    backgroundColor: "#dc3545", // Red button for logout
    color: "white",
  },
};

export default AuthComponent;
