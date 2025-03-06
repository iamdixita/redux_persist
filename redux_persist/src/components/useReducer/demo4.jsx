// Handles shopping cart logic.

import React, { useReducer } from "react";

const cartReducer = (state, action) => {
  switch (action.type) {
    case "ADD_ITEM":
      // Adds a new item to the cart with a unique ID
      return [...state, { id: Date.now(), name: action.name }];
    case "REMOVE_ITEM":
      // Removes an item from the cart by filtering out the selected ID
      return state.filter((item) => item.id !== action.id);
    default:
      return state; // Returns current state if action type is not recognized
  }
};

const ShoppingCart = () => {
  // useReducer manages the cart state (list of items)
  const [cart, dispatch] = useReducer(cartReducer, []);

  return (
    <div style={{backgroundColor:"lightgray", padding:"2.2rem"}}>
    <h1>4. Cart Management (Add/Remove Items)</h1>
      {/* Buttons to add specific items to the cart */}
      <button style={{backgroundColor:"#e38690"}} onClick={() => dispatch({ type: "ADD_ITEM", name: "Strawberry" })}>
        Add Strawberry
      </button>
      <button style={{backgroundColor:"#e38690"}} onClick={() => dispatch({ type: "ADD_ITEM", name: "Cherry" })}>
        Add Cherry
      </button>
      <button style={{backgroundColor:"#e38690"}} onClick={() => dispatch({ type: "ADD_ITEM", name: "Blueberry" })}>
        Add Blueberry
      </button>

      {/* Displaying the list of items in the cart */}
      <ul>
        {cart.map((item) => (
          <li key={item.id}>
            {item.name}{" "}
            {/* Button to remove an item from the cart */}
            <button onClick={() => dispatch({ type: "REMOVE_ITEM", id: item.id })}>
              Remove
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ShoppingCart;
