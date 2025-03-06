// The EnhancedDataFetching component is a React functional component that performs API fetching with pagination and auto-refresh. 
// It uses the useReducer hook to manage state changes efficiently and useEffect to handle data fetching and updates.


import React, { useReducer, useEffect } from "react";

// API endpoint
const API_URL = "https://jsonplaceholder.typicode.com/posts";

// Reducer function to manage API state
const dataReducer = (state, action) => {
  switch (action.type) {
    case "FETCH_START":
      return { ...state, loading: true, error: null };
    case "FETCH_SUCCESS":
      return { loading: false, error: null, data: action.payload, page: action.page };
    case "FETCH_ERROR":
      return { loading: false, error: action.payload, data: [] };
    case "SET_PAGE":
      return { ...state, page: action.page };
    default:
      return state;
  }
};

const EnhancedDataFetching = () => {
  const [state, dispatch] = useReducer(dataReducer, {
    data: [],
    loading: false,
    error: null,
    page: 1, // Default to page 1
  });

  const fetchData = () => {
    dispatch({ type: "FETCH_START" });

    fetch(`${API_URL}?_page=${state.page}&_limit=5`) // Pagination: Fetch 5 posts per page
      .then((response) => {
        if (!response.ok) throw new Error("Failed to fetch data");
        return response.json();
      })
      .then((data) => {
        dispatch({ type: "FETCH_SUCCESS", payload: data, page: state.page });
      })
      .catch((error) => {
        dispatch({ type: "FETCH_ERROR", payload: error.message });
      });
  };

  // Fetch data on mount & whenever the page changes
  useEffect(() => {
    fetchData();
  }, [state.page]);

  // Auto-refresh every 30 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      fetchData();
    }, 30000); // Refresh every 30 seconds

    return () => clearInterval(interval);
  }, [state.page]);

  // Inline Styles
  const styles = {
    container: { textAlign: "center", fontFamily: "Arial, sans-serif" },
    button: {
      padding: "10px 15px",
      margin: "5px",
      border: "none",
      cursor: "pointer",
      fontSize: "16px",
      borderRadius: "5px",
    },
    retryButton: { backgroundColor: "#dc3545", color: "white" },
    navButton: { backgroundColor: "#007bff", color: "white" },
    disabledButton: { backgroundColor: "gray", cursor: "not-allowed" },
    listItem: {
      background: "#f4f4f4",
      margin: "5px 0",
      padding: "10px",
      borderRadius: "5px",
      listStyle: "none",
    },
    errorText: { color: "red", fontSize: "18px" },
  };

  return (
    <div>
    <h1>6. Fetching Data with API Calls</h1>
    <div style={styles.container}>
      <h3>📡 Enhanced API Fetching with Pagination</h3>

      {/* Show loading message */}
      {state.loading && <p>Loading data...</p>}

      {/* Show error message with Retry button */}
      {state.error && (
        <div>
          <p style={styles.errorText}>Error: {state.error}</p>
          <button style={{ ...styles.button, ...styles.retryButton }} onClick={fetchData}>
            Retry 🔄
          </button>
        </div>
      )}

      {/* Show fetched data */}
      <ul style={{ padding: 0 }}>
        {state.data.map((item) => (
          <li key={item.id} style={styles.listItem}>
            {item.title}
          </li>
        ))}
      </ul>

      {/* Pagination controls */}
      <div style={{backgroundColor:"lightgray", padding:"2.2rem"}}>
        <button
          style={state.page === 1 ? { ...styles.button, ...styles.disabledButton } : { ...styles.button, ...styles.navButton }}
          onClick={() => dispatch({ type: "SET_PAGE", page: state.page - 1 })}
          disabled={state.page === 1}
        >
          ⬅ Previous
        </button>
        <span> Page {state.page} </span>
        <button
          style={{ ...styles.button, ...styles.navButton }}
          onClick={() => dispatch({ type: "SET_PAGE", page: state.page + 1 })}
        >
          Next ➡
        </button>
      </div>
    </div>
    </div>
  );
};

export default EnhancedDataFetching;


// Since API fetching involves multiple states (loading, data, error, pagination, auto-refresh), useReducer is the better choice here. 