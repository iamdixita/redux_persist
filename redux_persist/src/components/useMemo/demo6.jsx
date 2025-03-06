// Avoids unnecessary recalculations when adding/removing items.

import React, { useState, useMemo } from "react";

const Cart = () => {
  // State to manage the cart items (each with a name and price)
  const [cart, setCart] = useState([
    { name: "Item A", price: 100 },
    { name: "Item B", price: 200 },
  ]);

  // Memoized total price calculation to prevent unnecessary recalculations
  const totalPrice = useMemo(() => {
    console.log("🛒 Calculating Total Price..."); // Logs whenever calculation runs
    return cart.reduce((sum, item) => sum + item.price, 0); // Sum up the prices of all items in the cart
  }, [cart]); // Only recalculates when `cart` changes

  return (
    <div style={{backgroundColor:"lightgray", padding:"2.2rem"}}>
    <h1>6. Memoizing Computed Totals in Shopping Cart</h1>
      <h2>Total Price: ${totalPrice}</h2> {/* Displays the total cart value */}
      
      {/* Button to add a new item to the cart */}
      <button style={{backgroundColor:"#D32D41"}} onClick={() => setCart([...cart, { name: "New Item", price: 150 }])}>
        Add Item
      </button>
    </div>
  );
};

export default Cart;
