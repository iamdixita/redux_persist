// Definition: useState manages multiple form fields.

import React, { useState } from "react";

function FormExample() {
  // State to store form input values as an object
  const [form, setForm] = useState({ name: "", email: "" });

  // Handles changes in input fields
  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  return (
    <div style={{backgroundColor:"lightgray", padding:"2.2rem"}}>
    <h1>4. Manages multiple form fields</h1>
      {/* Name input field */}
      <input name="name" value={form.name} onChange={handleChange} placeholder="Name" />
      {/* Email input field */}
      <input name="email" value={form.email} onChange={handleChange} placeholder="Email" />
      <p>Name: {form.name}</p>
      <p>Email: {form.email}</p>
    </div>
  );
}

export default FormExample;
