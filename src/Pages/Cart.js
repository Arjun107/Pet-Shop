import React, { useState } from "react";

const Cart = ({ detail }) => {
  if (!detail) {
    return <p>No dog selected yet 🐶{console.log({detail})}</p>;

  }

  return (
    
    <div className="cart">
      <h2>🛒 Cart</h2>
      {console.log({detail})}
      <p>
        <strong>Breed:</strong> {detail.Breed}
      </p>
      <p>
        <strong>Age:</strong> {detail.Age}
      </p>
      <p>
        <strong>Contact:</strong> {detail.Contact}
      </p>
      <p>
        <strong>Location:</strong> {detail.Location}
      </p>
    </div>
  );
};

export default Cart;
