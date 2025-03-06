// A step-based form (multi-step form) allows users to fill out sections one step at a time instead of all at once. 
// We'll use useReducer to manage the form state and navigation.

import React, { useReducer } from "react";

// Initial form state
const initialState = {
  step: 1, // Track current step
  data: {
    name: "",
    email: "",
    password: "",
  },
  errors: {}, // Store validation errors
};

// Reducer function to handle form state
const formReducer = (state, action) => {
  switch (action.type) {
    case "NEXT_STEP":
      return { ...state, step: state.step + 1, errors: {} }; // Reset errors when proceeding
    case "PREV_STEP":
      return { ...state, step: state.step - 1 };
    case "UPDATE_FIELD":
      return {
        ...state,
        data: { ...state.data, [action.field]: action.value },
      };
    case "SET_ERRORS":
      return { ...state, errors: action.errors };
    default:
      return state;
  }
};

const StepForm = () => {
  const [state, dispatch] = useReducer(formReducer, initialState);

  // Validation function
  const validateStep = () => {
    const errors = {};
    if (state.step === 1 && !state.data.name) errors.name = "Name is required";
    if (state.step === 2 && !state.data.email) errors.email = "Email is required";
    if (state.step === 3 && !state.data.password) errors.password = "Password is required";

    if (Object.keys(errors).length > 0) {
      dispatch({ type: "SET_ERRORS", errors });
      return false;
    }
    return true;
  };

  // Handle Next Step
  const nextStep = () => {
    if (validateStep()) {
      dispatch({ type: "NEXT_STEP" });
    }
  };

  // Handle Previous Step
  const prevStep = () => {
    dispatch({ type: "PREV_STEP" });
  };

  // Handle Final Submission
  const handleSubmit = () => {
    if (validateStep()) {
      alert("Form Submitted Successfully! 🎉\n" + JSON.stringify(state.data, null, 2));
    }
  };

  return (
    <div style={{backgroundColor:"lightgray", padding:"2.2rem"}}>
    <h1>7. Step-Based Form Navigation </h1>
    <div style={styles.container}>
      <h2>Step {state.step} of 3</h2>

      {/* Step 1 - Name */}
      {state.step === 1 && (
        <div style={styles.inputGroup}>
          <label>Name:</label>
          <input
            type="text"
            value={state.data.name}
            onChange={(e) => dispatch({ type: "UPDATE_FIELD", field: "name", value: e.target.value })}
          />
          {state.errors.name && <p style={styles.error}>{state.errors.name}</p>}
        </div>
      )}

      {/* Step 2 - Email */}
      {state.step === 2 && (
        <div style={styles.inputGroup}>
          <label>Email:</label>
          <input
            type="email"
            value={state.data.email}
            onChange={(e) => dispatch({ type: "UPDATE_FIELD", field: "email", value: e.target.value })}
          />
          {state.errors.email && <p style={styles.error}>{state.errors.email}</p>}
        </div>
      )}

      {/* Step 3 - Password */}
      {state.step === 3 && (
        <div style={styles.inputGroup}>
          <label>Password:</label>
          <input
            type="password"
            value={state.data.password}
            onChange={(e) => dispatch({ type: "UPDATE_FIELD", field: "password", value: e.target.value })}
          />
          {state.errors.password && <p style={styles.error}>{state.errors.password}</p>}
        </div>
      )}

      {/* Navigation Buttons */}
      <div style={styles.buttonGroup}>
        {state.step > 1 && (
          <button style={{ ...styles.button, ...styles.prevButton }} onClick={prevStep}>
            ⬅ Previous
          </button>
        )}

        {state.step < 3 ? (
          <button style={{ ...styles.button, ...styles.nextButton }} onClick={nextStep}>
            Next ➡
          </button>
        ) : (
          <button style={{ ...styles.button, ...styles.submitButton }} onClick={handleSubmit}>
            Submit ✅
          </button>
        )}
      </div>
    </div>
</div>
  );
};

// Inline Styles
const styles = {
  container: { textAlign: "center", fontFamily: "Arial, sans-serif", maxWidth: "400px", margin: "auto", padding: "20px" },
  inputGroup: { marginBottom: "15px" },
  error: { color: "red", fontSize: "14px" },
  buttonGroup: { marginTop: "20px" },
  button: {
    padding: "10px 15px",
    margin: "5px",
    border: "none",
    cursor: "pointer",
    fontSize: "16px",
    borderRadius: "5px",
  },
  prevButton: { backgroundColor: "#007bff", color: "white" },
  nextButton: { backgroundColor: "#28a745", color: "white" },
  submitButton: { backgroundColor: "#dc3545", color: "white" },
};

export default StepForm;
